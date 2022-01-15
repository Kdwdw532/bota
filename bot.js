const {Telegraf, session, Scenes: {Stage}, Markup} = require('telegraf');
const config = require('config');

const {menu_keyboard} = require('./keyboards/menu_keyboard');
const buyScene = require('./Scenes/buy_scene')


const bot = new Telegraf(config.get('TOKEN'));

const stage = new Stage([buyScene]);

bot.use(session(), stage.middleware());

bot.start(async (ctx) => {
  ctx.reply(`
🔱 Здравствуй, @${ctx.from.username}

👤 Ваш ID: ${ctx.from.id}
💰 Баланс: 0 RUB
🧸 Статус: Новичок
🎁 Покупок: 0

✅ Все скрипты в наличии, можно покупать!
  `, menu_keyboard);
});

// bot.action('profile', async (ctx) => {
//   ctx.editMessageText(`
// 🔱 Здравствуй, @${ctx.from.username}

// 👤 Ваш ID: ${ctx.from.id}
// 💰 Баланс: 0 RUB
// 🧸 Статус: Новичок
// 🎁 Покупок: 0

// ✅ Все скрипты в наличии, можно покупать!
//   `, Markup.inlineKeyboard([Markup.button.callback('Назад в меню', 'menu')]))
// });

bot.action('category', async (ctx) => {
  ctx.editMessageText('💸 Скрытый майнер | 🤖 Скрипт по поиску кошельков BTC', Markup.inlineKeyboard([
    Markup.button.callback('💸 Скрытый майнер', 'miners'),
    Markup.button.callback('🤖 Скрипт по поиску кошельков BTC', 'btcScript'),
    Markup.button.callback('Назад в меню', 'menu')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 2}));
});

bot.action('btc', async (ctx) => {
  ctx.editMessageText(`
📚 О BTC чеке


🗳 Если вы никогда ранее не пользовались BTC Banker и не знаете как через него оплатить в боте, то специально для вас мы подготовили статью по использованию ботом:

https://telegra.ph/Kak-polzovatsya-BTC-Banker-01-06
  `, Markup.inlineKeyboard([
    Markup.button.callback('Назад в меню', 'menu')
  ]));
});

bot.hears(/^[а-яА-ЯёЁa-zA-Z0-9]+$/, async (ctx) => {
  ctx.reply(`
🔱 Здравствуй, @${ctx.from.username}

👤 Ваш ID: ${ctx.from.id}
💰 Баланс: 0 RUB
🧸 Статус: Новичок
🎁 Покупок: 0

✅ Все скрипты в наличии, можно покупать!
  `, menu_keyboard);
});

bot.action('menu', async (ctx) => {
  ctx.scene.leave();
  ctx.editMessageText(`
🔱 Здравствуй, @${ctx.from.username}

👤 Ваш ID: ${ctx.from.id}
💰 Баланс: 0 RUB
🧸 Статус: Новичок
🎁 Покупок: 0

✅ Все скрипты в наличии, можно покупать!
  `, menu_keyboard);
});

