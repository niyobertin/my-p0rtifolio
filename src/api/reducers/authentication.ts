import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../api';
import { User,UserState,Login,LoginState } from '../../types';
import { AxiosError } from 'axios';

export const registerNeUser = createAsyncThunk(
    'users/register',
    async(userData:User,{ rejectWithValue }) =>{
        try {
            const response = api.post('/users',userData,{
            headers: {
                "Content-Type": "application/json",
              },
            });
            return (await response).data;
          } catch (err) {
            const error = err as AxiosError;
            return rejectWithValue(error.response?.data || error.message);
          }
    }
);

export const loginAsUSer = createAsyncThunk(
    "login",
    async(loginData:Login,{ rejectWithValue }) => {
  try {
    const response = await api.post("/users/login",loginData);
    console.log("Payload being returned:", response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data);
  }
});
const initialState: UserState  = {
    isLoading: false,
    user: [],
    error: null,
  };

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerNeUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(registerNeUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
        })
        .addCase(registerNeUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
        })
        .addCase(loginAsUSer.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginAsUSer.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            localStorage.setItem("accessToken", action.payload.token);
          })
          .addCase(loginAsUSer.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
          });
    },
  });
  export default registerSlice.reducer;
  

