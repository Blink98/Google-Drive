import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import FileItem from "./FileItem";
import "../../styles/FilesView.css";
import FileCard from "./FileCard";

function FilesView() {
	const [files, setFiles] = useState([]);

	useEffect(() => {
		db.collection("myFiles").onSnapshot((snapshot) => {
			setFiles(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					item: doc.data(),
				}))
			);
		});
	}, []);

	return (
		<div className="fileView">
			<div className="fileView__row">
				{/* Files Cards */}
				{files.slice(0, 5).map(({ id, item }) => (
					<FileCard name={item.caption} />
				))}
			</div>
			<div className="fileView__titles">
				<div className="fileView__titles--left">
					<p>Name</p>
				</div>
				<div className="fileView__titles--right">
					<p>Last Modified</p>
					<p>Files Size</p>
				</div>
			</div>
			{/* Files Items */}

			{files.map(({ id, item }) => (
				<FileItem
					id={id}
					caption={item.caption}
					timestamp={item.timestamp}
					fileUrl={item.fileUrl}
					size={item.size}
				/>
			))}
		</div>
	);
}

export default FilesView;
