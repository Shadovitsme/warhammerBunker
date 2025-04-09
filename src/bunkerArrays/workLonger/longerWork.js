import { generateRandomInt } from "@/justFunctions";
import work from "./work";

export default function workText() {
  let text =
    work[generateRandomInt(0, work.length - 1)] +
    "<br /> Стаж: " +
    longerWork();
  return text;
}

function longerWork() {
  let longer = "";
  longer = generateRandomInt(0, 100);
  if (longer == 0) {
    longer = "начал вчера";
  } else if (longer > 60) {
    longer = "Всю жизнь";
  } else {
    longer += " лет";
  }
  return longer;
}
