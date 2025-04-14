import { generateRandomInt } from "@/justFunctions";

const spacesArray = [
  "Вампир",
  "Орк",
  "Генокрад",
  "Эльдари",
  "Друкхари",
  "Тау",
  "Некрон",
  "Кин",
  "Ю'ват",
  "Баргези",
  "Веспиды",
  "Вискеон",
  "Демиурги",
  "Джокаеро",
  "Кв'Орл",
  "Скват",
  "Скаввен",
  "Зверочеловек",
];

const cosmodesantArray = [
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

function generateSpace() {
  let work = localStorage.getItem("profession");
  if (work == "Навигатор") {
    return "Навигатор";
  }
  if (work == "Вольный торговец" || work == "Сенешаль" || work == "Астропат") {
    return "Человек";
  }
  let randomInt = generateRandomInt(0, 100);
  // Установка процентного соотношения встречающихся существ
  if (randomInt < 3) {
    return "Вечный";
  }
  if (randomInt > 90) {
    return cosmodesantArray[generateRandomInt(0, cosmodesantArray.length - 1)];
  }
  if (randomInt < 30) {
    return spacesArray[generateRandomInt(0, spacesArray.length - 1)];
  } else return "Человек";
}

export default function generateBiology() {
  const species = generateSpace();
  let biology = "Вид: " + species + "<br/>";
  biology +=
    "Возраст: " +
    (Number(localStorage.getItem("stage")) + generateRandomInt(14, 100)) +
    "<br/>";

  let male = generateMale(species);

  biology += "Пол: " + male;
  return biology;
}

function generateMale(species) {
  if (species == "Генокрад (назовите игрокам любую расу)") {
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
