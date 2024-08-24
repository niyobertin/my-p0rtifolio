import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';
import { Comment,CommentState } from '../../types';


export const fetchComments = createAsyncThunk<Comment[], string, { rejectValue: string }>(
    'comments/fetchComments',
    async (id, { rejectWithValue }) => {
      try {
        const response = await api.get(`/blogs/${id}/comments`);
        return response.data.comments;
      } catch (error: any) {
        return rejectWithValue(error.response?.data || 'An error occurred');
      }
    }
  );

  export const addComment = createAsyncThunk<Comment, { id: string, comment: Omit<Comment, '_id'> }, { rejectValue: string }>(
    'comments/addComment',
    async ({ id, comment }, { rejectWithValue }) => {
      try {
        const response = await api.post(`/blogs/${id}/comments`, comment);
        return response.data.comment;
      } catch (error: any) {
        return rejectWithValue(error.response?.data || 'An error occurred');
      }
    }
  );
  const initialState: CommentState = {
    comments:[],
    status: 'idle',
    error: null,
  };
  
  const CommentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchComments.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
          state.status = 'succeeded';
          state.comments = action.payload;
        })
        .addCase(fetchComments.rejected, (state, action: PayloadAction<string | undefined>) => {
          state.status = 'failed';
          state.error = action.payload || null;
        })

        .addCase(addComment.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addComment.fulfilled, (state, action: PayloadAction<Comment>) => {
          state.status = 'succeeded';
          state.comments.push(action.payload);
        })
        .addCase(addComment.rejected, (state, action: PayloadAction<string | undefined>) => {
          state.status = 'failed';
          state.error = action.payload || null;
        });

    },
});

export default CommentSlice.reducer;