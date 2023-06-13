import React from "react";
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  // Handle button click to navigate to the login page
  const handleLoginButtonClick = () => {
    router.push('/login');
  };

  // Handle button click to navigate to the about page
  const handleAboutButtonClick = () => {
    router.push('/about');
  };

  // Handle button click to reload the page and navigate to the home page
  const handleHomeButtonClick = () => {
    window.location.reload();
    router.push('/');
  };

  // Handle h1 click to reload the page
  const handleh1Click = () => {
    window.location.reload();
  };

  return (
    <div className="body">
    {/* Body image */}
    <img src="/img2.jpg" alt="team work" className="body-image" loading="lazy" />
      {/* Navigation bar */}
      <nav className="nav-bar">
	<h1 onClick={handleh1Click}>Mikutano</h1>
	<img src="/img1.svg" alt="logo" onClick={handleh1Click} loading="lazy" />
	{/* Navigation buttons */}
        <button onClick={handleHomeButtonClick}>Home</button>
	<button onClick={handleAboutButtonClick}>About</button>
	<button onClick={handleLoginButtonClick}>Get started</button>
      </nav>
      {/* Main heading */}
      <div className="main-heading"><h1>link, connect and share your tech journey with fellow peers</h1></div>
      <p className="descriptive-text">Embark on a thrilling adventure through the vast realms of technology, where innovation knows no bounds!</p>	  
       <button onClick={handleLoginButtonClick} className="get-started-button">Get started</button>
      <div className="lower-page-heading">How can Mikutano help you?</div>
	  {/* Main container 1 */}
	  <div className="main-container1">
	  <div className="first-text">Together, we'll navigate the ever-evolving landscape of technology, sharing insights, exchanging ideas, and building connections that transcend borders and boundaries. Whether you're a seasoned tech enthusiast or just taking your first steps into this awe-inspiring world, there's a place for you in our vibrant community.</div>
	  <div className="first-image">
	  <img src="/img4.jpeg" alt="work space" loading="lazy" />
	  </div>
	  </div>
	  <hr className="border1" />
          {/* Main container 2 */}
	  <div className="main-container2">
	  <div className="second-image">
          <img src="/img5.jpg" alt="person browsing" loading="lazy" />
          </div>

	  <div className="second-text">
	  Imagine the possibilities as we unite our diverse perspectives, blending knowledge and experiences from every corner of the globe. From futuristic AI applications to groundbreaking advancements in web development, we'll be at the forefront of it all, embracing the opportunities and challenges that lie ahead.
	  </div>
	  </div>
	  <hr className="border1" />
	  <div className="main-container3">
	  {/* Main container 3 */}
          <div className="third-text">Build right connections with tech professionals Together, we'll navigate the ever-evolving landscape of technology, sharing insights, exchanging ideas, and building connections that transcend borders and boundaries. Whether you're a seasoned tech enthusiast or just taking your first steps into this awe-inspiring world, there's a place for you in our vibrant community.
          </div>
          <div className="third-image">
          <img src="/img9.jpeg" alt="work space" loading="lazy" />
          </div>
          </div>
	  <hr className="border1" />
	  {/* Main container 4 */}
	  <div className="main-container4">
          <div className="four-image">
          <img src="/img10.jpeg" alt="person browsing" loading="lazy" />
          </div>
	  <hr className="border1" />
          <div className="four-text">
          Connect and share experiences with peers Imagine the possibilities as we unite our diverse perspectives, blending knowledge and experiences from every corner of the globe. From futuristic AI applications to groundbreaking advancements in web development, we'll be at the forefront of it all, embracing the opportunities and challenges that lie ahead.
          </div>
          </div>
	  <hr className="border1" />
	  {/* Main container 5 */}
	  <div className="main-container5">
          <div className="five-text">
          Unleash the power of collective learning So, let's link our minds, connect our passions, and share our tech journey with fellow peers. Together, we'll create a collaborative space where creativity thrives, questions are answered, and inspiration flows freely. It's time to unleash the power of collective learning, shaping the future of technology while forging lasting friendships along the way.
          </div>
	  <div className="five-image">
          <img src="/img11.jpeg" alt="person browsing" loading="lazy" />
          </div>
          </div>
	  <hr className="border1" />
	  <div className="home-feature"><h1>Features</h1></div>
	  <hr className="border1" />

	  <div className="main-container5">
          <div className="five-image">
          <img src="/p6.jpg" alt="person browsing" loading="lazy" />
          </div>
	  <div className="five-text">
           <ul>
	     <li>Seamless Messaging: Ensure that the messaging functionality is fast, efficient, and provides real-time updates. Users should be able to send and receive messages quickly, without any noticeable delays.</li>
	     <li>Multiple Chat Rooms: Allow users to create and join multiple chat rooms. This feature enables users to engage in conversations on different topics simultaneously, increasing the versatility and utility of the app.</li>
	     <li>Privacy and Security: Prioritize user privacy and security by implementing robust measures such as end-to-end encryption to protect conversations and personal information. Users should feel confident that their data is secure while using the app.</li>
	     <li>Desktop Interface: Design an intuitive and visually appealing interface optimized for desktop screens. Ensure that the app provides a seamless user experience on desktop platforms, considering factors such as layout, navigation, and ease of use.</li>
	   </ul>
          </div>
          </div>
	  <div className="landing-footer">Proudly created by Purity Chege, Joseph Kakai, Oluwatosin Orenaike <p>© 2023 Mikutano</p></div>

    </div>
  );
}

