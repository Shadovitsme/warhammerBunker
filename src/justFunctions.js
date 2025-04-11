import workText from "./bunkerArrays/workLonger/longerWork";

export function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function whatIsCard(number) {
  switch (number) {
    case 0:
      return workText();
    default:
      break;
  }
}

export function whatIsIcon(number) {
  switch (number) {
    case 0:
      return "/Vector.svg";
    default:
      break;
  }
}
