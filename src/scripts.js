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
    domUpdates.createCard(recipe, 'apple-logo-outline');
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

const findTaggedRecipes = selected => {
  console.log(recipeRepo)
  const filteredResults = [];
  selected.forEach(tag => {
    const foundRecipe = recipeRepo.filterListByTag(recipeRepo.recipes, tag);
    foundRecipe.forEach(recipe => {
      const tagMatch = filteredResults.find(result => recipe.id === result.id);
      if (!tagMatch) {
        filteredResults.push(recipe)
      }
    })
  })   
  if (filteredResults.length > 0) {
    domUpdates.showSelectedRecipes(filteredResults, user);
  }
}


// FAVORITE RECIPE FUNCTIONALITY
function allClicksInMain(event) {
  if (event.target.className === "card-apple-icon") {
    addToMyRecipes();
  } else if (event.target.id === "exit-recipe-btn") {
    domUpdates.exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    // probably move this to domUpdates
   
    openRecipeInfo(event);
  }
}

const addToSavedDom = recipe => {
  domUpdates.fillApple();
  user.saveRecipe(user.favoriteRecipes, recipe);
  console.log(user.favoriteRecipes);
}

const removeFromSavedDom = recipe => {
  console.log(user.favoriteRecipes);
  alert('You have removed a recipe from My Recipes!');
  domUpdates.removeApple();
  user.removeRecipe(user.favoriteRecipes, recipe);
  domUpdates.displaySavedRecipes(user.favoriteRecipes, user);
}

const addToMyRecipes = () => {
  const cardId = domUpdates.getCardId();
  const recipe = recipeRepo.filterListById(cardId);

  if (!user.favoriteRecipes.includes(recipe)) {
    addToSavedDom(recipe);
  } else if (user.favoriteRecipes.includes(recipe)) {
    removeFromSavedDom(recipe);
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
  user.favoriteRecipes.length > 0 ? (
    domUpdates.displaySavedRecipes(user.favoriteRecipes, user), 
    showMyRecipesBanner()
   ) : createCards();
}

// CREATE RECIPE INSTRUCTIONS
const openRecipeInfo = event => { 
  fullRecipeInfo.style.display = "inline"; 
  const recipeId = parseInt(event.path.find(e => e.id).id);    
  const recipe = recipeRepo.filterListById(recipeId);  
  expandRecipeCard(recipe);  
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
}

const generateIngredients = recipe => { 
  const ingredientsRepo = new IngredientsRepo(ingredientsData);  

  return recipe.ingredients.map(ingredient => {
    const name = ingredientsRepo.getRecipeNameById(ingredient.id);
    return `${domUpdates.capitalize(name)} (${ingredient.quantity.amount} ${ingredient.quantity.unit})`;
  }).join(', ');
}

const expandRecipeCard = recipe => {  
  domUpdates.createInstructionsTitle(recipe, generateIngredients(recipe));
  domUpdates.createInstructionsImage(recipe);
  domUpdates.createInstructionsList(recipe.instructions);
  domUpdates.createEstimatedPrice(recipe, ingredientsData)
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
const searchRecipes = () => {
  let input = searchInput.value;  
  let recipes;

  input = domUpdates.capitalize(input);
  input = input.trim();
  
  typeof input !== 'string' ? (
    domUpdates.displaySearchError(),
    domUpdates.clearField()
  ) : recipes = recipeRepo.filterListByName(recipeRepo.recipes, input);  

  domUpdates.displaySelectedRecipes(recipes, user);
}

function pressEnterSearch(event) { 
  event.preventDefault();
  searchRecipes();
}

// function filterNonSearched(filtered) { 
//   let found = recipes.filter(recipe => {
//     let ids = filtered.map(f => f.id);
//     return !ids.includes(recipe.id)
//   })
//   domUpdates.hideUnselectedRecipes(found);
// }

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
  createCards();
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


window.addEventListener("load", initiateData);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", allClicksInMain);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);