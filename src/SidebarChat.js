import React, { useState } from "react";
import "./SidebarChat.css";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";
import { useEffect } from "react";
import db from "./Firebase";
import * as timeago from "timeago.js";
function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data))
      );
  }, [id]);

  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className="sidebarChat"
    >
      <Avatar src={chatInfo[0]?.photo} />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>
          {new Date(chatInfo[0]?.timetamp?.toDate()).toLocaleString()}
          {/* {timeago.format(new Date(chatInfo[0]?.timetamp?.toDate()))} */}
        </small>
      </div>
    </div>
  );
}

export default SidebarChat;
