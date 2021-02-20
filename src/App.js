import { useState } from "react";
import "./App.css";
import FilesView from "./components/filesView/FilesView";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import SideIcons from "./components/sideIcons";
import { auth, provider } from "./firebase";

function App() {
	const [user, setUser] = useState();

	const handleLogin = () => {
		if (!user) {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					setUser(result.user);
					console.log(result.user);
				})
				.catch((error) => {
					alert(error.message);
				});
		} else if (user) {
			auth
				.signOut()
				.then(() => {
					setUser(null);
				})
				.catch((err) => alert(err.message));
		}
	};

	return (
		<div className="App">
			{user ? (
				<>
					{/* Header */}
					<Header userPhoto={user.photoURL} />
					<div className="app__main">
						{/* Left Sidebar */}
						<Sidebar />
						{/* File Area */}
						<FilesView />
						{/* Right Sidebar */}
						<SideIcons />
					</div>
				</>
			) : (
				<div className="app__login">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
						alt="Google Drive"
					/>
					<button onClick={handleLogin}>Log in to Google Drive</button>
				</div>
			)}
		</div>
	);
}

export default App;
