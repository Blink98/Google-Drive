import React, { useState } from "react";
import "../../styles/NewFile.css";

import firebase from "firebase";
import { storage, db } from "../../firebase";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
	return {
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function NewFile() {
	const classes = useStyles();

	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
	const [file, setFile] = useState(null);
	const [uploading, setUploading] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = () => {
		setUploading(true);

		storage
			.ref(`files/${file.name}`)
			.put(file)
			.then((snapshot) => {
				console.log(snapshot);
				storage
					.ref("files")
					.child(file.name)
					.getDownloadURL()
					.then((url) => {
						db.collection("myFiles").add({
							timestamp: firebase.firestore.FieldValue.serverTimestamp(),
							caption: file.name,
							fileUrl: url,
							size: snapshot._delegate.bytesTransferred,
						});

						setUploading(false);
						setOpen(false);
						setFile(null);
					});
			});
	};

	return (
		<div className="newFile">
			<div className="newFile__container" onClick={handleOpen}>
				{/* Plus icon */}
				<svg width="36" height="36" viewBox="0 0 36 36">
					<path fill="#34A853" d="M16 16v14h4V20z"></path>
					<path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
					<path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
					<path fill="#EA4335" d="M20 16V6h-4v14z"></path>
					<path fill="none" d="M0 0h36v36H0z"></path>
				</svg>
				<p>New</p>
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div style={modalStyle} className={classes.paper}>
					<p>Select files you want to upload!</p>
					{uploading ? (
						<p>Uploading...</p>
					) : (
						<>
							<input type="file" onChange={handleChange} />
							<button onClick={handleUpload}>Upload</button>
						</>
					)}
				</div>
			</Modal>
		</div>
	);
}

export default NewFile;
