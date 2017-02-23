'use strict';
document.addEventListener('DOMContentLoaded', function(){
  var stats = {
    guesses: 0,
    average: 0,
    games: 0
  };
  function game(guess){
    var random = Math.round(Math.random() * 99 + 1);
    console.log(random);
    console.log(guess);
    if(guess > random){
      renderResponse('it was lower. Your guess: ' + guess);
    }
    else if(guess < random){
      renderResponse('it was higher. Your guess: ' + guess);
    }
    else if(guess === random){
      renderResponse('you guessed it! It was: ' + guess);
      updateResults();
    }
  }
  function renderResponse(string){
    var parentEl = document.getElementById('text-field');
    var childEl = document.createElement('p');
    childEl.textContent = string;
    parentEl.appendChild(childEl);
  }
  function unrenderRespose(){
    var parentEl = document.getElementsById('text-field');
    parentEl.removeChild();
  }
  function updateResults(){

  }
  var submitEl = document.getElementById('input');
  var input = function(event){
    event.stopPropagation();
    event.preventDefault();
    game(event.target.number.value);
    console.log('yes');
    }
  submitEl.addEventListener('sumbit', input, false);
});
// var userEl = document.getElementById('userForm');
// // beginning user input event
// var user = function(event){
//   // preventing page refresh
//   event.preventDefault();
//   event.stopPropagation();
//   // finding input values within the form and creating varibales to go with them
//   var userStore = event.target.username.value;
//   var userMaxCust = event.target.userMaxCust.value;
//   var userMinCust = event.target.userMinCust.value;
//   // creating new location from user input
//   var userStore = new Location(userStore, parseInt(userMaxCust), parseInt(userMinCust), 0);
//   // adding new store to table list
//   tableArray.push(userStore);
//   // creating a old table element
//   var oldTableEl = document.getElementById('table-element');
//   // removing old table from the article
//   oldTableEl.parentElement.removeChild(oldTableEl);
//   // creating updated table
//   table(tableArray, hourlyTotal(tableArray));
// };
// // creating an event listener
// userEl.addEventListener('submit', user, false);
