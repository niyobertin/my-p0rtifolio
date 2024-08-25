import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';

interface LikeState {
  likeCount: number; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const likeBlog = createAsyncThunk<void, string, { rejectValue: string }>(
  'likes/likeBlog',
  async (blogId, { rejectWithValue }) => {
    try {
      await api.post(`/blogs/${blogId}/likes`, {},{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
          },
      });
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const fetchBlogLikes = createAsyncThunk<number, string, { rejectValue: string }>(
  'likes/fetchBlogLikes',
  async (blogId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/blogs/${blogId}/likes`);
      return response.data.likes;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const initialState: LikeState = {
  likeCount: 0,
  status: 'idle',
  error: null,
};

const LikeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch blog likes
      .addCase(fetchBlogLikes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogLikes.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.likeCount = action.payload;
      })
      .addCase(fetchBlogLikes.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      })
      // Like blog
      .addCase(likeBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(likeBlog.fulfilled, (state) => {
        state.status = 'succeeded';
        state.likeCount += 1; // Increment the like count
      })
      .addCase(likeBlog.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload || null;
      });
  },
});

export default LikeSlice.reducer;
