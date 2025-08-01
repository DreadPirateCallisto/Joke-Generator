import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Button from './Button';
import './Joke.css'

function Joke() {

	const [Joke, setJoke] = useState("");
	const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

	const handleFetchJokes = async () => {
		// fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
		// 	.then((res) => res.json())
		// 	.then((data) => setJoke(data.joke));

		try {
			const result = await axios.get(url);

			setJoke(result.data.joke);
		} catch {
			console.log('error');
		}
	};

	// fetches jokes first time component renders
	useEffect(() => {
		handleFetchJokes();
	  }, [])
	

  return (
	  <div className='joke'>
		  <Button callApi={handleFetchJokes} />
		  <p>{ Joke }</p>
	</div>
  )
}

export default Joke