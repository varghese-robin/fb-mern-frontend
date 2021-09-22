/** @format */

import { Avatar, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
	const [input, setInput] = useState("");
	const [image, setImage] = useState(null);

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("we handle submit here");
	};

	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				<Avatar src='https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg' />
				<form>
					<input
						type='text'
						className='messageSender__input'
						placeholder="What's on your mind?"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<Input
						type='file'
						className='messageSender__fileSelector'
						onChange={handleChange}
					/>
					<button onClick={handleSubmit} type='submit'>
						Hidden Submit
					</button>
				</form>
			</div>

			<div className='messageSender__bottom'>
				<div className='messageSender__option'>
					<VideocamIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className='messageSender__option'>
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div className='messageSender__option'>
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default MessageSender;
