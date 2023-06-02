import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from 'next/router';

import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter()

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

  return (
    <div className="background">
      <div className="background-image">
	  </div>
      <div className="logo">
          <img src="/img1.png" alt="Logo" />
      </div>
      <div className="heading-top">
	  <div class="head-separator"></div>
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
	  <h1>What we do:</h1>
       <ul class="space-list">
      	<li>We aim to connect Tech newbies with professionals.</li>
	<li>Through mikutano you get solutions to tech problems.</li>
	<li>We enable sharing knowledge, collaboration, and solving problems together.</li>
       </ul>
      </div>
     <footer className="footer">
       <div class="footer-separator"></div>
	  proudly created by Purity Chege, Joseph Kakai, Oluwatosin Orenaike<br />
	  © 2023 Mikutano
     </footer>
    </div>
  );
}

