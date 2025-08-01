import React, { useState } from 'react'

import Button from './Button';
import './Joke.css'

function Joke() {

	const [Joke, setJoke] = useState("");

	const handleFetchJokes = () => {
		fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
			.then((res) => res.json())
			.then((data) => setJoke(data.joke));
	};

  return (
	  <div className='joke'>
		  <Button callApi={handleFetchJokes} />
		  <p>{ Joke }</p>
	</div>
  )
}

export default Joke