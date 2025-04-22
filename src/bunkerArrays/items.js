import { generateRandomInt } from "@/justFunctions";

export default () => {
  return generateItem();
};

const itemsArray = [
  "Вокс-бусина",
  "Дата-планшет",
  "Трупный батончик",
  "Банка рекафа",
  "Лхо-стик (сигарета)",
  "Бутылка амасека",
  "Трофейный череп ксеноса",
  "Золотая аквила",
  "Штык",
  "Печать чистоты",
  "Армейская лопатка",
  "Граната",
  "Противогаз",
  "Фальшивый патент якобы подписанный Императором",
  "Большой мешок тронов (денег)",
  "Пачка спука (варп-наркота)",
  "Сервочереп",
  "Ксеноелда",
  "Маленькая собачка",
  "Чья-то конечность",
  "блоха",
];

const playerItems = [
  "Пиктограф Анатолия",
  "Сигареты Астории",
  "Бинго Вахапартии",
  "Годовой отчет Астории",
  "Красивые гайки Бриар",
  "Табак Сайк",
  "Сабля 701",
  "Камень души Алаикан",
  "Дневник Раксаэдалис",
  "Боевые стимуляторы Эйера",
  "Фляга Анатолия",
];

function generateItem() {
  const randomIndex = generateRandomInt(0, itemsArray.length);
  if (randomIndex == itemsArray.length) {
    return playerItems[generateRandomInt(0, playerItems.length - 1)];
  } else {
    return itemsArray[randomIndex];
  }
}