bot.action('faq', async (ctx) => {
  ctx.editMessageText(`
🎉 Ты в разделе вопросов и ответов
➖➖➖➖➖➖➖➖➖➖➖➖

1. Как работает скрипт по подбору BTC кошельков?

Вам нужно знать, что всего BTC кошельков существует: 1,461,501,637,330,902,918,203,684,832,716,283,019,655,932,542,976 штук. Скрипт перебирает все кошельки и пароли к ним. Все зависит от количества работы программы и вашего везения. Вам может найти кошельков с 17 биткоина, а может 3 дня без кошельков. Программа имеет 100% окуп на электричество и затраты. Ежемесячный доход составляет от 600+$


2. Выдаются ли прокси бесплатно?

Разумеется. После покупки скрипта по поиску BTC кошельков вы получаете бесплатные прокси для корректной работы программы в неограниченном количестве.


3. Какие ваши гарантии?

Мы на рынке софтов работаем более двух лет и имеем сотни количеств отзывов. Мы не имеем смысла обманывать наших покупателей, так как мы продаём наш софт и зарабатывают покупатели вместе с нами.


4. Зачем вы продаёте программы если они прибыльные?

Мы продаём для того, чтобы другие также могли заработать. Всех BTC кошельков как и всех заражённых майнером мы собрать не можем, а наши покупатели имеют прекрасную возможность заработать кэшик, после чего отблагодарить нас. + это дополнительный доход для нашего магазина для разработки новых софтов и улучшения старых.


5. Какой доход с одного компьютера со скрытым майнером?

Когда вы заразите один компьютер, среднестатистический доход будет составлять 0.1$ в час. Если вы заразите 10 компьютеров - 1$ в час, 100 - 10$ в час. 1.000 компьютера - 100$ в час. А работать майнер будет во всех режимах и ваш доход может достигать до 1.000$ долларов в день.


6. Легко ли зарабатывать на скрытом майнере?

Легко. Комбинируя его с другими программами и распространяя вы можете зарабатывать стабильно от 500$ в день. +Во многих версиях майнера мы предлагаем 10 схем для распространения майнера.


7. Что такое инсталы и как их получить?

Инсталы - заражение других компьютеров вашим софтов. Администрация имеет доступ к дедикам, и по оплате мы заразим их вашим майнером. Вы будете получать пассивный доход.


8. На какие пулы я могу использовать майнер?

По желанию мы можем поставить любой ваш пул. Но в основном наш выбор за MinerGate который имеет ряд преимуществ перед другими.


9. Какие вложения потребуется для каждого софта?

Никаких вложений. Далее все будет зависеть от количества времени вложенного в это или от вашей креативности. Вы можете спокойно зарабатывать от 500$ в день пассивно приложив к этому минимальное количество времени.


10. Как происходит оплата?

После выбранного вами товара вы нажимаете кнопку купить. Отправляете BTC чек боту (инструкция о BTC чеке имеется в разделе), затем администрация проекта принимает ваш чек, обналичивать ваши деньги и приступает к выполнению заказа. Мы прописываем все ваши данные, подготавливаем архив и в течении 3-ех часов высылаем вам готовый файл.


11. Могу ли я вернуть деньги?

Разумеется можете. В индивидуальных случаях вы связываетесь с поддержкой и решаете вопрос о вопросе возврата средств. В большинстве случаев мы возвращаем ваши деньги, в связи со сложившимися ситуациями.


👨🏻‍💻 По всем дополнительным вопросам: @alestratovish
  `, Markup.inlineKeyboard([
    Markup.button.callback('Назад в меню', 'menu')
  ]));
});

bot.action('help', async (ctx) => {
  ctx.editMessageText(`
✒️ По всем дополнительным вопросам оплаты и получения товара обращаться в нашу администрацию.

🥷 Администратор: @alestratovish
  `, Markup.inlineKeyboard([
    Markup.button.callback('Назад в меню', 'menu'),
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 2}), );
});

bot.action('btcScript', async (ctx) => {
  ctx.editMessageText(`
🤖 Скрипт по поиску забытых BTC кошельков


Вы получаете готовый софт, который установив на ваш компьютер, специальный скрипт начинает поиск BTC кошельков. Он подбирает адрес кошелька, 12 секретных слов и баланс BTC кошелька. Ваши действия — следить за работой программы и в случае нахождения кошелька - переводить крипту себе.


🎁 После покупки вы получаете:

• Скрипт по поиску кошельков
• Инструкцию по установке
• Помощь 24/7
• Прокси для корректной работы
• Мануал по выводу денег
• Советы по лучшему использованию
• Постоянные обновления и доработки


💸 Цена: 4.990₽
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:btcScript`),
    Markup.button.callback('Назад в меню', 'menu')
  ]));
});

bot.action('miners', async (ctx) => {
  ctx.editMessageText(`
🛍 Ты в разделе скрытых майнеров


Выбери нужный майнер и оплати BTC чеком. В случае возникновения вопросов ознакомься с пунктами «F.A.Q» и «О BTC чеке». В случае дополнительных вопросов обратись к администрации проекта.
  `, Markup.inlineKeyboard([
    Markup.button.callback('🔥 MINER MINI | 1999₽ | [БЕЗЛИМИТ]', 'minersMini'),
    Markup.button.callback('🔥 MINER PLUS | 2999₽ | [БЕЗЛИМИТ]', 'minersPlus'),
    Markup.button.callback('🔥 MINER PRO | 3999₽ | [БЕЗЛИМИТ]', 'minersPro'),
    Markup.button.callback('🔥 MINER PRO+ | 4999₽ | [БЕЗЛИМИТ]', 'minersProPlus'),
    Markup.button.callback('Назад в категории', 'category')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 4}));
});

