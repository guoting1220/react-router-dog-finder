/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link} from 'react-router-dom';
import './DogThumbnail.css';

const DogThumbnail = ({dog}) => {
	return (
		<div className="DogThumbnail">
			<Link exact to={`/dogs/${dog.name}`}>
				<img 
					className="DogThumbnail-img"
					src={dog.src}			
				>
				</img>
			</Link>
			
			<h3><Link exact to={`/dogs/${dog.name}`}>{dog.name}</Link></h3>		
		</div>
	)
}

export default DogThumbnail;