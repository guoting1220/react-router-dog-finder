import React from 'react';
import './DogDetails.css';
import {Link} from 'react-router-dom';

const DogDetails = ({dog}) => {
	return (
		<div className="DogDetails">
			<img className="DogDetails-img" src={dog.src} alt={dog.name}>
			</img>
			<div className="DogDetails-info">
				<p><b>Name</b>: {dog.name}</p>
				<p><b>Age</b>: {dog.age}</p>
				<p><b>Facts</b>: {dog.facts.map(fact => <p>{fact}</p>)}</p>
			</div>	
			<button className="DogDetails-goBackBtn"><Link to="/dogs">Go Back</Link></button>
		</div>
	
	)
}

export default DogDetails;