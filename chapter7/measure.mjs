import {
  VillageState,
  buildGraph,
  findRoute,
  goalOrientedRobot,
  mailRoute,
  randomPick,
  randomRobot,
  roadGraph,
  roads,
  routeRobot,
  runRobot
} from './07_robot.mjs';

export function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
  const routes = [];
  let r1avg = 0;
  let r2avg = 0;
  let r1Turns = 0;
  let r2Turns = 0;
  for (let i = 0; i < 100; i++) {
    routes.push(VillageState.random());
  }
  for (const route of routes) {
    r1Turns += runRobot(route, robot1, []);
    r2Turns += runRobot(route, robot2, []);
  }
  r1avg = r1Turns / routes.length;
  r2avg = r2Turns / routes.length;
  console.log(`robot1 average: ${r1avg}`, `\nrobot2 average: ${r2avg}`);
}

//compareRobots(routeRobot, [], goalOrientedRobot, []);
