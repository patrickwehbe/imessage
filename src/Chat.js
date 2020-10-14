import React, { useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import IconButton from "@material-ui/core/IconButton";
import "./Chat.css";
import { Icon } from "@material-ui/core";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    // Firebase
    setInput = "";
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Room Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <h5>This is a Message</h5>
      </div>
      <div className="chat__input">
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic"></MicNoneIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
