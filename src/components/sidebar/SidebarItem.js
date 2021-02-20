import React from "react";
import { ArrowRight } from "@material-ui/icons";
import "../../styles/SidebarItem.css";

function SidebarItem({ arrow, icon, label }) {
	return (
		<div className="sidebarItem">
			<div className="siderbarItem__arrow">
				{arrow ? (
					<ArrowRight />
				) : (
					<ArrowRight className="sidebarItem__arrow--vh" />
				)}
			</div>

			<div className="sidebarItem__main">
				{icon}
				<p>{label}</p>
			</div>
		</div>
	);
}

export default SidebarItem;
