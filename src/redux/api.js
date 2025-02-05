import axios from 'axios';

export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

//return axios.get(`${API_ENDPOINT}&s=${movieName}`);
//};

const data =[
	{
	id:'111',
	Poster:'Poster111',
	Title:'Title111',
	Year:'Year',
	Plot:'Plot',
	Director:'Director',
	Released:'Released',
	},
	{
	id:'222',
	Poster:'Poster222',
	Title:'Title222',
	Year:'Year',
	Plot:'Plot',
	Director:'Director',
	Released:'Released',
	},
]

// axios.get(`${API_ENDPOINT}&s=${movieName}`);
// axios.get(`${API_ENDPOINT}&i=${movieid}`);

export const fetchAllMovies = async (movieName) =>
	{
		console.log("fetchAllMovies",movieName)
		if(''!==movieName) {
			// return {data: data,status:200}
			const elems =  data.filter(el => {
				return -1!==el.Title.indexOf(movieName)
			})
			return {data: [...elems],status:200}
		}else{
			return {data: [...data],status:200}
		}
	}


export const fetchOneMovie = async (movieid) =>
	{
		console.log("fetchOneMovie1",movieid)
		const elems =  data.filter(el => {
			return -1!==el.id.indexOf(movieid)
		})
		return {data: elems[0],status:200}
	}
