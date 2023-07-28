window.onload = function() {
    const fetchButton = document.getElementById('fetch');
    // // Event listener for the button click
    fetchButton.addEventListener('click', getCocktails);
}

// // first, require the dotenv package's config file
const baseAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const getCocktails = () => {
    const fullAPI = baseAPI;
    fetch(fullAPI)
        .then(response => response.json())
        .then(data => {
            displayDataOnDOM(data);
        })
        .catch(err => console.error(err));
}

function displayDataOnDOM(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = JSON.stringify(data);
}

/**
 * sign up for an api key
 * in this file:
 * fetch the data
 * .map through the array of returned objects and format them in a some kind of html
 * diplay them on the html page
 */