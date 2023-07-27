// first, require the dotenv package's config file


// look at all the processes
require('dotenv').config()

// put the secret key in a var
const api_key = process.env.SECRET_KEY


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

const baseAPI= 'https://the-cocktail-db.p.rapidapi.com/search.php?s='
let searchLiquor = document.getElementById('id').value
let fullAPI = baseAPI + searchLiquor


fetch(fullAPI, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


/**
 * sign up for an api key
 * in this file:
 * fetch the data
 * .map through the array of returned objects and format them in a some kind of html
 * diplay them on the html page
 */