import React from "react";
import Navbar from "../../Components/Navigation/Navbar";
import LeftPane from "../../Components/LeftPane/LeftPane";
import PostPane from "../../Components/PostPane/PostPane";
import RightPane from "../../Components/RightPane/RightPane";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="BottomContainer">
        <LeftPane />
        <PostPane />
        <RightPane />
      </div>
    </div>
  );
}
