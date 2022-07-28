import React, { useState } from 'react';

export default function SearchItem({ item }) {
	console.log(item.fields.name);
	const [showDetails, setShowDetails] = useState(false);
	function toggle() {
		setShowDetails(!showDetails);
	}

	return (
		<div className='recipes'>
			<div className='recipe'>
				<h2>{item.fields.name}</h2>

				<img src={item.fields.image.fields.file.url} alt='' />
				<br />
				<button onClick={toggle}>Details</button>
				{showDetails && (
					<div className='ingredient-text'>{item.fields.description}</div>
				)}

				{item.fields.omnivore}
			</div>
		</div>
	);
}
