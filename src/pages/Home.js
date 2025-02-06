
import React from 'react';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import CatsList from "../core/cats/CatsList";


const Home = () => {
	return (
		<React.Fragment>
			{/*SEARCH COMPONENT*/}
			<CatsList/>
			<Search />
			{/*MOVIE LIST  COMPONENT*/}
			<MovieList />
		</React.Fragment>
	);
};

export default Home;
