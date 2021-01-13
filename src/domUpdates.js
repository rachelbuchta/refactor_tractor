import users from "./data/users-data";

/* eslint-disable max-len */


let domUpdates = {

  welcomeUser(currentUser) {
    let firstName = currentUser.name.split(" ")[0];
    let welcomeMsg = `
    <article class="welcome-msg">
      <h1>Welcome ${firstName}!</h1>
    </article>`;
    document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
      welcomeMsg);
  },
  
  // Create Cards and Tag List onload // 
  createCardTags(tags) {
    let result = '';
    tags.forEach(tag => {
      let newTag = `<h4>${tag}</h4>`;
      result += newTag;
    });
    return result;
  },

  createCard(recipe, appleDisplayed) {
    let main = document.querySelector("main");
    let cardHtml = `
  <article class="recipe-card" id=${recipe.id}>
    <section class="title-container"
      <h3 class="title" maxlength="40">${this.shortenRecipeName(recipe)}</h3>
    </section>  
    <section class="card-photo-container">
      <img src=${recipe.image} class="card-photo-preview" alt="${recipe.name} recipe" title="${recipe.name} recipe">
      <div class="text">
        <div aria-label="Click for instructions banner">Click for Instructions</div>
      </div>
    </section>
    <section aria-label="Type of recipe" class="tags">
      ${this.createCardTags(recipe.tags)}
    </section>
    <section class="apple-container">
      <img aria-label="Click to favorite recipe" src="../images/${appleDisplayed}.png" alt="unfilled apple icon" class="card-apple-icon">
    </section>  
  </article>`
    let section = document.createElement("section");
    section.innerHTML = cardHtml;
    main.appendChild(section);
  },
  
  shortenRecipeName(recipe) {
    let shortRecipeName = recipe.name;
    if (shortRecipeName.length > 40) {
      shortRecipeName = shortRecipeName.substring(0, 40) + "...";
    }
    return shortRecipeName;
  },

  createListTags(tags) {
    let tagList = document.querySelector(".tag-list");
    tags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
      <label for="${tag}">${this.capitalize(tag)}</label></li>`;
      tagList.insertAdjacentHTML("beforeend", tagHtml);
    });
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  showSelectedRecipes(foundRecipes, user) {
    const main = document.querySelector("main");
    const modal =`
    <div class="recipe-instructions">
    </div>
    <div class="my-recipes-banner">
      <h1>My Recipes</h1>
      <button class="show-all-btn">Show All Recipes</button>
    </div>`
    
    main.innerHTML = '';
    main.innerHTML += modal;
    foundRecipes.forEach(recipe => {
      user.isFavorited(recipe) ? this.createCard(recipe, "apple-logo") : this.createCard(recipe, "apple-logo-outline");
    });
  },

  getCardId() {
    return parseInt(event.target.closest(".recipe-card").id)
  },

  fillApple() {
    event.target.src = "../images/apple-logo.png";
  },

  removeApple() {
    event.target.src = "../images/apple-logo-outline.png";
  },

  //Recipe Instructions//
  createInstructionsTitle(recipe, ingredients) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");

    let recipeTitle = `
    <button aria-label="Exit recipe" id="exit-recipe-btn">X</button>
    <h3 id="recipe-title">${recipe.name}</h3>
    <h4>Ingredients</h4>
    <p>${ingredients}</p>`
    fullRecipeInfo.insertAdjacentHTML("beforeend", recipeTitle);
  },

  createInstructionsImage(recipe) {
    document.querySelector("#recipe-title").style.backgroundImage = `url(${recipe.image})`;
  },

  createInstructionsList(instructions) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    let instructionsList = "";
    instructions.forEach(step => instructionsList += `<li>${step.instruction}</li>`);
    fullRecipeInfo.insertAdjacentHTML("beforeend", "<h4>Instructions</h4>");
    fullRecipeInfo.insertAdjacentHTML("beforeend", `<ol>${instructionsList}</ol>`);
  },

  createEstimatedPrice(recipe, ingredients) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    fullRecipeInfo.insertAdjacentHTML("beforeend", "<h4>Estimated Cost</h4>")
    fullRecipeInfo.insertAdjacentHTML("beforeend", `<h4>${recipe.calculateIngredientsCost(ingredients)}</h4>`);

  },

  exitRecipe() {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    while (fullRecipeInfo.firstChild &&
    fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
    fullRecipeInfo.style.display = "none";
    document.getElementById("overlay").remove();
  },

  //Search bar input dom updates
  displaySearchError() {
    let searchInput = document.querySelector("#search-input");
    // set error messageas text
    const message = document.createElement('p');
    // make field
    message.innerText = 'WAT DA FUK YOU DOIN?!?!';
    const result = searchInput.appendChild(message);
    return result;
  },

  clearField() {
    let searchInput = document.querySelector("#search-input");
    searchInput.value = '';
  },

  createAllRecipes(recipes) {
     recipes.forEach(recipe => {
      let domRecipe = 
      document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "";
    });
  },

  //Pantry//
  displayPantryInfo(pantry) {
    pantry.forEach(ingredient => {
      let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
    <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
      document.querySelector(".pantry-list").insertAdjacentHTML("beforeend", ingredientHtml);
    });
  }, 

  formatNumber(number) {
    const stringedNum = number.toString();
    let index;
    let afterPeriod;

    if (stringedNum.includes('.')) {
      index = stringedNum.indexOf('.');
      afterPeriod = stringedNum.slice(index + 1);
    }
    if (afterPeriod && afterPeriod.length > 2) {
      afterPeriod = afterPeriod.toFixed(2);
    }
    return parseFloat(stringedNum.slice(0, index + 1).concat(afterPeriod)) || number;
  }
}

export default domUpdates;