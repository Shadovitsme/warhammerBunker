import { generateRandomInt } from "@/justFunctions";

export default () => {
  return fobiaArray[generateRandomInt(0, fobiaArray.length - 1)];
};

const fobiaArray = [
  "Боязнь хаоситов",
  "Боязнь открытого космоса",
  "Боязнь технологий (а вдруг там ИИ!? Или нас хочет чипировать Дарк Механикум!?)",
  "Боязнь крови",
  "Боязнь пожаров (а пожары - частое дело на корабле)",
  "Боязнь друккари",
  "Клаустрафобия",
  "Боязнь сервиторов",
  "Абсолютное бесстрашие <br /> шансы выжить -100",
  "Социофобия",
];
