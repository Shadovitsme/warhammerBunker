import { generateRandomInt } from "@/justFunctions";

export default function longerWork() {
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