bot.action('minersMini', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: MINER MINI
💸 Цена: 1.990₽


После покупки вы получаете .exe файл со скрытым майнером и возможностями которые прописаны в вашей категории.


👾 Список возможностей:

- Маленький размер файла
- Майнинг на процессоре
- Шифрование данных
- Скрытая работа
- Работа без админ прав
- Работа на 32/64bit Windows
- Работа на: Windows XP, 7, 8, 10
- Дропается в корень системы
- Скрытие процессов майнинга
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:minersMini`),
    Markup.button.callback('Назад', 'miners')
  ]));
});

bot.action('minersPlus', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: MINER PLUS
💸 Цена: 2.990₽


После покупки вы получаете .exe файл со скрытым майнером и возможностями которые прописаны в вашей категории.


👾 Список возможностей:

- Маленький размер файла
- Шифрование данных
- Скрытая работа
- Работа без админ прав
- Работа на 32/64bit Windows
- Работа на: Windows XP, 7, 8, 10
- Дропается в корень системы
- Скрытие процессов майнинга
- Бесплатная замена кошельков/майнера
- Динамическая нагрузка на процессор
- Гайды / Схемы распространения
- Помощь в вопросах майнера
- Защита данных от посторонних лиц
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:minersPlis`),
    Markup.button.callback('Назад', 'miners')
  ]));
});

bot.action('minersPro', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: MINER PRO
💸 Цена: 3.990₽


После покупки вы получаете .exe файл со скрытым майнером и возможностями которые прописаны в вашей категории.


👾 Список возможностей:

- Желаемый размер файла
- Шифрование данных
- Скрытая работа
- Работа без админ прав
- Работа на 32/64bit Windows
- Работа на: Windows XP, 7, 8, 10
- Дропается в корень системы
- Скрытие процессов майнинга
- Бесплатная замена кошельков/майнера
- Одновременный майнинг на процессоре и видеокарте
- Динамическая нагрузка на процессор
- Гайды / Схемы распространения
- Помощь в вопросах майнера
- Защита данных от посторонних лиц
- Адаптивная нагрузка на систему
- Автоматическое восстановление майнера после удаления
- Автоматическое распространение майнера по USB
- Скрытая автозагрузка
- Способы инсталов и пассивного дохода
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:minersPro`),
    Markup.button.callback('Назад', 'miners')
  ]));
});

bot.action('minersProPlus', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: MINER PRO+
💸 Цена: 4.990₽


После покупки вы получаете .exe файл со скрытым майнером и возможностями которые прописаны в вашей категории.


👾 Список возможностей:

- Желаемый размер файла
- Шифрование данных
- Скрытая работа
- Работа без админ прав
- Работа на 32/64bit Windows
- Работа на: Windows XP, 7, 8, 10
- Дропается в корень системы
- Скрытие процессов майнинга
- Одновременный майнинг на процессоре и видеокарте
- Динамическая нагрузка на процессор
- Гайды / Схемы распространения
- Помощь в вопросах майнера
- Защита данных от посторонних лиц
- Адаптивная нагрузка на систему
- Автоматическое восстановление майнера после удаления
- Автоматическое распространение майнера по USB
- Скрытая автозагрузка
- Способы инсталов и пассивного дохода
- Удаляет аналоговые майнера
- Майнинг в режиме сна
- Майнинг в режиме ожидания
- 3-х уровня нагрузка и защита
- Задержка майнинга перед стартом
- Бесплатная замена майнера при утере
- Помощь в настройке майнера
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:minersProPlus`),
    Markup.button.callback('Назад', 'miners')
  ]));
});

bot.on('callback_query', async (ctx) => {
  if (ctx.update.callback_query.data.split(':')[0] === 'buy') {
    const itemId = ctx.update.callback_query.data.split(':')[1];
    ctx.session.order = {};
    ctx.session.order.item = itemId;
    ctx.session.order.buyer = ctx.from.username;
    ctx.scene.enter('buyScene');
  }
});

bot.launch();


