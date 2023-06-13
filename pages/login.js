import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context";

import { useRouter } from 'next/router';

import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter()
  const isChatsPage = router.pathname === '/chats';
  const [currentDate, setCurrentDate] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleDropdown = (dropdown) => {
  setIsDropdownOpen(prevDropdown => prevDropdown === dropdown ? null : dropdown);
};

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return;

    axios.put(
      "https://api.chatengine.io/users/",
      {username, secret},
      {headers: {"private-key": '{PUT HERE YOUR PROJECT ID OR USE ENVITOMENTAL VARIABLES}'}}
    )
    .then(r => router.push('/chats'))
  }

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleHomeButtonClick = () => {
    router.push('/');
  };

  useEffect(() => {
    // Get the current date and time
    const updateDateTime = () => {
      const now = new Date();

      // Format the date and time as a string
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      // Combine the date parts
      const formattedDate = `${year} - ${month} - ${day} - ${hours} : ${minutes} : ${seconds}`;

      // Set the current date state
      setCurrentDate(formattedDate);
    };
    // Update the current date and time immediately
    updateDateTime();

    // Update the current date and time every second
    const interval = setInterval(updateDateTime, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
     <div className="container">
     <div className="background-index">
	  <h1 className="head-title-au" onClick={handleHomeButtonClick}>Mikutano</h1>
       {currentDate && <div className="date"> Date: {currentDate}</div>}
      <div className="background-image">
	  </div>
      <div className="logo" onClick={handleLogoClick}>
          <img src="/img1.png" alt="Logo" />
      </div>
      <div className="heading-top">
	  <div className="head-separator"></div>
	  Welcome to Mikutano
      </div>
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => onSubmit(e)}>
          <div className="auth-title">Mikutano</div>

          <div className="input-container">
            <input
            placeholder="Email"
            className="text-input"
            onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
            type="password"
            placeholder="Password"
            className="text-input"
            onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>

      </div>
      <div className="body-text">
	  <div className="body-head"><h1>What we do:</h1></div>
	 <div className="space-list"> 
           <ul>
      	   <li>We aim to connect Tech newbies with professionals.</li>
	   <li>Through mikutano you get solutions to tech problems.</li>
	   <li>We enable sharing knowledge, collaboration, and solving problems together.</li>
           </ul>
	 </div>
      </div>
     <footer className="section-1">
       <div className="footer-separator"></div>
	  <p>proudly created by Purity Chege, Joseph Kakai, Oluwatosin Orenaike</p>
	  <p>© 2023 Mikutano</p>
      </footer>
     </div>
    </div>
  );
}
