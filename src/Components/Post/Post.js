import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postContainer">
          <div className="postTop">
            <img src="./images/3.png" alt="" className="postImage" />
            <span className="postUserName">Sri Lanka Cricket</span>
            <span className="postAddedTime">5 mins ago</span>
          </div>
          <div className="postCenter">
            <div className="postCaption">
              Here's wishing Chaminda Vaas a very happy birthday! #LEGEND
            </div>
            <img src="./images/cric1.jpg" alt="" className="postedImage" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="./images/like.png" alt="" className="postReaction" />
              <img src="./images/care.png" alt="" className="postReaction" />
              <img src="./images/haha.png" alt="" className="postReaction" />
              <img src="./images/like.png" alt="" className="postReaction" />
              <img src="./images/love.png" alt="" className="postReaction" />
              <img src="./images/wow.png" alt="" className="postReaction" />
              <span className="likeCount">Panduka and 210 Others</span>
            </div>
            <div className="postBottomRight">
              <span className="comments">24 Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="postContainer">
          <div className="postTop">
            <img src="./images/logoSlim.jpg" alt="" className="postImage" />
            <span className="postUserName">Sri Lanka Institute of Marketing (SLIM)</span>
            <span className="postAddedTime">2 hours ago</span>
          </div>
          <div className="postCenter">
            <div className="postCaption">
              ඔබගේ වෘත්තීයේ ඉහලටම යන්න අවශ්‍ය English නිවැරැදිව <br /> හසුරවන්න
              ඉගෙනගන්න අපත් සමග අදම එකතු වෙන්න. <br /><br /> BPE (Business Professional
              English) at SLIM <br /> Colombo <br /> 071 149 5116 <br /> 071 979 8586 <br /><br /> Kandy <br /> 070 191
              8073 <br /> 070 333 6188
            </div>
            <img src="./images/slim.jpg" alt="" className="postedImage" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="./images/like.png" alt="" className="postReaction" />
              <img src="./images/care.png" alt="" className="postReaction" />
              <img src="./images/haha.png" alt="" className="postReaction" />
              <img src="./images/like.png" alt="" className="postReaction" />
              <img src="./images/love.png" alt="" className="postReaction" />
              <img src="./images/wow.png" alt="" className="postReaction" />
              <span className="likeCount">Waruna and 800 Others</span>
            </div>
            <div className="postBottomRight">
              <span className="comments">125 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
