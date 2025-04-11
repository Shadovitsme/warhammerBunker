import { generateRandomInt } from "@/justFunctions";

const spacesArray = [
  "Человек",
  "Вампир (назовите игрокам любую расу)",
  "Орк",
  "Генокрад (назовите игрокам любую расу)",
  "Эльдари",
  "Друкхари",
  "Тау",
  "Багровый кулак",
  "Багровый кулак",
  "Багровый кулак",
  "Багровый кулак",
  "Багровый кулак",
  "Белые шрамы ",
  "Ультрамарины",
  "Кровавые ангелы",
  "Пожиратели миров",
  "Имперские кулаки",
  "Гвардия смерти",
  "Дети императора",
  "Железные воины",
  "Космические волки",
  "Саламандры",
  "Темные ангелы",
  "Железные руки",
  "Альфа-Легион",
  "Несущие слово",
  "Гвардия ворона",
  "Повелители ночи",
  "Тысячи сынов",
  "Лунный волк",
];

export default function generateBiology() {
  const space =
    localStorage.getItem("profession") == "Навигатор"
      ? "Навигатор"
      : spacesArray[generateRandomInt(0, spacesArray.length - 1)];
  let biology = "Вид: " + space + "<br/>";
  biology +=
    "Возраст: " +
    (Number(localStorage.getItem("stage")) + generateRandomInt(14, 100)) +
    "<br/>";

  let male = generateMale(space);

  biology += "Пол: " + male;
  return biology;
}

function generateMale(space) {
  if (space == "Генокрад (назовите игрокам любую расу)") {
    return "Генокрад";
  }
  switch (generateRandomInt(0, 3)) {
    case 0:
      return "Женщина";
    case 1:
      return "Мужчина";
    case 2:
      return "Гермафродит";
    case 3:
      return "Фриск";
    default:
      break;
  }
}
