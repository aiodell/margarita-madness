fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(resp => resp.json())
.then(data => {
    const watermelon = data.drinks[5]
    const image = document.querySelector(".image")
    const newImage = document.createElement("img")
    newImage.src = watermelon.strDrinkThumb;
    image.append(newImage);
    const recipeBook = document.getElementById("recipeBook")
    recipeBook.innerText = watermelon.strInstructions
  
    const listOfIngredients = document.getElementById("listOfIngredients")

const measurements = {
    first: `${watermelon.strMeasure1} ${watermelon.strIngredient1}`,
    second: `${watermelon.strMeasure2} ${watermelon.strIngredient2} Leaves`,
    third: `${watermelon.strMeasure3} ${watermelon.strIngredient3}`,
    fourth: `${watermelon.strMeasure4} ${watermelon.strIngredient4}`,
    fifth: `${watermelon.strMeasure5} ${watermelon.strIngredient5}`,
    sixth: `${watermelon.strMeasure6} ${watermelon.strIngredient6}`,
    seventh: `${watermelon.strMeasure7} ${watermelon.strIngredient7}`,
}

function loopThroughObject (obj) {
    for (let key in obj) {
        const li = document.createElement("li")
        const measure = obj[key];
        li.append(measure)
        listOfIngredients.append(li)
    }
}
loopThroughObject(measurements)

})
