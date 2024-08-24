import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';
import { ContactorDetails,ContactState } from '../../types';
import { AxiosError } from 'axios';


export const fetchQuerries = createAsyncThunk<ContactorDetails[], void, { rejectValue: string }>(
    'comments/fetchQuerries',
    async (id, { rejectWithValue }) => {
      try {
        const response = await api.get('/querries',{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
          },
        });
        return response.data.querries;
      } catch (error: any) {
        return rejectWithValue(error.response?.data || 'An error occurred');
      }
    }
  );



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

export const deleteQuery = createAsyncThunk<ContactorDetails, string, { rejectValue: string }>(
  'blogs/deleteQuery',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/querries/${id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
          },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred');
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
        .addCase(fetchQuerries.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchQuerries.fulfilled, (state, action: PayloadAction<ContactorDetails[]>) => {
          state.loading = false;
          state.messages = action.payload;
        })
        .addCase(fetchQuerries.rejected, (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || null;
        })
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
        })

        //delete single query
        .addCase(deleteQuery.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteQuery.fulfilled, (state, action: PayloadAction<ContactorDetails>) => {
          state.loading = false;
          state.messages.push(action.payload);
        })
        //@ts-ignore
        .addCase(deleteQuery.rejected, (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || null;
        })
    },
});

export default QuerriesSlice.reducer;