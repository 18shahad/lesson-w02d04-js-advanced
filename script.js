// console.log('loaded');

/////////////////////////////////////////////

// var globalVariable = 'Global Scope';

// function someFunction() {
//   var localVariable = 'Local Scope';
// }

// console.log(globalVariable);
// console.log(localVariable);

/////////////////////////////////////////////
// var global = 'Global Scope';

// function someFunction() {
//   var innerScope = 'Inner Scope';

//   function someInnerFunction() {
//     var innerInnerScope = 'InnerInner Scope';
//     // 3. What can we access from here?
//     console.log(`someInnerFunction() = global: ${global}, innerScope: ${innerScope}, innerInnerScope: ${innerInnerScope}`)
//   }
  
//   console.log(`someFunction() = global: ${global}, innerScope: ${innerScope}, innerInnerScope: ${innerInnerScope}`);

//   someInnerFunction();
//   // 2. What can we access from here?
// }

// someFunction();
// // 1. What can we access from here?


/////////////////////////////////////////////

// function createGame() {
//   let score = 0;
//   return function scoreGoal() {
//     score += 10;
//     return score;
//   }
// }

// var scoreGoal2 = createGame();

// console.log( scoreGoal2() );
// console.log( scoreGoal2() );


/////////////////////////////////////////////

function createGame() {
  let score = 0;
  return {
    gainPoints: function() {
      return score += 10;
    },
    losePoints: function() {
      return score -= 10;
    },
    getScore: function() {
      console.log( score );
    }
  };
}

const player = createGame();
player.gainPoints();



