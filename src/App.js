// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import React, { useState } from 'react';
import News from './Components/News';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
	const pageSize = 12;
	const apiKey = 'c4446f84b6234a5884c3e01409a10d62';

	const [progress, setProgress] = useState(0);

	return (
		<div>
			<Router>
				<LoadingBar color='#f11946' progress={progress} />
				<Navbar />
				{/* <News setProgress={setProgress} pageSize={pageSize} country='in' category='Sports' /> */}
				<Routes>
					<Route
						exact
						path='/'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='general'
								pageSize={pageSize}
								country='in'
								category='General'
							/>
						}
					/>
					<Route
						exact
						path='/business'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='business'
								pageSize={pageSize}
								country='in'
								category='Business'
							/>
						}
					/>
					<Route
						exact
						path='/entertainment'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='entertainment'
								pageSize={pageSize}
								country='in'
								category='Entertainment'
							/>
						}
					/>
					<Route
						exact
						path='/sports'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='sports'
								pageSize={pageSize}
								country='in'
								category='Sports'
							/>
						}
					/>
					<Route
						path='/science'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='science'
								pageSize={pageSize}
								country='in'
								category='Science'
							/>
						}
					/>
					<Route
						exact
						path='/technology'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='technology'
								pageSize={pageSize}
								country='in'
								category='Technology'
							/>
						}
					/>
					<Route
						exact
						path='/health'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key=''
								pageSize={pageSize}
								country='in'
								category='Health'
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
};
export default App;
