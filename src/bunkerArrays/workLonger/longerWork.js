import { generateRandomInt } from "@/justFunctions";
import work from "./work";

export default function workText() {
  let profession = work[generateRandomInt(0, work.length - 1)];
  localStorage.setItem("profession", profession);
  let text = profession + "<br /> Стаж: " + longerWork();
  return text;
}

function longerWork() {
  let longer = "";
  longer = generateRandomInt(0, 100);
  localStorage.setItem("stage", longer);

  if (longer == 0) {
    longer = "начал вчера";
  } else if (longer > 60) {
    longer = "Всю жизнь";
  } else {
    longer += " лет";
  }
  return longer;
}
