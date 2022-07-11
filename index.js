const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

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
        const element = document.getElementById(id)
        element.classList.add("active")

  }
})

//creating event for mouse

btns.forEach((button)=>{
   button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "white"
   })
   button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "grey"
    })
})





fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(resp=>resp.json())
.then(margObject => {
    const watermelon = margObject.drinks[5]
    const image = document.querySelector("img")
    image.src=watermelon.strDrinkThumb


    })
