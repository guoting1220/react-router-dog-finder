import React from 'react';
import DogThumbnail from './DogThumbnail';
import './DogList.css';

const DogList = ({dogs}) => {
	return (
		<div className="DogList">
			{dogs.map(dog => 
				<DogThumbnail key={dog.name} dog={dog}/>
			)}
		</div>
	);
}

export default DogList;