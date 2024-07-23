
import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './reducers/blogs';
import  fetchSingleBlogSlice from './reducers/blogs';
import commentSlice from './reducers/comments'

const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    blog:fetchSingleBlogSlice,
    comment:commentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
