import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';


const Routes = ({dogs}) => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route exact path="/dogs" >
				<DogList dogs={dogs} />
			</Route>

			<Route exact path="/dogs/:name" >			
				<FilterDogDetails dogs={dogs} />
			</Route>
			
			<Redirect to="/dogs" />
		</Switch>
	);
}

export default Routes;