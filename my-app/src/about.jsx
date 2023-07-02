import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
// about style
import './about.css';

function AboutPage() {

  const sideBar = (
    <div className="sidenav">
      <Link to="/#home">Home</Link>
      <Link to="/#about">About</Link>
    </div>
  );

  const aboutPage = (
    <div className="about">
      <h1>About this website</h1>
      <p>about page</p>
    </div>
  );

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(aboutPage);
  root.render(sideBar);

}

export default AboutPage;
