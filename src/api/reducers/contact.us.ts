import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';
import { ContactorDetails,ContactState } from '../../types';
import { AxiosError } from 'axios';


// export const fetchComments = createAsyncThunk<Comment[], string, { rejectValue: string }>(
//     'comments/fetchComments',
//     async (id, { rejectWithValue }) => {
//       try {
//         const response = await api.get(`/blogs/${id}/comments`);
//         return response.data.comments;
//       } catch (error: any) {
//         return rejectWithValue(error.response?.data || 'An error occurred');
//       }
//     }
//   );

export const sendMessage = createAsyncThunk<ContactorDetails, ContactorDetails, { rejectValue: string }>(
  'users/register',
  async (contactData, { rejectWithValue }) => {
      try {
          const response = await api.post('/querries', contactData, {
              headers: {
                  "Content-Type": "application/json",
              },
          });
          return response.data;
      } catch (err) {
          const error = err as AxiosError;
          return rejectWithValue(error.message);
      }
  }
);


  const initialState: ContactState = {
    messages:[],
    loading: false,
    error: null,
  };
  
  const QuerriesSlice = createSlice({
    name: 'Querries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // .addCase(fetchComments.pending, (state) => {
        //   state.status = 'loading';
        // })
        // .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        //   state.status = 'succeeded';
        //   state.comments = action.payload;
        // })
        // .addCase(fetchComments.rejected, (state, action: PayloadAction<string | undefined>) => {
        //   state.status = 'failed';
        //   state.error = action.payload || null;
        // })
        .addCase(sendMessage.pending, (state) => {
          state.loading = true;
        })
        .addCase(sendMessage.fulfilled, (state, action: PayloadAction<ContactorDetails>) => {
          state.loading = false;
          state.messages.push(action.payload);
        })
        //@ts-ignore
        .addCase(sendMessage.rejected, (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || null;
        });
    },
});

export default QuerriesSlice.reducer;