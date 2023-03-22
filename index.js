// Code your solution in this file!
function distanceFromHqInBlocks (pickUpLocation) {
    const Hq = 42;

    return Math.abs(pickUpLocation-Hq);
}

function distanceFromHqInFeet(pickUpLocation) {
    const feetPerBlock =264;

    return distanceFromHqInBlocks(pickUpLocation) * feetPerBlock;
}


function distanceTravelledInFeet(startPoint,destinationPoint) {
   
    let distanceTravelled;

    if (destinationPoint >= startPoint) {
      distanceTravelled = 264 * (destinationPoint-startPoint);
    } else if (destinationPoint < startPoint) {
     distanceTravelled = 264 * (startPoint -destinationPoint);
    }
    return distanceTravelled;
 }
 
 function calculatesFarePrice(start, destination) {
    const freeDistance = 400;
    const longDistace = 2000;
    const overDistance =2500;
    const farePerFoot = 0.02;
    const longDistanceFare =25;

    const distance = distanceTravelledInFeet (start,destination);
    let fare;

    if (distance <= freeDistance) {
        fare = 0;
    } else if (distance <= longDistace) {
      fare =  (distance-freeDistance) * farePerFoot;
    } else if (distance <= overDistance) {
        fare = longDistanceFare;
    } else {
        fare = 'cannot travel that far';
    }
    return fare;
 }