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
      {headers: {"private-key": 'fb32ed54-6541-4102-b21d-527a902f93e3'}}
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
	  <div className="dropdown-container">
	  <div className="twitter-logo" onClick={() => toggleDropdown('twitter')}>
	    <img src="/twitter.svg" alt="twitter logo" />
	    {isDropdownOpen === 'twitter' && (
              <ul className="dropdown-list">
                <li>
                    <a href="https://twitter.com/wantonraven" target="_blank" rel="noopener noreferrer">
                    1. Joseph Kakai
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Khai_Purity01" target="_blank" rel="noopener noreferrer">
                    2. Purity Chege
                    </a>
                </li>
		<li>    
                    <a href="https://twitter.com/otomisin" target="_blank" rel="noopener noreferrer">
		    3. Oluwatosin Orenaike
		    </a>
		</li>
              </ul>
            )}
	  </div>
	  </div>
	  <div className="dropdown-container">
	  <div className="github-logo" onClick={() => toggleDropdown('github')}>
            <img src="/github.svg" alt="github logo" />
          {isDropdownOpen === 'github' && (
              <ul className="dropdown-list2">
                <li>
                    <a href="https://github.com/wantonraven" target="_blank" rel="noopener noreferrer">
                    1. Joseph Kakai
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Khaikhai01" target="_blank" rel="noopener noreferrer">
                    2. Purity Chege
                    </a>
                </li>
                <li>
		   <a href="https://github.com/otomisin" target="_blank" rel="noopener norefererrer">
		   3. Oluwatosin Orenaike
		   </a>
		</li>
              </ul>
            )}

	  </div>
	  </div>
	  <div className="dropdown-container">
          <div className="gmail-logo" onClick={() => toggleDropdown('gmail')}>
            <img src="/gmail.png" alt="gmail logo" />
	  {isDropdownOpen === 'gmail' && (
              <ul className="dropdown-list3">
                <li>
                    <a href="mailto:josephngalu96@gmail.com">
                    1. Joseph Kakai
                    </a>
                </li>
                <li>
                    <a href="mailto:shishchei@gmail.com">
                    2. Purity Chege
                    </a>
                </li>
                <li>
		   <a href="orenaiket@yahoo.com">
		   3. Oluwatosin Orenaike
		   </a>
		</li>
              </ul>
            )}

          </div>
	  </div>
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
