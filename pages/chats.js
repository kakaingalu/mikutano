import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from 'next/head';

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedSecret = localStorage.getItem("secret");
    if (storedUsername && storedSecret) {
      setLoggedIn(true);
    } else {
      if (username.length === 0 || secret.length === 0) { 
      router.push("/");
      } else {
        setLoggedIn(true);
        localStorage.setItem("username", username);
        localStorage.setItem("secret", secret);
      }
    }
  }, [username, secret]);
  
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("secret");
    setLoggedIn(false);
    router.push("/");
  };

  if (!showChat) return <div />;

  return (
    <>
    <Head>
        <title>Mikutano</title>
    </Head>
    <div className="background"><h1 className="head-title">Mikutano</h1>
	  <div className="logo">
          <img src="/img1.png" alt="Logo" />
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="shadow-chat">
        <ChatEngine
          height='calc(100vh - 200px)'
          projectID="369e8a2c-b584-4ffc-ac13-e54928c58720"
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("secret")}
          renderNewMessageForm={() => <MessageFormSocial />}
	  className="chat-engine"
        />
	  <section className="help-section">
         <h2 className="help-header"></h2>
	  </section>
	  <div className="border"></div>
	  <div className="border2"></div>
	  <div className="section-2">
	  <p>Proudly created by Purity Chege, Joseph Kakai and Oluwatosin Orenaike.</p>
	  <p className="rights-text">© 2023 Mikutano</p></div>
      </div>
    </div>
    </>
  )
  }
