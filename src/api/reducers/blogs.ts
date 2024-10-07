
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';
import { Blog, BlogsState } from '../../types';

export const fetchBlogs = createAsyncThunk<Blog[], void, { rejectValue: string }>(
  'blogs/fetchBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/blogs');
      return response.data.blogs;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const fetchSingleBlog = createAsyncThunk<Blog, string, { rejectValue: string }>(
  'blogs/fetchSingleBlog',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data.blogs;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const deleteBlog = createAsyncThunk<Blog, string, { rejectValue: string }>(
  'blogs/deleteBlog',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/blogs/${id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
          },
      });
      return response.data.blogs;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const addBlog = createAsyncThunk<Blog, Partial<Blog>, { rejectValue: string }>(
  'blogs/addBlog',
  async (newBlog, { rejectWithValue }) => {
    try {
      const response = await api.post('/blogs', newBlog, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return response.data.blog;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const updateBlog = createAsyncThunk<Blog, { id: string; updatedBlog: Partial<Blog> }, { rejectValue: string }>(
  'blogs/updateBlog',
  async ({ id, updatedBlog }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/blogs/${id}`, updatedBlog, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return response.data.blog;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred while updating the blog');
    }
  }
);

const initialState: BlogsState = {
  blogs: [],
  singleBlog: null,
  deleteBloge:null,
  status: 'idle',
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      })
      //fetch single blog
      .addCase(fetchSingleBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.status = 'succeeded';
        state.singleBlog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      })
       //delete single blog
       .addCase(deleteBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.status = 'succeeded';
        state.singleBlog = action.payload;
      })
      .addCase(deleteBlog.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      })
      //add blog
      .addCase(addBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.status = 'succeeded';
        state.blogs.push(action.payload);
      })
      .addCase(addBlog.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      })

      // Update Blog
      .addCase(updateBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.status = 'succeeded';
        state.singleBlog = action.payload;
      })
      .addCase(updateBlog.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      });
  },
});

export default blogsSlice.reducer;
