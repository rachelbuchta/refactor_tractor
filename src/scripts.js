/* eslint-disable max-len */
import users from './data/users-data.js';
import recipeData from  './data/recipe-data';
import ingredientsData from './data/ingredient-data';

import './css/base.scss';
import './css/styles.scss';
import './images/apple-logo.png';
import './images/search.png';
import './images/cookbook.png';
import './images/seasoning.png';
import './images/apple-logo-outline.png';

import domUpdates from './domUpdates';
import User from './user';
import Recipe from './recipe';
import RecipeRepo from './recipe-repo'
import IngredientsRepo from './ingredient-repo'

let allRecipesBtn = document.querySelector(".show-all-btn");
let filterBtn = document.querySelector(".filter-btn");
let fullRecipeInfo = document.querySelector(".recipe-instructions");
let main = document.querySelector("main");
let menuOpen = false;
let pantryBtn = document.querySelector(".my-pantry-btn");
let recipes2 = new RecipeRepo(recipeData);
let savedRecipesBtn = document.querySelector(".saved-recipes-btn");
let searchBtn = document.querySelector(".search-btn");
let searchForm = document.querySelector("#search");
let searchInput = document.querySelector("#search-input");
let showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");

let user;
let pantryInfo = [];
let recipes = []



window.addEventListener("load", createCards);
window.addEventListener("load", displayTagList);
window.addEventListener("load", generateUser);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

// GENERATE A USER ON LOAD
function generateUser() {
  user = new User(users[Math.floor(Math.random() * users.length)]);
  domUpdates.welcomeUser(user)
  findPantryInfo();
}

// CREATE RECIPE CARDS
function createCards() {
  recipeData.forEach(recipe => {
    let recipeInfo = new Recipe(recipe);
    let shortRecipeName = recipeInfo.name;
    recipes.push(recipeInfo);
    if (recipeInfo.name.length > 40) {
      shortRecipeName = recipeInfo.name.substring(0, 40) + "...";
    }
    domUpdates.createCard(recipeInfo);
  });
 
}

// FILTER BY RECIPE TAGS
function displayTagList() {
let tags = recipes2.returnAllTags()
domUpdates.createListTags(tags);
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
})
}

//allRecipes
function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  domUpdates.hideUnselectedRecipes(foundRecipes)
}

// FAVORITE RECIPE FUNCTIONALITY

// Need to sort through these to properly place in domFile or data model

function addToMyRecipes() {
  // this needs to be split up into multiple functions so notSRP
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    // this codeblock straight up sucks, makes no sense
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.saveRecipe(cardId);
    } else if (!user.favoriteRecipes.includes(cardId)) {
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe(cardId);
    }
  } else if (event.target.id === "exit-recipe-btn") {
    domUpdates.exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    openRecipeInfo(event);
  }
}
// not a clue what is happening here
function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function showSavedRecipes() {
  let unsavedRecipes = recipes.filter(recipe => {
  return !user.favoriteRecipes.includes(recipe.id);
  });
  domUpdates.displaySavedRecipes(unsavedRecipes)
  showMyRecipesBanner();
}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) { 
  fullRecipeInfo.style.display = "inline"; 
  let recipeId = event.path.find(e => e.id).id;
  let recipe = recipeData.find(recipe => recipe.id === Number(recipeId));
  domUpdates.createInstructionsTitle(recipe, generateIngredients(recipe)); // all of this to be moved in a domFile
  domUpdates.createInstructionsImage(recipe);
  generateInstructions(recipe);
  generateEstimateCost(recipe);
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
}

function findRecipeIngredient(recipeIngredient) {
  return ingredientsData.find(ingredient => recipeIngredient.id === ingredient.id
  );
}

function generateIngredients(recipe) {
  return recipe && recipe.ingredients.map(i => {
    const foundIngredient = findRecipeIngredient(i);
    return `${domUpdates.capitalize(foundIngredient.name)} (${i.quantity.amount} ${i.quantity.unit})`
  }).join(", "); 
}

function generateInstructions(recipe) {
  const currentRecipe = new Recipe(recipe);
  const instructions = currentRecipe.returnInstructions().map(step => step.instruction);
  domUpdates.createInstructionsList(instructions)
}

function generateEstimateCost(recipe) {
  let currentRecipe = new Recipe (recipe);
  domUpdates.createEstimatedPrice(currentRecipe, ingredientsData)
}

// function exitRecipe() {
  
// }

// TOGGLE DISPLAYS // these need to be changed using classList.toggle("hidden") also combine them using parameters
function showMyRecipesBanner() {
  document.querySelector(".welcome-msg").style.display = "none";
  document.querySelector(".my-recipes-banner").style.display = "block";
}

function showWelcomeBanner() {
  document.querySelector(".welcome-msg").style.display = "flex";
  document.querySelector(".my-recipes-banner").style.display = "none";
}

// SEARCH RECIPES
function pressEnterSearch(event) { 
  event.preventDefault();
  searchRecipes();
}

function searchRecipes() { 
  showAllRecipes();
  let searchedRecipes = [];
  recipeData.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      if (!searchedRecipes.includes(ingredient.name) && ingredient.name === searchInput.value.toLowerCase()) {
        searchedRecipes.push(recipe);
      }
      if (!searchedRecipes.includes(ingredient.name) && recipe.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
        searchedRecipes.push(recipe);
      }
    })
  });
  filterNonSearched(createRecipeObject(searchedRecipes));
}

function filterNonSearched(filtered) { //Kinda thinking this is unneccesary and redundant if we have the above functionality..
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  domUpdates.hideUnselectedRecipes(found);
}

function createRecipeObject(recipes) { 
  recipes = recipes.map(recipe => new Recipe(recipe));
  return recipes
}

function toggleMenu() { // Might have to go to domUpdates?
  var menuDropdown = document.querySelector(".drop-menu");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
}

function showAllRecipes(recipes) { 
  domUpdates.createAllRecipes(recipes)
  showWelcomeBanner();
}

// CREATE AND USE PANTRY 
function findPantryInfo() { 
  user.pantry.forEach(item => { // create pantry class
    let itemInfo = ingredientsData.find(ingredient => {
      return ingredient.id === item.ingredient; 
    });
    let originalIngredient = pantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.count += item.amount;
    } else if (itemInfo) {
      pantryInfo.push({name: itemInfo.name, count: item.amount});
    }
  });
  domUpdates.displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name))); 
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v)); //no datatype as parameters (we think its checking if every current element(target) is in the array(arr), recipes and checked boxes)
  let ingredientNames = selected.map(item => {
    return item.id; //(array of ids of each ingredient whos checked box is checked)
  })
  recipes.forEach(recipe => { //iterating through array of recipe instances
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name); //creates an array of ingredient names
    });
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none"; //this is all super complicated and an inverted way to achieve simply displaying recipes who include the checked ingredients
      // eric IS dead
    }
  })
}
