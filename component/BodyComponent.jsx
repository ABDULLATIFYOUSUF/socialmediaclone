import React from "react";
import '../src/App.css';
import FacebookLogo from "../images/logo.png"
import FacebookPost from "../images/FacebookStatus.jpg"
import FacebookPost1 from "../images/FacebookStatus1.jpg"
import FacebookPost2 from "../images/FacebookStatus2.jpg"



const BodyComponent = () => {
    
    return(
        <>
        <div className="bodyMain">
            <div className="bodyOne">
                <a href="#">Profile</a>
                <a href="#">Friends</a>
                <a href="#">Saved</a>
                <a href="#">Feeds</a>
                <a href="#">Groups</a>
                <a href="#">Marketplace</a>
                <a href="#">Video</a>
                <a href="#">Memories</a>
                <a href="#">Pages</a>
                <a href="#">Events</a>
                <a href="#">Ad Center</a>
                <a href="#">Ads Manager</a>
                <a href="#">Blood Donations</a>
                <a href="#">Climate Science Center</a>
                <a href="#">Crisis response</a>
                <a href="#">Fundraisers</a>
                <a href="#">Gaming Video</a>
                <a href="#">Massanger</a>
                <a href="#">Massanger Kids</a>
                <a href="#">Orders and Payments</a>
                <a href="#">Play Games</a>
                <a href="#">Recent Ad activity</a>
                <hr />
                <a href="#">Your Texas Holder</a>                
            </div>
            <div className="bodyTwo">
                <div className="postMain">
                <div className="post">
                <img className="logo" src={FacebookLogo}></img>
                <input type="text" placeholder="What's on your mind, Latif?" />
                </div>
                <div className="post1">
                    <a href="#">Live video</a>
                    <a href="#">Photo/video</a>
                    <a href="#">Feeling/activity</a>
                </div>
                </div>
                <div className="card">
                <div className="cardPost"><img className="" src={FacebookPost1}></img>
                <div className="postHolder"><img className="logo" src={FacebookLogo}></img>
                <p>Facebook <br /> Yesterday at 07:02 PM</p></div>
                </div>
                <div className="likeShare">
                    <p>1 Like</p>
                    <p>1 Share</p>
                </div>
                <div className="likeShare second">
                    <p>Like</p>
                    <p>Comment</p>
                    <p>Share</p>
                </div>
                <div className="postlast">
                <img className="logo" src={FacebookLogo}></img>
                <input type="text" placeholder="Write a comment..." />
                </div>
                </div>
                <div className="card">
                <div className="cardPost"><img className="" src={FacebookPost2}></img>
                <div className="postHolder"><img className="logo" src={FacebookLogo}></img>
                <p>Facebook <br /> Yesterday at 07:02 PM</p></div>
                </div>
                <div className="likeShare">
                    <p>1 Like</p>
                    <p>1 Share</p>
                </div>
                <div className="likeShare second">
                    <p>Like</p>
                    <p>Comment</p>
                    <p>Share</p>
                </div>
                <div className="postlast">
                <img className="logo" src={FacebookLogo}></img>
                <input type="text" placeholder="Write a comment..." />
                </div>
                </div>
                <div className="card">
                <div className="cardPost"><img className="" src={FacebookPost}></img>
                <div className="postHolder"><img className="logo" src={FacebookLogo}></img>
                <p>Facebook <br /> Yesterday at 07:02 PM</p></div>
                </div>
                <div className="likeShare">
                    <p>1 Like</p>
                    <p>1 Share</p>
                </div>
                <div className="likeShare second">
                    <p>Like</p>
                    <p>Comment</p>
                    <p>Share</p>
                </div>
                <div className="postlast">
                <img className="logo" src={FacebookLogo}></img>
                <input type="text" placeholder="Write a comment..." />
                </div>
                </div>

            </div>
            <div className=".bodyThree">body3</div>
        </div>
        </>

    )

}

export default BodyComponent