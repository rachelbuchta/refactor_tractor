# What's Cookin Refactor Tractor
 Mod2 Group Project

One of life's most difficult questions to answer..."What do you want to eat?". The idea behind this application is to hopefully lend a hand in making that question a bit easier to answer. All wrapped up in one easy to use application, esing Fresh Picks allows you to search for recipes by ingredients, recipe names and types. Save the ones you like, remove them when you're done and check to see if they can be made with what you have already in your pantry. If you don't have what you need, this can help you conveniently see what it is you're missing.

The idea behind this project was to be able 

## Technologies and Skills

This application is made using:
  * Clean, semantic HTML and CSS including media queries so that is can be viewed across a variety of screens.
  * ES6 Javascript, arrow functions, classes, and iterator methods.
  * Mocha and Chai for our TDD tests.

I ensured best practices:

  * Separating the data model (using classes) and DOM model
  * Implementing helper functions to keep code clean and demonstrate DRYness and SRP.
  * Using atomic commits and creating branches that reflect the current feature I am working on.
  * Writing a robust testing suite that had happy and sad test paths.
  * Refactored to ensure user's accessibility.
  
 ## Contributors
 
 Project implementation by [Rachel Buchta](https://github.com/rachelbuchta), [Eric Campbell] and [Mathew Dean](https://github.com/Max9545) 
 
 Project created by Turing School staff.
 
 Special thanks to our 2010 FE Cohort instructors and peers.
 
 ## Future Iterations
 
 Currently, there are no planned additions to Fresh Picks.

 
 ## Features
 
![Window sizing](https://media.giphy.com/media/25ULMFmPK0ERLYHtKx/giphy.gif)

![User Change](https://media.giphy.com/media/GXXhxrWmPDRMGfVXC4/giphy.gif)

 ### User Functionality

On page load a user is shown:

* A greeting welcoming the user to the page by using their first name
* A display of their daily step goal, stride length, and how their step goal compares to the average of all other users' step goals

#### Activity

* Minutes a user was active for and how it compares to the average of all users for that day.
* The amount of steps a user has taken, how many miles those steps equate to and how it compares to the average steps of all users for that day.
* How many flights of stairs a user has climbed based on the amount of steps they have taken for the day and how that compares to the average number of stairs climbed for all users on that day.
* An overview of steps taken, minutes active, and flights of stairs climbed for the last 7 day period. 
 
#### Water

* The amount of water consumed in ounces during the lastest day.
* The amount of water consumed each day over the last 7 day period.

#### Sleep

* The hours and quality of sleep a user has gotten over the latest day.
* The user's average hours and quality of sleep over all time.
* The user's hours and quality of sleep for each day over the last 7 day period
