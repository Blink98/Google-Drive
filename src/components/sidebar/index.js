import {
	DeleteOutline,
	ImportantDevices,
	InsertDriveFile,
	PeopleAlt,
	QueryBuilder,
	StarBorder,
	Storage,
} from "@material-ui/icons";
import React from "react";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";
import "../../styles/Sidebar.css";

function index() {
	return (
		<div className="sidebar">
			{/* New file btn */}
			<NewFile />
			{/* Other btns */}
			<div className="sidebar__itemsContainer">
				{/* Sidebar items */}
				<SidebarItem arrow icon={<InsertDriveFile />} label={"My Drive"} />
				<SidebarItem arrow icon={<ImportantDevices />} label={"Computers"} />
				<SidebarItem icon={<PeopleAlt />} label={"Shared with me"} />
				<SidebarItem icon={<QueryBuilder />} label={"Recent"} />
				<SidebarItem icon={<StarBorder />} label={"Starred"} />
				<SidebarItem icon={<DeleteOutline />} label={"Bin"} />
				<hr />
				{/* Sidebar elements */}
				<SidebarItem icon={<Storage />} label={"Storage"} />
			</div>
		</div>
	);
}

export default index;
