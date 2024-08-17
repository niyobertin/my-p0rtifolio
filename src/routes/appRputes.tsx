import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import SingleBlogPage from '../pages/singleBlogPage';
import RegisterUser from '../pages/register';
import Login from '../pages/login';

const AppRoutes: React.FC = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/:id" element={<SingleBlogPage />} />
          <Route path='/register' element={<RegisterUser/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    );
  };
  
  export default AppRoutes;