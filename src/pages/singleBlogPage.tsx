
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, AppDispatch } from '../api/store';
import { fetchSingleBlog } from '../api/reducers/blogs';
import Spinner from '../components/common/spinner';
import { Link } from 'react-router-dom';
import { FaComment, FaThumbsUp } from 'react-icons/fa';
import parse from 'html-react-parser';
import { fetchComments, addComment } from '../api/reducers/comments';
import { fetchBlogLikes, likeBlog } from '../api/reducers/like';

type BlogImage = File | string | null;

const SingleBlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();

  const { singleBlog, status, error } = useSelector((state: RootState) => state.blog);  
  const [comment, setComments] = useState<string[]>([]);
  const [likes, setLikes] = useState(0);
  const { comments, status: commentStatus } = useSelector((state: RootState) => state.comment);
  const { likeCount} = useSelector((state: RootState) => state.like);
  const [newComment, setNewComment] = useState({ visitor: '', comments: '' });

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlog(id));

      dispatch(fetchComments(id));
      dispatch(fetchBlogLikes(id));
    }
  }, [id, dispatch]);

  if (status === 'loading') {
    return (
      <div className='flex items-center justify-center h-screen text-white'>
        <Spinner />Loading ...
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

  const handleLike = async () => {
    if (id) {
      await dispatch(likeBlog(id));
      dispatch(fetchBlogLikes(id)); 
    }
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
      <div className='fixed bg-[#1e1e1e] w-full text-white pl-16 p-4 text-lg'>
        <span className='text-white hover:text-yellow-300'>
          <Link to={'/'}>
            <h1 className='font-bold text-lg'>
              Niyonkuru<span className='text-yellow-200 font-bold text-lg'>.</span>
            </h1>
          </Link>
        </span>
      </div>
      <div className='p-12'>
        <h1 className="text-2xl font-bold text-white pt-4 pb-4 text-center text-yellow-300">
          {stripHtmlTags(singleBlog.title)}
        </h1>
        <img src={getImageUrl(singleBlog.image)} alt="blog" className='rounded-md sm:w-[60%] w-[100%] object-cover float-left p-4' />
        <div className='text-white pt-0'>{parse(singleBlog.content)}</div>

        <div className="flex items-center space-x-4 mt-4">
          <button onClick={handleLike} className="flex items-center text-yellow-300">
            <FaThumbsUp className="mr-2" /> {likeCount}
          </button>
          <div className="flex items-center text-yellow-300">
            <FaComment className="mr-2" /> {comments.length}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-white">Comments</h2>
          <div className="mt-4 space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-md text-white">
                <p className='italic pb-1 text-sm'>{comment?.visitor}</p>
                <p>{comment?.comments}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-8">
          <input
            type="text"
            name="visitor"
            className="w-full p-2 rounded-md bg-gray-900 text-white mb-2"
            value={newComment.visitor}
            onChange={handleInputChange}
            placeholder="Your name"
          />

          <textarea
            name="comments"
            className="w-full p-2 rounded-md bg-gray-900 text-white mb-2"
            value={newComment.comments}
            onChange={handleInputChange}
            placeholder="Add a comment"
          />
          <button type="submit" className="mt-2 bg-yellow-300 text-black px-4 py-2 rounded-md">
            {commentStatus === 'loading' ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>

    </div>
  );
};

export default SingleBlogPage;
