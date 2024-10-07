import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useSelector } from 'react-redux';
import { RootState } from '../api/store';
import Spinner from './common/spinner';
import { Blog } from '../types';

interface BlogFormProps {
  onSubmit: (title: string, image: File | null, content: string, id?: string) => void;
  blog?: Blog; // Optional blog prop for editing
}

const BlogForm: React.FC<BlogFormProps> = ({ onSubmit, blog }) => {
  const [title, setTitle] = useState(blog?.title || '');
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState(blog?.content || '');
  const { status } = useSelector((state: RootState) => state.addArtical); // Make sure state is correct

  // If there's an image in the blog, it could be a URL. You can handle it separately.
  // const [imagePreview, setImagePreview] = useState<string | null>(blog?.image || null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      // setImagePreview(URL.createObjectURL(e.target.files[0])); // Preview the selected image
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, image, content); // Pass the blog ID if updating
    setTitle('');
    setImage(null);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring-green-300 p-2 sm:text-sm"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Blog Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          accept="image/*"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <ReactQuill value={content} onChange={setContent} />
      </div>

      <button
        type="submit"
        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-green-400'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? <Spinner /> : blog ? 'Update' : 'Submit'}
      </button>
    </form>
  );
};

export default BlogForm;
