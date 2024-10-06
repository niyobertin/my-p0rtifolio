import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, AppDispatch } from '../api/store';
import { fetchSingleBlog } from '../api/reducers/blogs';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaComment, FaThumbsUp } from 'react-icons/fa';
import parse from 'html-react-parser';
import { fetchComments, addComment } from '../api/reducers/comments';
import { fetchBlogLikes, likeBlog } from '../api/reducers/like';
import SkeletonSingleBlog from '../components/common/sekleton/singleBlogSekleton';

type BlogImage = File | string | null;

const SingleBlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();

  const { singleBlog, status, error } = useSelector((state: RootState) => state.blog);  
  const { comments, status: commentStatus } = useSelector((state: RootState) => state.comment);
  const { likeCount } = useSelector((state: RootState) => state.like);
  const [newComment, setNewComment] = useState({ visitor: '', comments: '' });
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlog(id));
      dispatch(fetchComments(id));
      dispatch(fetchBlogLikes(id));
      const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '{}');
      if (likedBlogs[id]) {
        setIsLiked(true);
      }
    }
  }, [id, dispatch]);

  const handleLike = async () => {
    if (id) {
      const response = await dispatch(likeBlog(id));
      //@ts-ignore
      if(response.payload?.message ==='Unauthorized'){
        toast.error("You are not logged in. Login first")
      }
      dispatch(fetchBlogLikes(id));

      const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '{}');
      if (isLiked) {
        delete likedBlogs[id]; 
      } else {
        likedBlogs[id] = true; 
      }
      localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
      setIsLiked(!isLiked);
    }
  };

  if (status === 'loading') {
    return (
      <div className='flex items-center justify-center h-screen text-white'>
       <SkeletonSingleBlog/>
      </div>
    );
  }

  const stripHtmlTags = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const handleCommentSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newComment.visitor.trim() && newComment.comments.trim() && id) {
      await dispatch(addComment({ id, comment: newComment }));
      setNewComment({ visitor: '', comments: '' });
      dispatch(fetchComments(id));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewComment({ ...newComment, [name]: value });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!singleBlog) {
    return <div>No blog found.</div>;
  }

  const getImageUrl = (image: BlogImage): string => {
    if (typeof image === 'string') return image;
    return ''; 
  };

  return (
    <div>
      <div className='sm:p-12 p-4 pt-12'>
          <Link to={'/'}>
            <h1 className='font-bold text-lg text-[#0063b4]'>
              Home<span className='text-yellow-200 font-bold text-lg '></span>
            </h1>
          </Link>
        <h1 className="sm:text-2xl text-lg font-bold text-black pt-4 pb-4 text-center text-black">
          {stripHtmlTags(singleBlog.title)}
        </h1>

        <div className="relative w-full sm:w-[90%] h-[30rem]  sm:mx-auto bg-cover bg-center">
          <img 
            src={getImageUrl(singleBlog.image)} 
            alt="blog" 
            className='rounded-md w-full h-full object-cover mb-4' 
          />
        </div>

        <div className='text-black pt-0'>{parse(singleBlog.content)}</div>

        <div className="flex items-center space-x-4 mt-4">
          <button 
            onClick={handleLike} 
            className={`flex items-center ${isLiked ? 'text-[#0063b4]' : 'text-black'}`}
          >
            <FaThumbsUp className="mr-2" /> {likeCount}
          </button>
          <div className="flex items-center text-black">
            <FaComment className="mr-2" /> {comments.length}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-black">Comments</h2>
          <div className="mt-4 space-y-4 sm:w-[50%] w-full">
            {comments.map((comment, index) => (
              <div key={index} className="p-4 rounded-md text-black">
                <p className='italic pb-1 text-sm'>{comment?.visitor}</p>
                <p>{comment?.comments}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-8 block">
          <input
            type="text"
            name="visitor"
            className="sm:w-[50%] w-full p-2 rounded-md bg-gray-900 text-white mb-2"
            value={newComment.visitor}
            onChange={handleInputChange}
            placeholder="Your name"
          /><br/>

          <textarea
            name="comments"
            className="sm:w-[50%] w-full p-2 rounded-md bg-gray-900 text-white mb-2"
            value={newComment.comments}
            onChange={handleInputChange}
            placeholder="Add a comment"
          /><br/>
          <button type="submit" className="mt-2 bg-[#0063b4] text-white px-4 py-2 rounded-md">
            {commentStatus === 'loading' ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SingleBlogPage;