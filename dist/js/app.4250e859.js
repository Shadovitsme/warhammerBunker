(function () {
  "use strict";
  var e = {
      6855: function (e, t, r) {
        var n = r(5130),
          o = r(6768);
        function u(e, t) {
          const r = (0, o.g2)("router-view");
          return (0, o.uX)(), (0, o.Wv)(r);
        }
        var a = r(1241);
        const l = {},
          s = (0, a.A)(l, [["render", u]]);
        var c = s,
          i = r(1387),
          f = r(4232),
          d = r(144);
        const b = [
          "Смена карт<br /> Данная карта лечит тебя от бесплодия (Если тебе попалась карта здоровья - бесплодие, то теперь ты идеально здоров)",
          "Смена карт<br /> Данная карта дает возможность тебе поменяться картой Дополнительная информация с человеком справа",
          "Смена карт<br /> Данная карта лечит бесплодие у мужчины (Если вам попалась карта здоровья - бесплодие, то данная карта лечит тебя, при условии, что по игре вы мужчина)",
          "Смена карт<br /> Данная карта дает тебе возможность поменяться картой Состояние здоровья с человеком справа",
          "Смена карт<br /> Данная карта дает тебе возможность поменяться картой Состояние здоровья с любым игроком на выбор",
          "Смена карт<br /> Данная карта дает тебе возможность поменяться картой Состояние здоровья с любым игроком на выбор",
          "Смена карт<br /> Данная карта дает тебе возможность пере раздать у всех игроков (включая себя) Карточки Профессия",
          "Смена карт<br /> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки Состояние Здоровья",
          "Смена карт<br /> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки Хобби",
          "Смена карт<br /> Данная карта дает тебе возможность перераздать у всех игроков (включая себя) Карточки Биологическая характеристика",
          "Смена карт<br /> Данная карта дает возможность вылечить тебя от любого недуга, теперь ты абсолютно здоров",
          "Смена карт<br /> Все игроки меняются картами Профессия по часовой стрелке",
          "Смена карт<br /> Данная карта дает возможность вылечить твою фобию",
          "Смена Карт<br /> Данная карта дает тебе возможность аннулировать карточки Профессия у всех игроков (Принимайте решения на основании оставшейся информации)",
          "Смена карт<br /> ты можешь поменять свою карту профессия на новую из колоды",
          "Смена карт<br /> ты можешь поменять свою карту биологическая характеристика на новую из колоды",
          "Смена карт<br /> ты можешь поменять свою карту Состояние здоровья на новую из колоды",
          "Смена карт<br /> ты можешь поменять свою карту Фобия на новую из колоды",
          "Смена карт<br /> ты можешь поменять свою карту Дополнительная информация на новую из колоды",
          "Смена карт<br /> ты можешь поменять свою карту Фобия на новую из колоды",
          "Смена карт<br /> ты можешь поменять свою карту биологическая характеристика на новую из колоды",
          "Смена карт<br /> ты можешь поменять свою карту профессия на новую из колоды",
          "Окружение<br /> Рядом с вами второй бункер, где находятся два строителя",
          "Окружение<br /> Рядом с вами второй бункер и он настроен не доброжелательно. Подумайте о своей безопасности",
          "Окружение<br /> Бункер находится на территории парка с аттракционами (разрушение парка 20%)",
          "Окружение<br /> В 20 метрах от вашего бункера сохранился погреб с вином",
          "Окружение<br /> В 30 метрах от вас склад с оружием",
          "Окружение<br /> Рядом с вами второй бункер, где находятся два медицинских сотрудника",
          "Окружение<br /> Возле вас находится бункер, в котором одни женщины (здоровые, возраст до 30 лет)",
          "Окружение<br /> Возле вас находится бункер, в котором одни мужчины (здоровые, возраст до 30 лет)",
          "Окружение<br /> Рядом с вами второй бункер, где находятся два химика",
          "Открытие карт <br /> Данная карта дает тебе возможность открыть карту любой категории у любого игрока на выбор",
          "Открытие карт <br /> Данная карта дает тебе возможность открыть карту Состояние здоровья у любого игрока выбор",
          "Друг <br /> Чтобы одержать победу тебе нужно попасть в бункер вместе с игроком справа от тебя",
          "Враг <br /> Чтобы одержать победу тебе нужно попасть в бункер, а человек слева от тебя - враг, если он останется в игре ты проиграешь, даже попав в бункер.",
          "Время <br /> Данная карта увеличивает твое время на высказывание на 1 минуту",
          "Время <br />  Данная карта дает возможность сократить время высказывания любого игрока на 30 секунд",
          "Количество мест в бункере больше на 1",
          "Количество мест в бункере меньше на 1",
          "Иммунитет <br />  у тебя есть защита на один игровой круг, если против твоего персонажа максимальное количество голосов",
          "Иммунитет <br />  у тебя есть защита на один игровой круг другого игрока, ты не можешь защитить себя",
          "Голосование <br /> Данная карта дает тебе возможность самому выбрать кто покинет игровой круг без голосования",
          "Голосование <br /> Данная карта дает тебе возможность возвратить любого выбывшего игрока в игру",
          "Голосование <br /> Данная карта дает возможность аннулировать один голос против тебя",
          "Голосование <br /> Данная карта дает возможность добавить один голос на голосовании, теперь у тебя их два (1 раз)",
          "Голосование <br /> Данная карта дает тебе возможность забрать голос другого игрока, теперь у тебя их два",
        ];
        function v() {
          return b[S(0, b.length - 1)] + "!";
        }
        const p = [
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
          ],
          g = [
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
        function m() {
          let e = localStorage.getItem("profession");
          if ("Навигатор" == e) return "Навигатор";
          if ("Вольный торговец" == e || "Сенешаль" == e || "Астропат" == e)
            return "Человек";
          let t = S(0, 100);
          return t < 3
            ? "Вечный"
            : t > 90
            ? g[S(0, g.length - 1)]
            : t < 30
            ? p[S(0, p.length - 1)]
            : "Человек";
        }
        function h() {
          const e = m();
          let t = "Вид: " + e + "<br/>";
          t +=
            "Возраст: " +
            (Number(localStorage.getItem("stage")) + S(14, 100)) +
            "<br/>";
          let r = k(e);
          return (t += "Пол: " + r), t;
        }
        function k(e) {
          if ("Генокрад (назовите игрокам любую расу)" == e) return "Генокрад";
          switch (S(0, 3)) {
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
        var x = () => y[S(0, y.length - 1)];
        const y = [
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
        function w() {
          let e = S(0, _.length + 30);
          return e > _.length - 1 ? "Полностью здоров" : _[e];
        }
        const _ = [
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
        function C() {
          return E[S(0, E.length - 1)];
        }
        const E = [
          "Петросянщина",
          "Сжигать еретиков",
          "Ходить на балы",
          "Молиться Императору",
          "Охота на челядь",
          "Чинить лазганы",
          "Расследовать преступления",
          "Спортивное ориентирование",
          "Читать книги",
          "Рисовать картины",
          "РЕЗНЯ",
          "Крутить гайки",
          "Реставрация",
          "Задушевные беседы <br /> с духами машин",
          "Распускать сплетни через варп",
          "Подслушивать вокс передачи",
          "Поминать Комердинера",
          "Коллекционировать сотрудников",
          "Призыв демонов",
          "Оккультизм",
          "Ересь",
          "Содомия",
          "Врачевание",
          "Запретные эксперименты",
          "Сервировка(создание сервиторов)",
          "Годовой отчет",
          "Суды",
          "Гонки на шаттлах",
          "Спортивный счет сервочерепов",
        ];
        var F = () => A();
        const L = [
            "Вокс-бусина",
            "Дата-планшет",
            "Трупный батончик",
            "Банка рекафа",
            "Лхо-стик (сигарета)",
            "Бутылка амасека",
            "Трофейный череп ксеноса",
            "Золотая аквила",
            "Штык",
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
          ],
          j = [
            "Пиктограф Анатолия",
            "Сигареты Астории",
            "Годовой отчет Астории",
            "Красивые гайки Бриар",
            "Табак Сайк",
            "Сабля 701",
            "Камень души Алаикан",
            "Дневник Раксаэдалис",
            "Боевые стимуляторы Эйера",
            "Фляга Анатолия",
          ];
        function A() {
          const e = S(0, L.length);
          return e == L.length ? j[S(0, j.length - 1)] : L[e];
        }
        function X() {
          let e = O[S(0, O.length - 1)];
          localStorage.setItem("profession", e);
          let t = e + "<br /> Стаж: " + D();
          return t;
        }
        function D() {
          let e = "";
          return (
            (e = S(0, 100)),
            localStorage.setItem("stage", e),
            0 == e
              ? (e = "начал вчера")
              : e > 60
              ? (e = "Всю жизнь")
              : (e += " лет"),
            e
          );
        }
        const O = [
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
        function S(e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        }
        function W(e) {
          switch (e) {
            case 0:
              return X();
            case 1:
              return h();
            case 2:
              return w();
            case 3:
              return C();
            case 4:
              return F();
            case 5:
              return x();
            case void 0:
              return v();
            default:
              break;
          }
        }
        function R(e) {
          switch (e) {
            case 0:
              return "../Vector.svg";
            case 1:
              return "../dna.svg";
            case 2:
              return "../health_svgrepo.com.svg";
            case 3:
              return "../brush.svg";
            case 4:
              return "../suitcase_svgrepo.com.svg";
            case 5:
              return "../eye-fear_svgrepo.com.svg";
            case void 0:
              return "../pulse.svg";
            default:
              break;
          }
        }
        const T = [
          "Раксаэдалис расстроилась",
          "Бунт на корабле",
          "Тзинч пришёл по ваши души",
          "Эйер умер",
          "Атака пиратов",
          "Атака друккари",
          "Кто-то призвал демона прямо на корабль",
          "Фамильные реликвии похищены!",
          "Инквизиторы начали против вас расследование",
          "Вас нашла жена Толи",
          "Дукхари звезду украли. Сволочи!",
          "Вы узнали о романе Раксаэдалис и Алаикан",
          "Нападение тиранидов",
          "Астрономекон потух",
          "О бриар узнали навигаторы",
          "Семейная встреча Феквардов",
        ];
        function I() {
          return T[S(0, T.length - 1)] + "!";
        }
        const K = {
          class:
            "bg-[#B04337] disabled:bg-[#537A84] disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-white rounded-lg hover:bg-[#B85F4F] active:bg-[#B04337] hover:text-2xl h-fit duration-300",
        };
        function B(e, t) {
          return (
            (0, o.uX)(),
            (0, o.CE)("button", K, [(0, o.RG)(e.$slots, "default")])
          );
        }
        const M = {},
          N = (0, a.A)(M, [["render", B]]);
        var P = N;
        const Q = {
            class:
              "z-10 absolute items-center rounded-t-lg top-4 left-4 right-4 bg-[#292E36] py-2",
          },
          z = {
            class:
              "w-full text-center mt-1 text-xl opacity-50 font-bold text-white uppercase",
          },
          H = {
            class:
              "bg-[#D0936D] rounded-lg h-full flex items-center px-4 pb-16",
          },
          $ = ["src"],
          q = {
            class:
              "z-10 absolute rounded-b-lg bottom-4 left-4 px-4 right-4 bg-[#292E36] py-2",
          },
          G = ["innerHTML"];
        var V = {
          __name: "itemCard",
          props: { order: Number },
          setup(e) {
            const t = e,
              r = (0, d.KR)(W(t.order)),
              n = [
                "Профессия",
                "Биология",
                "Здоровье",
                "Хобби",
                "Багаж",
                "Фобии",
              ],
              u = [
                "#D9D1B1",
                "#537A84",
                "#B04337",
                "#94A99F",
                "#896763",
                "#5F4A4E",
              ];
            return (e, a) => (
              (0, o.uX)(),
              (0, o.CE)(
                "div",
                {
                  onClick:
                    a[0] || (a[0] = (e) => (r.value = (0, d.R1)(W)(t.order))),
                  class:
                    "relative w-[300px] h-[450px] rounded-lg items-center p-4 justify-center",
                  style: (0, f.Tr)({
                    backgroundColor: void 0 != t.order ? u[t.order] : "#846389",
                  }),
                },
                [
                  (0, o.Lk)("div", Q, [
                    (0, o.Lk)(
                      "p",
                      z,
                      (0, f.v_)(
                        void 0 != t.order ? n[t.order] : "Карта действия"
                      ),
                      1
                    ),
                  ]),
                  (0, o.Lk)("div", H, [
                    (0, o.Lk)(
                      "img",
                      { class: "w-full shrink-0", src: (0, d.R1)(R)(t.order) },
                      null,
                      8,
                      $
                    ),
                  ]),
                  (0, o.Lk)("div", q, [
                    (0, o.Lk)(
                      "p",
                      {
                        class: "w-full text-center text-xl text-white",
                        innerHTML: r.value,
                      },
                      null,
                      8,
                      G
                    ),
                  ]),
                ],
                4
              )
            );
          },
        };
        const J = V;
        var U = J;
        const Y = { class: "my-auto" },
          Z = { class: "w-full flex justify-center mb-3 gap-2" };
        var ee = {
          __name: "cardGroup",
          setup(e) {
            const t = (0, d.KR)(0);
            function r() {
              let e = t.value;
              (t.value = 0),
                setTimeout(() => {
                  t.value = e;
                }, 50);
            }
            return (e, u) => (
              (0, o.uX)(),
              (0, o.CE)("div", Y, [
                (0, o.Lk)("div", Z, [
                  (0, o.bF)(
                    P,
                    {
                      onClick:
                        u[0] ||
                        (u[0] = (e) => (t.value < 6 ? t.value++ : t.value)),
                    },
                    {
                      default: (0, o.k6)(
                        () => u[1] || (u[1] = [(0, o.eW)("Кто я?")])
                      ),
                      _: 1,
                    }
                  ),
                  t.value > 0
                    ? ((0, o.uX)(),
                      (0, o.Wv)(
                        P,
                        { key: 0, class: "opacity-50", onClick: r },
                        {
                          default: (0, o.k6)(
                            () => u[2] || (u[2] = [(0, o.eW)("rerun")])
                          ),
                          _: 1,
                        }
                      ))
                    : (0, o.Q3)("", !0),
                ]),
                (0, o.bF)(
                  n.F,
                  {
                    name: "fade",
                    tag: "div",
                    class:
                      "grid grid-rows-2 grid-flow-col-dense mx-auto gap-3 w-fit",
                  },
                  {
                    default: (0, o.k6)(() => [
                      ((0, o.uX)(!0),
                      (0, o.CE)(
                        o.FK,
                        null,
                        (0, o.pI)(
                          t.value,
                          (e) => (
                            (0, o.uX)(),
                            (0, o.Wv)(
                              U,
                              {
                                key: e,
                                order: e - 1,
                                class: "transition-all duration-300",
                              },
                              null,
                              8,
                              ["order"]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
              ])
            );
          },
        };
        const te = (0, a.A)(ee, [["__scopeId", "data-v-75f93eca"]]);
        var re = te;
        const ne = {
            class: "w-56 fixed top-1/2 transform -translate-y-1/2 z-20 left-16",
          },
          oe = { class: "flex w-full justify-center items-center" },
          ue = { class: "flex w-full mt-1 justify-center" };
        var ae = {
          __name: "timerItem",
          setup(e) {
            const t = (0, d.KR)(0),
              r = (0, d.KR)(!1);
            let n = null,
              u = null;
            const a = (0, o.EW)(() => {
                const e = Math.floor(t.value / 1e3),
                  r = t.value % 1e3;
                return `${e.toString().padStart(2, "0")}.${r
                  .toString()
                  .padStart(3, "0")}`;
              }),
              l = () => {
                t.value = Date.now() - u;
              },
              s = () => {
                r.value ||
                  ((r.value = !0),
                  (u = Date.now() - t.value),
                  (n = setInterval(l, 10)));
              },
              c = () => {
                (r.value = !1), clearInterval(n);
              },
              i = () => {
                c(), (t.value = 0);
              };
            return (e, t) => (
              (0, o.uX)(),
              (0, o.CE)("div", ne, [
                t[2] ||
                  (t[2] = (0, o.Lk)(
                    "h1",
                    {
                      class:
                        "text-2xl w-full font-bold mb-4 text-center text-[#241D1A]",
                    },
                    " Таймер ",
                    -1
                  )),
                (0, o.Lk)(
                  "p",
                  {
                    class: (0, f.C4)([
                      "text-4xl font-mono text-center mb-2 text-[#241D1A]",
                      e.seconds > 3 ? "animate-bounce" : "",
                    ]),
                  },
                  (0, f.v_)(a.value),
                  3
                ),
                (0, o.Lk)("div", oe, [
                  (0, o.bF)(
                    P,
                    {
                      onClick: s,
                      disabled: r.value,
                      class: "disabled:bg-gray-400 disabled:cursor-not-allowed",
                    },
                    {
                      default: (0, o.k6)(() => [
                        (0, o.eW)(
                          (0, f.v_)(r.value ? "Таймер идет" : "Запустить"),
                          1
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                  (0, o.bF)(
                    P,
                    { class: "ml-1", disabled: !r.value, onClick: c },
                    {
                      default: (0, o.k6)(
                        () => t[0] || (t[0] = [(0, o.eW)("Стоп")])
                      ),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                ]),
                (0, o.Lk)("div", ue, [
                  (0, o.bF)(
                    P,
                    { disabled: !r.value, onClick: i },
                    {
                      default: (0, o.k6)(
                        () => t[1] || (t[1] = [(0, o.eW)("Сброс")])
                      ),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                ]),
              ])
            );
          },
        };
        const le = ae;
        var se = le;
        const ce = { class: "flex gap-2" },
          ie = { class: "font-bold text-2xl text-[#D6D1C9]" },
          fe = ["value", "readonly"];
        var de = {
          __name: "voteField",
          props: { num: { type: Number, required: !0 } },
          setup(e) {
            return (t, r) => (
              (0, o.uX)(),
              (0, o.CE)("div", ce, [
                (0, o.Lk)("p", ie, (0, f.v_)(e.num), 1),
                (0, o.Lk)(
                  "input",
                  {
                    value: 1 == e.num ? "Голосования нет" : "",
                    readonly: 1 == e.num,
                    type: "text",
                    class:
                      "w-full bg-[#D0936D] text-[#4C3528] text-center rounded-lg",
                  },
                  null,
                  8,
                  fe
                ),
              ])
            );
          },
        };
        const be = de;
        var ve = be;
        const pe = { class: "rounded-2xl w-md bg-[#5F4A4E] space-y-2 p-4" };
        var ge = {
          __name: "voteCard",
          setup(e) {
            return (e, t) => (
              (0, o.uX)(),
              (0, o.CE)("div", pe, [
                t[0] ||
                  (t[0] = (0, o.Lk)(
                    "p",
                    {
                      class:
                        "w-full text-center font-bold text-2xl text-[#D6D1C9]",
                    },
                    " Карта голосования ",
                    -1
                  )),
                ((0, o.uX)(),
                (0, o.CE)(
                  o.FK,
                  null,
                  (0, o.pI)(5, (e) =>
                    (0, o.bF)(ve, { num: e, key: e }, null, 8, ["num"])
                  ),
                  64
                )),
              ])
            );
          },
        };
        const me = ge;
        var he = me;
        const ke = { class: "gap-y-3" },
          xe = { class: "w-full justify-center flex gap-2 mb-20" },
          ye = {
            key: 0,
            class:
              "animate-bounce w-full text-center text-5xl mb-20 text-[#241D1A]",
          },
          we = {
            key: 3,
            class: "flex w-full justify-center items-center mt-10 gap-3",
          };
        var _e = {
          __name: "HomeView",
          setup(e) {
            const t = (0, d.KR)(!1);
            let r = (0, d.KR)("");
            const n = (0, d.KR)(!1);
            function u() {
              (r.value = I()), (t.value = !0);
            }
            return (e, a) => (
              (0, o.uX)(),
              (0, o.CE)(
                o.FK,
                null,
                [
                  a[3] ||
                    (a[3] = (0, o.Lk)(
                      "div",
                      {
                        class:
                          "fixed top-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-[#FBF5F2] from-50% to-transparent",
                      },
                      null,
                      -1
                    )),
                  (0, o.Lk)("div", ke, [
                    (0, o.Lk)("div", xe, [
                      (0, o.bF)(
                        P,
                        { onClick: u },
                        {
                          default: (0, o.k6)(
                            () =>
                              a[1] || (a[1] = [(0, o.eW)("Что случилось!?")])
                          ),
                          _: 1,
                        }
                      ),
                    ]),
                    t.value
                      ? ((0, o.uX)(),
                        (0, o.CE)("p", ye, (0, f.v_)((0, d.R1)(r)), 1))
                      : (0, o.Q3)("", !0),
                    n.value
                      ? ((0, o.uX)(), (0, o.Wv)(se, { key: 1 }))
                      : (0, o.Q3)("", !0),
                    t.value
                      ? ((0, o.uX)(),
                        (0, o.Wv)(re, {
                          key: 2,
                          onClick: a[0] || (a[0] = (e) => (n.value = !0)),
                        }))
                      : (0, o.Q3)("", !0),
                    n.value
                      ? ((0, o.uX)(),
                        (0, o.CE)("div", we, [
                          (0, o.bF)(he),
                          a[2] || (a[2] = (0, o.eW)()),
                          (0, o.bF)(U),
                        ]))
                      : (0, o.Q3)("", !0),
                  ]),
                ],
                64
              )
            );
          },
        };
        const Ce = _e;
        var Ee = Ce;
        const Fe = [
            { path: "/", name: "home", component: Ee },
            {
              path: "/about",
              name: "about",
              component: () => r.e(594).then(r.bind(r, 603)),
            },
          ],
          Le = (0, i.aE)({
            history: (0, i.LA)("/warhammerBunker/"),
            routes: Fe,
          });
        var je = Le;
        (0, n.Ef)(c).use(je).mount("#app");
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var u = (t[n] = { exports: {} });
    return e[n].call(u.exports, u, u.exports, r), u.exports;
  }
  (r.m = e),
    (function () {
      var e = [];
      r.O = function (t, n, o, u) {
        if (!n) {
          var a = 1 / 0;
          for (i = 0; i < e.length; i++) {
            (n = e[i][0]), (o = e[i][1]), (u = e[i][2]);
            for (var l = !0, s = 0; s < n.length; s++)
              (!1 & u || a >= u) &&
              Object.keys(r.O).every(function (e) {
                return r.O[e](n[s]);
              })
                ? n.splice(s--, 1)
                : ((l = !1), u < a && (a = u));
            if (l) {
              e.splice(i--, 1);
              var c = o();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        u = u || 0;
        for (var i = e.length; i > 0 && e[i - 1][2] > u; i--) e[i] = e[i - 1];
        e[i] = [n, o, u];
      };
    })(),
    (function () {
      r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return r.d(t, { a: t }), t;
      };
    })(),
    (function () {
      r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      (r.f = {}),
        (r.e = function (e) {
          return Promise.all(
            Object.keys(r.f).reduce(function (t, n) {
              return r.f[n](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      r.u = function (e) {
        return "js/about.9ba40ab6.js";
      };
    })(),
    (function () {
      r.miniCssF = function (e) {};
    })(),
    (function () {
      r.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "bunker:";
      r.l = function (n, o, u, a) {
        if (e[n]) e[n].push(o);
        else {
          var l, s;
          if (void 0 !== u)
            for (
              var c = document.getElementsByTagName("script"), i = 0;
              i < c.length;
              i++
            ) {
              var f = c[i];
              if (
                f.getAttribute("src") == n ||
                f.getAttribute("data-webpack") == t + u
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((s = !0),
            (l = document.createElement("script")),
            (l.charset = "utf-8"),
            (l.timeout = 120),
            r.nc && l.setAttribute("nonce", r.nc),
            l.setAttribute("data-webpack", t + u),
            (l.src = n)),
            (e[n] = [o]);
          var d = function (t, r) {
              (l.onerror = l.onload = null), clearTimeout(b);
              var o = e[n];
              if (
                (delete e[n],
                l.parentNode && l.parentNode.removeChild(l),
                o &&
                  o.forEach(function (e) {
                    return e(r);
                  }),
                t)
              )
                return t(r);
            },
            b = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (function () {
      r.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      r.p = "/";
    })(),
    (function () {
      var e = { 524: 0 };
      (r.f.j = function (t, n) {
        var o = r.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else {
            var u = new Promise(function (r, n) {
              o = e[t] = [r, n];
            });
            n.push((o[2] = u));
            var a = r.p + r.u(t),
              l = new Error(),
              s = function (n) {
                if (r.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var u = n && ("load" === n.type ? "missing" : n.type),
                    a = n && n.target && n.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + u + ": " + a + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = u),
                    (l.request = a),
                    o[1](l);
                }
              };
            r.l(a, s, "chunk-" + t, t);
          }
      }),
        (r.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, n) {
          var o,
            u,
            a = n[0],
            l = n[1],
            s = n[2],
            c = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in l) r.o(l, o) && (r.m[o] = l[o]);
            if (s) var i = s(r);
          }
          for (t && t(n); c < a.length; c++)
            (u = a[c]), r.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
          return r.O(i);
        },
        n = (self["webpackChunkbunker"] = self["webpackChunkbunker"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = r.O(void 0, [504], function () {
    return r(6855);
  });
  n = r.O(n);
})();
//# sourceMappingURL=app.4250e859.js.map
