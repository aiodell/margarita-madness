const dataIngredients = document.getElementById("data-ingredients")
const ingredients = document.getElementById("ingredients")

const dataRecipe = document.getElementById("data-recipe")
const recipe = document.getElementById("recipe")

const dataHistory = document.getElementById("data-history")
const history = document.getElementById("history")


//creating click event for buttons to switch 

const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

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
        const tapeSection = document.querySelector(".tape-section")
        const li = document.createElement("li")
        const measure = obj[key];
        li.append(measure)
        listOfIngredients.append(li)
        
about.append(ingredients)
about.append(recipe)
about.append(history)

    }
}
loopThroughObject(measurements)

})

about.addEventListener('click', function(e) {
    //grabs data id 
    const id = e.target.dataset.id
    if(id){
        //will add active on any button clicked and remove active on any button not clicked
        btns.forEach((btn)=>{
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        //hide articles
        articles.forEach((article)=> {
           //article is all information being display in the class content
            article.classList.remove("active")
        })
        //gets matching id with the button data ids
        let element = document.getElementById(id)
        element.classList.add("active")
  }
})


const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
    star.addEventListener("click", () => {
        stars.forEach((otherStar, otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherStar.classList.add("active");
            }
        })
        
    })
    
})


//creating event for mouse

btns.forEach((button)=>{
   button.addEventListener("mouseover", () => {

    
   })
   button.addEventListener("mouseleave", () => {
 
    })
})

const form = document.getElementById("comment-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.reset();
        alert("Thank you for your review!")
    })





