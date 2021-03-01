import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
	return (
		<div className="Home">
			<h1>Check out our cute dogs!</h1>
			<div><Link exact to="/dogs">See All Dogs</Link></div>
		</div>
	)
}

export default Home;  
