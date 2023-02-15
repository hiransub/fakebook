import React from "react";
import "./LeftPane.css";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Groups2Icon from "@mui/icons-material/Groups2";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FlagIcon from "@mui/icons-material/Flag";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import StoreIcon from "@mui/icons-material/Store";

export default function LeftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneCotainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItem">
            <MarkEmailUnreadIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Message</span>
          </li>

          <li className="leftPaneMenuItem">
            <Groups2Icon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Groups</span>
          </li>

          <li className="leftPaneMenuItem">
            <RssFeedIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Feed</span>
          </li>

          <li className="leftPaneMenuItem">
            <FlagIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Page</span>
          </li>

          <li className="leftPaneMenuItem">
            <EventIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Event</span>
          </li>

          <li className="leftPaneMenuItem">
            <SettingsIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Setting</span>
          </li>

          <li className="leftPaneMenuItem">
            <SportsEsportsIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Games</span>
          </li>

          <li className="leftPaneMenuItem">
            <NewspaperIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">News</span>
          </li>

          <li className="leftPaneMenuItem">
            <WorkIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Jobs</span>
          </li>

          <li className="leftPaneMenuItem">
            <StoreIcon className="leftPaneMenuIcon" />
            <span className="leftPaneIconText">Market Place</span>
          </li>

          <hr />

          <div className="pagesFollowing">
            <h3>Following</h3>
          </div>

          <li className="followingPageList">
            <img src="/images/3.png" alt="" className="followingPageImg" />
            <span className="followingPageName">Sri Lanka Cricket</span>
          </li>

          <div className="pageList">
            <li className="followingPageList">
              <img src="/images/9.jpg" alt="" className="followingPageImg" />
              <span className="followingPageName">Hatton National Bank</span>
            </li>

            <li className="followingPageList">
              <img src="/images/4.jpg" alt="" className="followingPageImg" />
              <span className="followingPageName">CA Sri Lanka</span>
            </li>

            <li className="followingPageList">
              <img src="/images/5.png" alt="" className="followingPageImg" />
              <span className="followingPageName">TV Derana</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
