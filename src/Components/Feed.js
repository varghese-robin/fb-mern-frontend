/** @format */

import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />
			<Post
				profilePic='https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
				message='yoo this is a message'
				timestamp='1601493943737'
				imgName='imgName'
				username='Robin'
			/>
		</div>
	);
};

export default Feed;
