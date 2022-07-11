fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(resp => resp.json())
.then(data => {
const watermelon = data.drinks[5]
const image = document.querySelector(".image")
const newImage = document.createElement("img")
newImage.src = watermelon.strDrinkThumb;
image.append(newImage);

const ingredients = document.getElementById("ingredients")
const listOfIngredients = document.getElementById("listOfIngredients")
const liFirst = document.createElement("li")
const liSecond = document.createElement("li")
const liThird = document.createElement("li")
const liFourth = document.createElement("li")
const liFifth = document.createElement("li")
const liSixth = document.createElement("li")
const liSeventh = document.createElement("li")
liFirst.innerText = `${watermelon.strMeasure1} ${watermelon.strIngredient1}`;
liSecond.innerText = `${watermelon.strMeasure2} ${watermelon.strIngredient2}`;
liThird.innerText = `${watermelon.strMeasure3} ${watermelon.strIngredient3}`;
liFourth.innerText = `${watermelon.strMeasure4} ${watermelon.strIngredient4}`;
liFifth.innerText = `${watermelon.strMeasure5} ${watermelon.strIngredient5}`;
liSixth.innerText = `${watermelon.strMeasure6} ${watermelon.strIngredient6}`;
liSeventh.innerText = `${watermelon.strMeasure7} ${watermelon.strIngredient7}`;
listOfIngredients.append(liFirst);
listOfIngredients.append(liSecond);
listOfIngredients.append(liThird);
listOfIngredients.append(liFourth);
listOfIngredients.append(liFifth);
listOfIngredients.append(liSixth);
listOfIngredients.append(liSeventh);

})