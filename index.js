function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(blocks) {
  return 264 * distanceFromHqInBlocks(blocks);
}

function distanceTravelledInFeet(first, second) {
  return 264 * Math.abs(first - second);
}

function calculatesFarePrice(start, destination) {
  let route = distanceTravelledInFeet(start, destination);

  if (route > 2500) {
    return "cannot travel that far";
  } else if (route > 2000) {
    return 25;
  } else if (route > 400) {
    return 0.02 * (route - 400);
  } else if (route < 400) {
    return 0;
  }
}
