/** @format */

import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Header = () => {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
					alt='Facebook Logo'
				/>
			</div>

			<div className='header__input'>
				<SearchIcon />
				<input type='text' placeholder='Search Facebook' />
			</div>

			<div className='header__center'>
				<div className='header__option header__option--active'>
					<HomeIcon fontsiz='large' />
				</div>
				<div className='header__option'>
					<FlagIcon fontsiz='large' />
				</div>
				<div className='header__option'>
					<SubscriptionsOutlinedIcon fontsiz='large' />
				</div>
				<div className='header__option'>
					<StorefrontOutlinedIcon fontsiz='large' />
				</div>
				<div className='header__option'>
					<SupervisedUserCircleIcon fontsiz='large' />
				</div>
			</div>

			<div className='header__right'>
				<div className='header__info'>
					<Avatar />
					<h4>Robin</h4>
				</div>

				<IconButton>
					<AddIcon />
				</IconButton>

				<IconButton>
					<ForumIcon />
				</IconButton>

				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>

				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default Header;
