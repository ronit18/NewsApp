import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
	const pageSize = 9;
	const apiKeys = process.env.REACT_APP_NEWSAPP_Api2;
	const [progress, setProgress] = useState(0);

	return (
		<>
			<Router>
				<Navbar />
				<LoadingBar color="#f11946" progress={progress} height={3} />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<News
								apiKeys={apiKeys}
								setProgress={setProgress}
								key="general"
								pageSize={pageSize}
								country="in"
								category="general"
							/>
						}
					/>

					<Route
						exact
						path="/business"
						element={
							<News
								apiKeys={apiKeys}
								setProgress={setProgress}
								key="business"
								pageSize={pageSize}
								country="in"
								category="business"
							/>
						}
					/>
					<Route
						exact
						path="/entertainment"
						element={
							<News
								apiKeys={apiKeys}
								setProgress={setProgress}
								key="entertainment"
								pageSize={pageSize}
								country="in"
								category="entertainment"
							/>
						}
					/>

					<Route
						exact
						path="/health"
						element={
							<News
								apiKeys={apiKeys}
								setProgress={setProgress}
								key="health"
								pageSize={pageSize}
								country="in"
								category="health"
							/>
						}
					/>
					<Route
						exact
						path="/science"
						element={
							<News
								apiKeys={apiKeys}
								setProgress={setProgress}
								key="science"
								pageSize={pageSize}
								country="in"
								category="science"
							/>
						}
					/>
					<Route
						exact
						path="/sports"
						element={
							<News
								apiKeys={apiKeys}
								setProgress={setProgress}
								key="sports"
								pageSize={pageSize}
								country="in"
								category="sports"
							/>
						}
					/>
					<Route
						exact
						path="/technology"
						element={
							<News
								apiKeys={apiKeys}
								setProgress={setProgress}
								key="technology"
								pageSize={pageSize}
								country="in"
								category="technology"
							/>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
