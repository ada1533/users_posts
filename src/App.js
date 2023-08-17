import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfo from './components/UserInfo'; // Adjust the path accordingly
import PostList from './components/PostList'; // Adjust the path accordingly

function App() {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/user/:id" element={<UserInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
