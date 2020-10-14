import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateViewOutilinedIcon from "@material-ui/icons/RateReviewOutlined";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="search" />
        </div>
        <IconButton className="sidebar__inputButton">
          <RateViewOutilinedIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
