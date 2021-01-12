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
let savedRecipesBtn = document.querySelector(".saved-recipes-btn");
let searchBtn = document.querySelector(".search-btn");
let searchForm = document.querySelector("#search");
let searchInput = document.querySelector("#search-input");
let showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");

let user;
let recipe;
let recipeRepo;
let pantryInfo = [];
let recipes = [];
// let recipes2


window.addEventListener("load", initiateData);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

// GENERATE A USER ON LOAD


// possibly move to sep domFile
// I feel this is pointing at a general run() or start() function to instantiate
// what the page needs rather than

// should go in user
function initiateData() {
  user = new User(users[Math.floor(Math.random() * users.length)]);
  recipeRepo = new RecipeRepo(recipeData);
  createCards();
  displayTagList();
  domUpdates.welcomeUser(user)
  findPantryInfo();
}

// CREATE RECIPE CARDS
function createCards() {  
  recipeRepo.recipes.forEach(recipe => {    
    domUpdates.createCard(recipe);
  });
}

// function helperFnForDataAndDomShit() {
//   // do the manipulation < class method that does something
//     // almost certainly User, which can look at Pantry
//     // make obj lit to store changes?
//   // posts
//   // pulls it back
//     // makes sure it was the same
//   // call domDisplay method
// }

// FILTER BY RECIPE TAGS
function displayTagList() {
  let tags = recipeRepo.returnAllTags()
  domUpdates.createListTags(tags);
}

// come back to this, maybe should be in dom updates?
function findCheckedBoxes() {
  const tagCheckboxes = document.querySelectorAll(".checked-tag");
  const checkboxInfo = Array.from(tagCheckboxes)
  const selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  const selectedTagNames = selectedTags.map(tag => tag.id);

  findTaggedRecipes(selectedTagNames);
}

// recipe repo has a function that takes a list and tag and returns an array of objects.
// can we use this instead of filteredResults?
function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    const foundRecipe = recipeRepo.filterListByTag(recipeRepo.recipes, tag);
    foundRecipe.forEach(recipe => {
      let tagMatch = filteredResults.find(result => recipe.id === result.id);
      
      if (!tagMatch) {
        filteredResults.push(recipe)
      }
    })
  })   
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}


//allRecipes
function filterRecipes(filtered) {
  // let foundRecipes = recipes.filter(recipe => {
  //   return !filtered.includes(recipe);
  // });
  // // 
  domUpdates.showSelectedRecipes(filtered);
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


      console.log('A wild error has appeared!');
    // dd

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
  domUpdates.createInstructionsTitle(recipe, generateIngredients(recipe));
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

// TOGGLE DISPLAYS // 
//combine these//
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

function filterNonSearched(filtered) { 
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

function showAllRecipes() { 
  domUpdates.createAllRecipes(recipes)
  showWelcomeBanner();
}

// CREATE AND USE PANTRY 

function findPantryInfo() {   
  let ingredientRepo = new IngredientsRepo(ingredientsData);
  let pantryInfo = user.pantry.items.reduce((acc, ingredient) => {
    let outputObject = {
      name: ingredientRepo.getRecipeNameById(ingredient.ingredient),
      count: ingredient.amount
    }
    acc.push(outputObject);
    return acc;
  }, []);
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
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v)); 
  let ingredientNames = selected.map(item => {
    return item.id;
  })
  recipes.forEach(recipe => { 
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}
