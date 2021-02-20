import React from "react";
import "../../styles/Header.css";
import {
	Apps,
	ExpandMore,
	HelpOutline,
	Search,
	Settings,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

function index({ userPhoto }) {
	return (
		<div className="header">
			<div className="header__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
					alt="Google Drive"
				/>
				<span>Drive</span>
			</div>
			<div className="header__searchContainer">
				<div className="header__searchBar">
					<Search />
					<input type="text" placeholder="Search in Drive..." />
					<ExpandMore />
				</div>
			</div>
			<div className="header__icons">
				<span>
					<IconButton>
						<HelpOutline />
					</IconButton>
					<IconButton>
						<Settings />
					</IconButton>
					<IconButton>
						<Apps className="header__icons--m" />
					</IconButton>
					<IconButton>
						<Avatar className="img" src={userPhoto} />
					</IconButton>
				</span>
			</div>
		</div>
	);
}

export default index;
