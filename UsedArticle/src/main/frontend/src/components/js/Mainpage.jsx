import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Mainpage.css';

const Mainpage = () => {
  return (
    <div>
      <h2>Main Page</h2>
      <p>This is the main page content.</p>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </div>
  );
};

export default Mainpage;
