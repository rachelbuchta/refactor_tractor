let domUpdates = {

  welcomeUser(currentUser) {
  let firstName = currentUser.name.split(" ")[0];
  let welcomeMsg = `
    <div class="welcome-msg">
      <h1>Welcome ${firstName}!</h1>
    </div>`;
  document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
    welcomeMsg);
  },

  createCardTags(tags) {
  let result = '';
  tags.forEach(tag => {
    let newTag = `<h4>${tag}</h4>`;
    result += newTag;
  });
  return result;
  },

  createCard(recipe) {
    let main = document.querySelector("main");
    let cardHtml = `
  <div class="recipe-card" id=${recipe.id}>
    <div class="title-container"
      <h3 class="title" maxlength="40">${recipe.name}</h3>
    </div>  
    <div class="card-photo-container">
      <img src=${recipe.image} class="card-photo-preview" alt="${recipe.name} recipe" title="${recipe.name} recipe">
      <div class="text">
        <div>Click for Instructions</div>
      </div>
    </div>
    <div class="tags">
      ${this.createCardTags(recipe.tags)}
    </div>
    <div class="apple-container">
      <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
    </div>  
  </div>`
  main.insertAdjacentHTML("beforeend", cardHtml);
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
}

}
export default domUpdates;