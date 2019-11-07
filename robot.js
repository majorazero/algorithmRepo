let robot1 = {
  name: "Rocky",
  health: 100,
  speed: 20,
  tactics: ['punch','punch','laser','missles']
};
let robot2 = {
  name: "Missle Bob",
  health: 100,
  speed: 21,
  tactics: ['missles','missles','missles','missles']
};

let tactics = {
  punch: 20,
  laser: 30,
  missles: 35
};

// const deathChecker = (robot1,robot2) => {
//   if(robot1.health < 0){
//     return [`${robot2.name} has won the fight.`,true];
//   }
//   else(robot2.health < 0){
//     return [`${robot1.name} has won the fight.`,true];
//   }
// }

// const tacticsChecker = (robot1,robot2,tactics) => {
//   if(robot1.tactics.length === 0 && robot2.tactics.length === 0){
//     if(robot1.health > robot2.health){
//       return [`${robot1.name} has won the fight.`,true];
//     }
//     else if (robot2.health > robot1.health){
//       return [`${robot2.name} has won the fight.`,true];
//     }
//     else {
//       return ["The fight was a draw",true];
//     }
//   }
// }

const fight = (robot1, robot2, tactics) => {
  let rob1;
  let rob2;
  if(robot1.speed >= robot2.speed){
    rob1 = robot1;
    rob2 = robot2;
  }
  else{
    rob1 = robot2;
    rob2 = robot1;
    //rob 2 goes first
  }
  //rob 1 goes first
  while(rob1.health !== 0 && rob2.health !== 0){
    //robot 2 takes dmg
    rob2.health -= (rob1.tactics.length > 0 ? tactics[rob1.tactics.shift()] : 0);
    //check to see if anyone died.
    if (rob2.health <= 0){
      return `${rob1.name} has won the fight.`;
    }
    //robot 1 takes dmg
    rob1.health -= (rob2.tactics.length > 0 ? tactics[rob2.tactics.shift()] : 0);
    //check to see if anyone died.
    if(rob1.health <= 0){
      return `${rob2.name} has won the fight.`;
    }
    //checks if tactics ran out.
    if(rob1.tactics.length === 0 && rob2.tactics.length === 0){
      if(rob1.health > rob2.health){
        return `${rob1.name} has won the fight.`;
      }
      else if (rob2.health > rob1.health){
        return `${rob2.name} has won the fight.`;
      }
      else {
        return "The fight was a draw";
      }
    }
  }
}

console.log(fight(robot1,robot2,tactics));
