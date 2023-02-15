import React from "react";
import "./RightPane.css";

export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPainContainer">
        <div className="addContainer">
          <span className="sponsered">Sponsered</span>
          <img src="./images/ad1.png" alt="" className="adImage" />
          <span className="adText">
            We Are Open Now - Stay Safe - Stay Home <br />
            take-away | Delivery <br /> HOME DELIVERY - 031 222 5060 , 031 222
            6060 <br /> Sameeha Family Restaurant <br />
            www.sameeharst.com <br /> 390, Chilaw Road, Periyamulla, Negombo,Sri
            Lanka.
          </span>
        </div>
        <div className="birthdayContainer">
          <img src="./images/giftbox.png" alt="" className="birthdayImg" />
          <span className="birtdayText">
            <b> Jayami</b> and <b>5 others</b> having birthday today
          </span>
        </div>
        <div className="onlineList">
          <div className="onlineFriendContainer">
            <img src="./images/man1.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus">as</span>
          </div>
          <span className="friendOnlineName">Jayani Senanayaka</span>
        </div>

        <div className="onlineList">
          <div className="onlineFriendContainer">
            <img src="./images/man4.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus">as</span>
          </div>
          <span className="friendOnlineName">Sahan Dissanayaka</span>
        </div>

        <div className="onlineList">
          <div className="onlineFriendContainer">
            <img src="./images/man2.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus">as</span>
          </div>
          <span className="friendOnlineName">Kasun De Silva</span>
        </div>

        <div className="onlineList">
          <div className="onlineFriendContainer">
            <img src="./images/man3.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus">as</span>
          </div>
          <span className="friendOnlineName">Janaka Gunawardena</span>
        </div>

        <div className="onlineList">
          <div className="onlineFriendContainer">
            <img src="./images/man5.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus">as</span>
          </div>
          <span className="friendOnlineName">Dinithi Nimasha</span>
        </div>

        <div className="onlineList">
          <div className="onlineFriendContainer">
            <img src="./images/man6.jpg" alt="" className="onlineFriendImg" />
            <span className="onlineStatus">as</span>
          </div>
          <span className="friendOnlineName">Rahul R.</span>
        </div>
      </div>
    </div>
  );
}
