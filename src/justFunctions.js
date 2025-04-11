import generateBiology from "./bunkerArrays/biological";
import fobia from "./bunkerArrays/fobia";
import randomizeHealth from "./bunkerArrays/health";
import hobbyGenerator from "./bunkerArrays/hobby";
import items from "./bunkerArrays/items";
import workText from "./bunkerArrays/workLonger/longerWork";

export function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function whatIsCard(number) {
  switch (number) {
    case 0:
      return workText();
    case 1:
      return generateBiology();
    case 2:
      return randomizeHealth();
    case 3:
      return hobbyGenerator();
    case 4:
      return items();
    case 5:
      return fobia();
    default:
      break;
  }
}

export function whatIsIcon(number) {
  switch (number) {
    case 0:
      return "/Vector.svg";
    case 1:
      return "/dna.svg";
    case 2:
      return "/health_svgrepo.com.svg";
    case 3:
      return "/brush.svg";
    case 4:
      return "/suitcase_svgrepo.com.svg";
    case 5:
      return "/eye-fear_svgrepo.com.svg";
    default:
      break;
  }
}
