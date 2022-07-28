import React from 'react';
import Post from './Post';
import Traditional from './Traditional';
import Vegetarian from './Vegetarian';
import Vegan from './Vegan';

export default function Posts({ post }) {
	return (
		<div>
			{post.map((article, index) => (
				<div>
					<Post key={index} article={article} />
					<Traditional key={index} article={article} />
					<Vegetarian key={index} article={article} />
					<Vegan key={index} article={article} />
				</div>
			))}
		</div>
	);
}
