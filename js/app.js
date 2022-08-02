// Global Variables
let cardsArray = [1,2,3,4,5,6,7,8,9];
let colorsArray = ['teal', 'blue', 'dark-blue', 'blue', 'dark-blue', 'grey', 'grey', 'teal', 'dark-blue'];
let isSorted = true;
let cardsLength = cardsArray.length; // Since this value is accessed multiple times

//Global Elements
const CARDS_CONTAINER = document.querySelector('.cards-section');

// DOM Manipulation
const arrangeCards = () => {
    // Create a fragment in order to improve performance by not manipulating dom for every cycle
    const fragment = document.createElement('div');

    // Loop through cards array
    for(let item of cardsArray) {
        let cardHtml = `<div class="card ${colorsArray[item-1]}-card">${item}</div>`;
        fragment.insertAdjacentHTML('beforeend', cardHtml);
    }

    // Insert the elements from fragment into the cards container element
    CARDS_CONTAINER.innerHTML = fragment.innerHTML;
}

// Sort
const sortCards = () => {
    // Since we already know there are 9 cards we can directly assign the array in order to improve performance
    // But for every other scenario we must use .sort((a,b) => a-b)

    // If the array is already sorted then return
    if(isSorted) return;

    // If array isn't sorted
    isSorted = true;
    cardsArray = [1,2,3,4,5,6,7,8,9]; // Directly assigning array since we know there are only these 9 elements
    arrangeCards();
}

// Shuffle
const shuffleCards = () => {
    for(let i = 0; i < cardsLength; i++) {
        // Create a random number until the length of cards array, and then swap the random index value and i'th value
        let random = Math.floor(Math.random() * cardsLength);
        [cardsArray[i], cardsArray[random]] = [cardsArray[random], cardsArray[i]]
    }

    isSorted = false;
    arrangeCards();
}