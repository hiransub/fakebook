import React from "react";
import "./AddPost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PlaceIcon from "@mui/icons-material/Place";

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="./images/1.jpg" alt="" className="addPostPic" />
          <input
            type="text"
            placeholder="Whats in your mind"
            className="addPostInput"
          />
        </div>
        <hr className="addPostHr" />

        <div className="addPostBottom">
          <div className="addPostOption">
            <div className="addPostOption">
              <InsertPhotoIcon htmlColor="#24C204" className="addPostIcon" />
              <span className="addPhotoOptionText">Photo/Video</span>
            </div>

            <div className="addPostOption">
              <EmergencyRecordingIcon htmlColor="red" className="addPostIcon" />
              <span className="addPhotoOptionText">Go Live</span>
            </div>

            <div className="addPostOption">
              <EmojiEmotionsIcon htmlColor="#F7D200" className="addPostIcon" />
              <span className="addPhotoOptionText">Feelings/Activity</span>
            </div>

            <div className="addPostOption">
              <PlaceIcon htmlColor="#FF421C" className="addPostIcon" />
              <span className="addPhotoOptionText">Check in</span>
            </div>

            <button className="addPostButton"><b>Post</b></button>
            
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
