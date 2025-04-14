import { generateRandomInt } from "@/justFunctions";

export default function workText() {
  let profession = workArray[generateRandomInt(0, workArray.length - 1)];
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

const workArray = [
  "Вольный торговец",
  "Мародер",
  "Кантрабандист",
  "Сенешаль",
  "Астропат",
  "Навигатор",
  "Твистолов",
  "Мастер вокса",
  "Мастер шепотов",
  "Мастер инфернус",
  "Главный технопровидец",
  "Наркоторговец",
  "Темный механикум",
  "Механик",
  "Врач",
  "Пилот",
  "Аристократ",
  "Сторож",
  "Межгалактический дальнобойщик",
  "Разбойник",
  "Мафиози",
  "Сутенер",
  "Арбайтес",
];
