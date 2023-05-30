import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="home-chat">
      <div className="container-chat">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
