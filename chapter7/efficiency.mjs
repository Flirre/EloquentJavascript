import { goalOrientedRobot, findRoute, roadGraph } from './07_robot.mjs';

import { compareRobots } from './measure.mjs';

export function efficientRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let routeLength = Infinity;
    let parcel;
    for (let possParcel of parcels) {
      const possibleRoute = findRoute(roadGraph, place, possParcel.place);
      if (possibleRoute.length < routeLength) {
        routeLength = possibleRoute.length;
        parcel = possParcel;
      }
    }
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

console.log(compareRobots(efficientRobot, [], goalOrientedRobot, []));
