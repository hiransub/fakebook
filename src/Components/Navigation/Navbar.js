import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span className="logo">Fakebook</span>
      </div>
      <div className="navBarCenter">
        <div className="searchBarBox">
          <SearchIcon className="searchIcon" />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Home</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIcon">
            <PeopleAltIcon />
            <span className="iconTag">3</span>
          </div>
          <div className="navBarIcon">
            <QuestionAnswerIcon />
            <span className="iconTag">12</span>
          </div>
          <div className="navBarIcon">
            <NotificationsIcon />
            <span className="iconTag">6</span>
          </div>

          <div className="profileImage">
            <img src="/images/1.jpg" alt="" className="profilePhoto" />
          </div>
        </div>
      </div>
    </div>
  );
}
