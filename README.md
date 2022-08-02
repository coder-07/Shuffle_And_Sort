# Shuffle_And_Sort

## Considered Scenarios
- Cards adjust themselves based on the available width and height

## Stylesheets
### Reset
- Resets the pre applied browser CSS

### Variables
- Create common variables to be used across the project

### Desktop
- Contains styling rules for devices >=960px

### Mobile
- Contains styling rules for devices <960

## Javascripts
### Shufle
- Loops through the array
- Generates a random number <=9 and swaps the current index element with the one present at random index

### Sort
- Reassign the entire array, since we already know what elements we have
- In other scenarios use ".sort((a,b) => a-b)"
- If the cards are already sorted, then this function won't fire, improving performance

### Cards Arrangement
- A node is created and the entire HTML structure is created inside it
- Once all the elements are generated, DOM is changed at once improving the performance