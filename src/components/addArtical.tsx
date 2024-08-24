import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useSelector } from 'react-redux';
import { RootState } from '../api/store';
import Spinner from './common/spinner';

interface BlogFormProps {
  onSubmit: (title: string, image: File | null, content: string) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState('');
  const { status } = useSelector((state: RootState) => state.addArtical);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, image, content);
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
          required
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
        {status === 'loading' ? <Spinner /> : 'Submit'}
      </button>
    </form>
  );
};

export default BlogForm;
