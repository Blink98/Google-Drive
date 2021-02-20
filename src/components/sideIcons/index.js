import React from "react";
import { Add } from "@material-ui/icons";
import "../../styles/SideIcons.css";
import { IconButton } from "@material-ui/core";

function index() {
	return (
		<div className="sideIcons">
			<div className="sideIcons__top">
				<IconButton>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
						alt="Google Calendar"
					/>
				</IconButton>
				<IconButton>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/d/df/Google_Keep_icon.svg"
						alt="Google Keep"
					/>
				</IconButton>
				<IconButton>
					<img
						src="https://play-lh.googleusercontent.com/62OzNxLonba70XxMFP3X3dsdNS9lvG2xf5TqfhYDaw9iFn5as9gVSU23ExfCLoZXkMWA"
						alt="Google Task"
					/>
				</IconButton>
			</div>

			<hr />

			<div className="sideIcons__plusIcon">
				<IconButton>
					<Add />
				</IconButton>
				{/* <svg width="36" height="36" viewBox="0 0 36 36">
					<path fill="#34A853" d="M16 16v14h4V20z"></path>
					<path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
					<path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
					<path fill="#EA4335" d="M20 16V6h-4v14z"></path>
					<path fill="none" d="M0 0h36v36H0z"></path>
				</svg> */}
			</div>
		</div>
	);
}

export default index;
