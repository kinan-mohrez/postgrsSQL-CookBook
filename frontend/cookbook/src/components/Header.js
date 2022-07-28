import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Post from './Post';
import Vegan from './Vegan';
import Vegetarian from './Vegetarian';
import Traditional from './Traditional';
import SearchItem from './SearchItem';

export default function Header({ articles }) {
	// console.log({ articles });
	const [Search, setSearch] = useState('');
	const inputText = useRef();

	function onSubmit() {
		setSearch(inputText.current.value);
		fetch('http://localhost:3000').then(function (entries) {
			entries.items.forEach(function (entry) {
				if (entry.fields.name.match(new RegExp(`${Search}.*`, `i`))) {
					console.log(entry.fields.name);

					<SearchItem item={entry} />;
				} else {
					console.log('no recipe found');
				}
			});
		});
	}
	if (articles.length === 0) {
		return <span className='loader'></span>;
	}

	return (
		<div>
			<h1>Recipes Blog</h1>
			<BrowserRouter>
				<nav className='search-form'>
					<NavLink to='/' className='navlink'>
						HOME
					</NavLink>
					<NavLink to='/vegan' className='navlink'>
						VEGAN
					</NavLink>
					<NavLink to='/vegetarian' className='navlink'>
						VEGETARIAN
					</NavLink>
					<NavLink to='/traditional' className='navlink'>
						TRADITIONELL
					</NavLink>

					<form>
						<input
							type='text'
							placeholder='Search ....'
							autoComplete='off'
							ref={inputText}
						/>
						<input type='button' value='search' onClick={onSubmit} />
					</form>
				</nav>

				<div className='recipes'>
					<Routes>
						<Route
							path='/'
							element={
								articles !== [] &&
								articles.map((artic, index) => (
									<Post key={index} article={artic} />
								))
							}
						/>

						<Route
							path='/traditional'
							element={
								articles !== [] &&
								articles.map((artic, index) => (
									<Traditional key={index} article={artic} />
								))
							}
						/>

						<Route
							path='/vegetarian'
							element={
								articles !== [] &&
								articles.map((artic, index) => (
									<Vegetarian key={index} article={artic} />
								))
							}
						/>
						<Route
							path='/vegan'
							element={
								articles !== [] &&
								articles.map((artic, index) => (
									<Vegan key={index} article={artic} />
								))
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}
