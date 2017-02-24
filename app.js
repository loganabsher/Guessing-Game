'use strict';
document.addEventListener('DOMContentLoaded', function(){
  var stats = {
    games: 0,
    guesses: 0,
    average: 0,
    best: 9999
  };
  function game(){
    var random = Math.round(Math.random() * 99 + 1);
    console.log(random);
    while(guess !== random){
      var guess = readline();
      if(guess < random){
        console.log('it was higher');
        stats.guesses++;
      }
      else if(guess > radom){
        console.log('it was lower');
        stats.guesses++;
      }
      else{
        console.log('invalid input');
        stats.guesses++;
      }
    }
    console.log('you guessed it in ' + stats.guesses + ' guesses!');
  }
  game();
});
