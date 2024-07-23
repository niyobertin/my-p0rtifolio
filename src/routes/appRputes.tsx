import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import SingleBlogPage from '../pages/singleBlogPage';

const AppRoutes: React.FC = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/:id" element={<SingleBlogPage />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRoutes;