import React from "react";
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  const handleLoginButtonClick = () => {
    router.push('/login');
  };

  const handleAboutButtonClick = () => {
    router.push('/about');
  };

  const handleContactButtonClick = () => {
    router.push('/contact');
  };

  const handleFAQButtonClick = () => {
    router.push('/faq');
  };

  return (
    <div className="body">
    <img src="/img2.jpg" alt="team work" />
      <nav className="nav-bar">
        <button onClick={handleAboutButtonClick}>About</button>
        <button onClick={handleContactButtonClick}>Contact</button>
	<button onClick={handleLoginButtonClick}>Get started</button>
      </nav>
      <div className="main-heading"><h1>link, connect and share your tech journey with fellow peers</h1></div>
      <p className="descriptive-text">Embark on a thrilling adventure through the vast realms of technology, where innovation knows no bounds!</p>	  
       <button onClick={handleLoginButtonClick} className="get-started-button">Get started</button>
      {/* Rest of the code */}   
    </div>
  );
}

