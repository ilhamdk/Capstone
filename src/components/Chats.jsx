import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [Chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(Chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          const userInfo = chat[1]?.userInfo;
          const lastMessage = chat[1]?.lastMessage;
  
          if (!userInfo) {
            return null; // Jika userInfo tidak tersedia, lewati iterasi ini
          }
  
          return (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(userInfo)}
            >
              <img src={userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{userInfo.displayName}</span>
                <p>{lastMessage?.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
  
};

export default Chats;
