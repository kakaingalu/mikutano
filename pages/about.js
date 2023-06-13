import React, { useState } from 'react';
import { useRouter } from 'next/router';


export default function Index() {
  const router = useRouter();

  // Handler for the "Home" button click
  const handleHomeButtonClick = () => {
    router.push('/');
  };
  
  // Handler for the "Get started" button click
  const handleLoginButtonClick = () => {
    router.push('/login');
  };

  // Handler for the "Mikutano" heading click to refresh the page	
  const handleRefreshButtonClick = () => {
    window.location.reload();
  }

  // State variable for dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  
  // Function to toggle the dropdown
  const toggleDropdown = (dropdown) => {
  setIsDropdownOpen(prevDropdown => prevDropdown === dropdown ? null : dropdown);
  };



  return (
	  <div className="about-container">
	    {/* Buttons and headings */}
	    <button onClick={handleLoginButtonClick}>Get started</button>
	    <button onClick={handleHomeButtonClick}>Home</button>
	    <h1>About Mikutano</h1>
	    <h2 className="mikutano-button" onClick={handleRefreshButtonClick}>Mikutano</h2>
              
            {/* Vision */}
            <h2>Our Vision</h2>
            <p>At Mikutano, our vision is to create a platform that connects tech newcomers with industry professionals, fostering collaboration, knowledge sharing, and problem-solving. We believe that everyone should have access to resources and guidance in their tech journey, and our platform aims to bridge the gap between beginners and experts.
            </p>

            {/* Team */}
            <h2>Who We Are</h2>
            <p>Mikutano was created by a passionate team of individuals: Purity Chege, Joseph Kakai, and Oluwatosin Orenaike. We are dedicated to empowering aspiring technologists and providing a supportive community where they can learn, grow, and thrive.
            </p>
          
            {/* Offerings */}
            <h2>What We Offer</h2>
            <div>Through Mikutano, users can benefit from the following:
              <ul>
                <li>Tech Problem Solving: Our platform offers a space where users can seek solutions to their tech-related challenges. Whether it's coding, debugging, or understanding complex concepts, our community of professionals and fellow learners is here to help.</li>
                <li>Knowledge Sharing: We encourage active knowledge sharing among our users. Whether you are an industry expert or a beginner with a unique perspective, Mikutano provides a platform to share your insights, tutorials, and experiences.</li>
                <li>Collaboration Opportunities: Mikutano facilitates collaboration among users by connecting individuals with complementary skills and interests. Through collaborative projects, coding challenges, and hackathons, we aim to foster a collaborative environment where users can learn from each other and build innovative solutions together.</li>
              </ul>
            </div>

	    {/* Commitment */}
            <h2>Our Commitment</h2>
            <p>At Mikutano, we are committed to providing a safe, inclusive, and respectful environment for all users. We value diversity and believe in creating a space where everyone feels welcome and valued. We actively promote constructive interactions and discourage any form of discrimination or harassment.
            </p>

	    {/* Join Us */}
            <h2>Join Us!</h2>
            <p>Whether you are a tech enthusiast looking to expand your knowledge, a newcomer seeking guidance, or an industry professional eager to share your expertise, Mikutano welcomes you to join our community. Together, let's embark on an exciting tech journey, collaborate, and make meaningful connections.
            </p>

	    {/* Contact */}
	    <h2>Contact us</h2>
            <div className="dropdown-container">
	    {/* Twitter */}
              <div className="twitter-logo" onClick={() => toggleDropdown('twitter')}>
                <img src="/twitter.svg" alt="twitter logo" />
                {isDropdownOpen === 'twitter' && (
                  <ul className="dropdown">
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
            {/* GitHub */}
            <div className="github-logo" onClick={() => toggleDropdown('github')}>
              <img src="/github.svg" alt="github logo" />
              {isDropdownOpen === 'github' && (
                <ul className="dropdown">
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
            {/* Gmail */}
            <div className="gmail-logo" onClick={() => toggleDropdown('gmail')}>
              <img src="/gmail.png" alt="gmail logo" />
	       {isDropdownOpen === 'gmail' && (
                 <ul className="dropdown">
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
	  <div className="linkedin-dropdown-container">
            {/* LinkedIn */}
            <div className="linkedin-logo" onClick={() => toggleDropdown('linkedin')}>
              <img src="/linkedin.png" alt="linkedin logo" />
               {isDropdownOpen === 'linkedin' && (
                <ul className="dropdown-linkedin">
                  <li>
                    <a href="https://www.linkedin.com/in/joseph-kakai-041a96140/" target="_blank" rel="noopener noreferrer">
                      1. Joseph Kakai
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/purity-chege-99302b22b/" target="_blank" rel="noopener noreferrer">
                      2. Purity Chege
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tosin/" target="_blank" rel="noopener noreferrer">
                      3. Oluwatosin Orenaike
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>

	  <h2 className="about-section">Source Code</h2>
          {/* Source Code */}
	  <a className="source-code" href="https://github.com/wantonraven/mikutano"><img src="/github.svg" alt="github logo" /></a>

          {/* Bottom section */}
	  <section className="bottom-section"> <hr />Proudly created by Purity Chege, Joseph Kakai, Oluwatosin Orenaike
            <div className="about-rights">© 2023 Mikutano</div></section>
       </div>
  );
}

