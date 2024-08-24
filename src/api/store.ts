
import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './reducers/blogs';
import  deleteBlog  from './reducers/blogs';
import  fetchSingleBlogSlice from './reducers/blogs';
import commentSlice from './reducers/comments';
import likeSlice from './reducers/like';
import registerSlice from './reducers/authentication'
import querrySlice from './reducers/contact.us'
import  addBlog  from './reducers/blogs';
import getQuerries from './reducers/contact.us'
import  deleteQuery  from './reducers/contact.us';


const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    blog:fetchSingleBlogSlice,
    deleteBloge:deleteBlog,
    comment:commentSlice,
    like:likeSlice,
    register:registerSlice,
    login:registerSlice,
    querries:querrySlice,
    addArtical:addBlog,
    listOfQuerries:getQuerries,
    removeQueries:deleteQuery,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
