import React, { useState } from 'react';

export default function Post({ article }) {
	console.log({ article });

	const [showDetails, setShowDetails] = useState(false);
	function toggle() {
		setShowDetails(!showDetails);
	}

	if (article.length === 0) {
		return <span className='loader'></span>;
	}

	return (
		<div>
			{
				<div className='recipe'>
					<h2>{article.fields.name}</h2>

					<img src={article.fields.image.fields.file.url} alt='' />
					<br />
					<button onClick={toggle}>Details</button>
					{showDetails && (
						<div className='ingredient-text'>{article.fields.description}</div>
					)}

					{article.fields.omnivore}
				</div>
			}
		</div>
	);
}
