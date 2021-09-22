/** @format */

import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
	return (
		<div className='storyReel'>
			<Story
				image='https://static.billboard.com/files/media/Snoop-Dogg-cr-Kenneth-Cappello-billboard-1548-compressed.jpg'
				profileSrc='https://m.media-amazon.com/images/M/MV5BMjE2OTUwNTk4NF5BMl5BanBnXkFtZTcwMjMwOTk0NA@@._V1_UY1200_CR84,0,630,1200_AL_.jpg'
				title='Snoop Dogg'
			/>

			<Story
				image='https://img.buzzfeed.com/buzzfeed-static/static/2021-02/9/21/asset/1a5b278fa1b3/sub-buzz-8493-1612907508-2.jpg?crop=720%3A720%3B157%2C2&downsize=900:*&output-format=auto&output-quality=auto'
				profileSrc='https://www.songhall.org/images/uploads/Trolls_June2016_0258B_flat.jpg'
				title='Justin Timberlake'
			/>

			<Story
				image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/JohnMayerin2019.jpg/1200px-JohnMayerin2019.jpg'
				profileSrc='https://m.media-amazon.com/images/I/41aygVCnZBS._SL1000_.jpg'
				title='John Mayer'
			/>
		</div>
	);
};

export default StoryReel;
