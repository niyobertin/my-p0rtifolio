
import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './reducers/blogs';
import  fetchSingleBlogSlice from './reducers/blogs';
import commentSlice from './reducers/comments';
import likeSlice from './reducers/like';
import registerSlice from './reducers/authentication'
import querrySlice from './reducers/contact.us'



const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    blog:fetchSingleBlogSlice,
    comment:commentSlice,
    like:likeSlice,
    register:registerSlice,
    login:registerSlice,
    querries:querrySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
