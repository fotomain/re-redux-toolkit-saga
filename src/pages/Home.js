import React from 'react';
import MovieList from '../components/MovieList';
import Search from '../components/Search';

const Home = () => {
	return (
		<React.Fragment>
			{/*SEARCH COMPONENT*/}
			<Search />

			{/*MOVIE LIST  COMPONENT*/}
			<MovieList />
		</React.Fragment>
	);
};

export default Home;
