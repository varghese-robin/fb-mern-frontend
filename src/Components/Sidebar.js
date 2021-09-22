/** @format */

import React from "react";
import "./Sidebar.css";

import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/StorefrontOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SidebarRow
				src='https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
				title='Robin'
			/>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title='COVID-19 Information Center'
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
			<SidebarRow Icon={PeopleIcon} title='Friends' />
			<SidebarRow Icon={ChatIcon} title='Messenger' />
			<SidebarRow Icon={StorefrontIcon} title='Marketplace' />
			<SidebarRow Icon={VideoLibraryIcon} title='Videos' />
			<SidebarRow Icon={ExpandMoreOutlined} title='More' />
		</div>
	);
};

export default Sidebar;
