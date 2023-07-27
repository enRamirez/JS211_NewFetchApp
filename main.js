window.onload = function() {
    getCocktails()
  
  }



// first, require the dotenv package's config file




const baseAPI= 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
let searchCocktails = document.getElementById('fetch').value
let fullAPI = baseAPI + searchCocktails
let cocktail = []



const getCocktails = () => {
    fetch(fullAPI)
	.then(response => response.json())
	.then(response => console.log(response))
    .then(data => cocktail = data)
	.catch(err => console.error(err));
}




// const displayPost = () => {
//     const allDrinks = document.getElementById('alcohols')
//     arrayOfPosts.map((post, index) => {
//       const li = document.createElement('li')
//       const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
//       li.appendChild(text)
//       allPosts.append(li)
//     })
//   }

/**
 * sign up for an api key
 * in this file:
 * fetch the data
 * .map through the array of returned objects and format them in a some kind of html
 * diplay them on the html page
 */