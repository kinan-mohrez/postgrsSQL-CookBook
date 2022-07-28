import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';

export default function App() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000')
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				console.log(res);
				setArticles(res);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='App'>
			<Header articles={articles} />
		</div>
	);
}
