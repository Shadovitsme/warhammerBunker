import { generateRandomInt } from "@/justFunctions";

export default function randomizeHealth() {
  let number = generateRandomInt(0, healthArray.length + 30);
  if (number > healthArray.length - 1) {
    return "Полностью здоров";
  } else {
    return healthArray[number];
  }
}

const healthArray = [
  "Космогепатит",
  "гей",
  "Блошиный энцифалит",
  "Топографические критинизм",
  "Бешенство",
  "Много хромосом",
  "Мало хромосом",
  "Отсутствует <br /> болен всем и сразу<br />Боже,оно ходит",
  "Синдром <br /> раздраженного кишечника",
  "Киборг",
  "Здоров как бык,<br /> но ебнутый",
  "Рукожопие",
  "Рак горла",
  "Импотенция",
  "Имперская проказа",
  "Бубонная чума",
  "холера",
  "тиф",
  "Хворь Нургла",
  "Хламидиоз Сланеш",
  "Бесплодие",
  "Шизофрения",
  "ВИЧ",
  "авитаминоз",
  "алкоголизм",
  "аллергия на животных",
  "Аллергия на ксеносов",
  "анорексия",
  "астма",
  "бессонница",
  "биполярное расстройство",
  "болезнь Альцгеймера",
  "ветрянка",
  "гайморит",
  "гастрит",
  "Ксеноветрянка",
  "гемофилия",
  "глаукома",
  "глухонемота",
  "дальтонизм",
  "депрессия",
  "диарея",
  "заикание",
  "кариес",
  "косоглазие",
  "межпозвоночная грыжа",
  "мигрень",
  "мочекаменная болезнь",
  "наркомания",
  "недержание мочи",
  "ожирение",
  "остеохондроз",
  "отсутствие ноги",
  "отсутствие руки",
  "паранойя",
  "плоскостопие",
  "пневмония",
  "простуда",
  "псориаз",
  "птичий грипп",
  "рак крови",
  "рак лёгкого",
  "сахарный диабет второго типа",
  "сахарный диабет первого типа",
  "синдром Туретта",
  "слепота",
  "туберкулёз",
  "умственная отсталость",
  "цинга",
  "шизофрения",
  "эпилепсия",
  "язва желудка",
  "Бешеная золотуха",
  "Кровавый понос",
  "Кровяная гниль",
  "Крысиная лихорадка",
  "Лёгкая инфекция",
  "Нагноение",
  "Скорняжная оспа",
  "Сыпучая чесотка",
  "Чёрная чума",
];
