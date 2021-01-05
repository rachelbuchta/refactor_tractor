// OKAY SO THERE IS AN ENTRY FILE FOR THE WEBPACK BUT I DONT THINK ITS USED YET. ALSO WHATS UP WITH THE LAST LINE.

// in the html, im not sure if images are being accessed right. from what I saw with webpack you have to import the images somewhere (maybe the js entrypoint?)


// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
