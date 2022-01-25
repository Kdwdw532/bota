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
🎁 Покупок: 0

✅ Все товары в наличии, можно покупать!
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
  ctx.editMessageText('💸 Кошельки | 🤖 Верификация биржи | 🛒 Мерчи', Markup.inlineKeyboard([
    Markup.button.callback('💸 Кошельки', 'Wallets'),
    Markup.button.callback('🤖 Верификация биржи', 'Verif'),
    Markup.button.callback('🏦2D MERCHANT 🏦', 'merchant-2d'),
    Markup.button.callback('💻3D MERCHANT 💻', 'merchant-3d'),
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

bot.hears(/^[а-яА-ЯёЁa-zA-Z0-9]+$/, async (ctx,next) => {
  ctx.reply(`
🔱 Здравствуй, @${ctx.from.username}

👤 Ваш ID: ${ctx.from.id}
💰 Баланс: 0 RUB
🎁 Покупок: 0

✅ Все товары в наличии, можно покупать!
  `, menu_keyboard);
  next();
});

bot.action('menu', async (ctx) => {
  ctx.scene.leave();
  ctx.editMessageText(`
🔱 Здравствуй, @${ctx.from.username}

👤 Ваш ID: ${ctx.from.id}
💰 Баланс: 0 RUB
🎁 Покупок: 0

✅ Все товары в наличии, можно покупать!
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


👨🏻‍💻 По всем дополнительным вопросам: @WoodyAdm
  `, Markup.inlineKeyboard([
    Markup.button.callback('Назад в меню', 'menu')
  ]));
});

bot.action('help', async (ctx) => {
  ctx.editMessageText(`
✒️ По всем дополнительным вопросам оплаты и получения товара обращаться в нашу администрацию.

🥷 Администратор: @WoodyAdm
  `, Markup.inlineKeyboard([
    Markup.button.callback('Назад в меню', 'menu'),
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 2}), );
});

bot.action('merchant-2d', async (ctx) => {
    ctx.editMessageText(`
  🛍 Ты в разделе  2D мерчантов
  
  
  Выбери нужный мерчант и оплати BTC чеком. В случае возникновения вопросов ознакомься с пунктами «Помощь» и «О BTC чеке». В случае дополнительных вопросов обратись к администрации проекта.
    `, Markup.inlineKeyboard([
      Markup.button.callback('🅿️Обнал через PayPal🅿️', 'paypal'),
      Markup.button.callback('2D МЕРЧ ПОД 🇺🇸', 'US'),
      Markup.button.callback('Мерч под GP 🇷🇺RU/EU🇪🇺', 'GP'),
      Markup.button.callback('🇪🇺МЕРЧ ПОД EU🇪🇺', 'EU'),
      Markup.button.callback('🖥2D Мерч все страны🖥', 'World'),
      Markup.button.callback('Назад в категории', 'category')
    ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 3}));
  });

  bot.action('merchant-3d', async (ctx) => {
    ctx.editMessageText(`
    🛍 Ты в разделе  3D мерчантов
  
  
  Выбери нужный мерчант и оплати BTC чеком. В случае возникновения вопросов ознакомься с пунктами «Помощь» и «О BTC чеке». В случае дополнительных вопросов обратись к администрации проекта.
  `, Markup.inlineKeyboard([
  Markup.button.callback('3D BTC МЕРЧ ПОД 🇺🇳🇪🇺', 'BTC-EU'),
  Markup.button.callback('3D МЕРЧ ПОД 🇷🇺🇺🇦', 'RU'),
  Markup.button.callback('3D МЕРЧ ПОД 🇪🇺🇺🇳', '3D-EU'),
  Markup.button.callback('3D Мерч под 🇷🇺🇪🇺', 'RU-EU'),
  Markup.button.callback('🖥 3D BTC МЕРЧ Все страны 🖥', 'World-3D'),
  Markup.button.callback('◀️ Назад в категории', 'category')
], {wrap: (btn, index, currentRow) => currentRow.length >= index / 3}));
});

bot.action('paypal', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 🅿️Обнал через PayPal🅿️
💸 Цена: 5.500₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:paypal`),
    Markup.button.callback('Назад', 'merchant-2d')
  ]));
});

bot.action('US', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 2D МЕРЧ ПОД 🇺🇸
💸 Цена: 12.300₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:US`),
    Markup.button.callback('Назад', 'merchant-2d')
  ]));
});

bot.action('GP', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: Мерч под GP 🇷🇺RU/EU🇪🇺
💸 Цена: 7.400₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:GP`),
    Markup.button.callback('Назад', 'merchant-2d')
  ]));
});

bot.action('EU', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 🇪🇺МЕРЧ ПОД EU🇪🇺
💸 Цена: 4.399₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:EU`),
    Markup.button.callback('Назад', 'merchant-2d')
  ]));
});

bot.action('World', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 🖥2D Мерч все страны🖥
💸 Цена: 10.390₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:World`),
    Markup.button.callback('Назад', 'merchant-2d')
  ]));
});

bot.action('BTC-EU', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 3D BTC МЕРЧ ПОД 🇺🇳🇪🇺
💸 Цена: 5.399₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:BTC-EU`),
    Markup.button.callback('Назад', 'merchant-3d')
  ]));
});

bot.action('RU', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 3D МЕРЧ ПОД 🇷🇺🇺🇦
💸 Цена: 3.399₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:RU`),
    Markup.button.callback('Назад', 'merchant-3d')
  ]));
});

bot.action('3D-EU', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 3D МЕРЧ ПОД 🇪🇺🇺🇳
💸 Цена: 4.799₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:3D-EU`),
    Markup.button.callback('Назад', 'merchant-3d')
  ]));
});

bot.action('RU-EU', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 3D Мерч под 🇷🇺🇪🇺
💸 Цена: 10.399₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:RU-EU`),
    Markup.button.callback('Назад', 'merchant-3d')
  ]));
});

bot.action('Workd-3D', async (ctx) => {
  ctx.editMessageText(`
🔥 Категория: 🖥 3D BTC МЕРЧ Все страны 🖥
💸 Цена: 12.399₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:Workd-3D`),
    Markup.button.callback('Назад', 'merchant-3d')
  ]));
});



bot.action('Wallets', async (ctx) => {
  ctx.editMessageText(`
🛍 Ты в разделе кошельков


Выбери нужный кошелек и оплати BTC чеком. В случае возникновения вопросов ознакомься с пунктами «Помощь» и «О BTC чеке». В случае дополнительных вопросов обратись к администрации проекта.
  `, Markup.inlineKeyboard([
    Markup.button.callback('🥝 QIWI', 'Qiwi'),
    Markup.button.callback('💜 ЮMoney', 'Umoney'),
    Markup.button.callback('🏦 Binance', 'Binance'),
    Markup.button.callback('🤑 LocalBitcoins', 'LocalBTC'),
    Markup.button.callback('🧢 PayPal', 'PayPal'),
    Markup.button.callback('◀️ Назад в категории', 'category')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 8}));
});

bot.action('Qiwi', async (ctx) => {
  ctx.editMessageText(`
  💚 Ты в разделе QIWI кошельков


Выбери нужный кошелек и оплати BTC чеком.
  `, Markup.inlineKeyboard([
    Markup.button.callback('🇷🇺 Qiwi', 'Qiwi-def'),
    Markup.button.callback('🇷🇺 Qiwi кошелек (Основной)', 'Qiwi-Osn'),
    Markup.button.callback('🇷🇺 + СНГ Qiwi (Профессиональный)', 'Qiwi-SNG'),
    Markup.button.callback('🇷🇺 Qiwi кошелек (Профессиональный/виртуалка)', 'Qiwi-PRO'),
    Markup.button.callback('🇷🇺 Qiwi кошелек (Профессиональный/карта)', 'Qiwi-PRO2'),
    Markup.button.callback('🇷🇺 Qiwi кошелек (Профессиональный/договор)', 'Qiwi-PRO3'),
    Markup.button.callback('◀️ Назад в кошельки', 'Wallets')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 6}));
});

bot.action('Qiwi-def', async (ctx) => {
  ctx.editMessageText(`
  🇷🇺 Qiwi
  -Виртуалка
  -api
  -Данные
 
 После покупки, вы получаете такие данные от кошелька:
 1. Данные от кошелька (номер:пароль) 
 2. Данные от карты (номер:срок действия:ccv) 
 3. Токен кошелька (API) 
 
 Прайс: 100₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🇷🇺 Qiwi`),
    Markup.button.callback('Назад', 'Qiwi')
  ]));
});

bot.action('Qiwi-Osn', async (ctx) => {
  ctx.editMessageText(`
🇷🇺 Qiwi кошелек (Основной)
 -Виртуалка
 -api
 -Данные идентификации
 -Прокси
 -доступ к сим
 -SMS ON

После покупки, вы получаете такие данные от кошелька:

1. Данные от кошелька (номер:пароль)
2. Данные от карты (номер:срок действия:cvv)
3. Токен кошелька (API)
4. Данные идентификации
5. Прокси ipv4 http (20-30 дней)

Прайс:1000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🇷🇺 Qiwi кошелек (Основной)`),
    Markup.button.callback('Назад', 'Qiwi')
  ]));
});

bot.action('Qiwi-SNG', async (ctx) => {
  ctx.editMessageText(`
  🇷🇺 + СНГ Qiwi (Профессиональный) 
  -Ваши/мои данные
 
 ❗️ВАЖНО❗️
 Идентификация проводится в 2-х случаях: 
 1. На кошельке статус "Минимальный", ваши/мои данные
 2. На кошельке статус "Основной" ваши данные, на которые повышали до этого статуса
 
  
 ОБЯЗАТЕЛЬНО нужен доступ к СМС для подтверждения идентификации!
 
 Идентификация вашего РФ или СНГ кошелька Qiwi до статуса "Профессиональный"
 
 Для идентификации потребуется только номер кошелька.
 
 Если мои данные, выдаю после идентификации в текстовом формате
 
 Прайс: 2000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🇷🇺 + СНГ Qiwi (Профессиональный)`),
    Markup.button.callback('Назад', 'Qiwi')
  ]));
});


bot.action('Qiwi-PRO', async (ctx) => {
  ctx.editMessageText(`
  🇷🇺 Qiwi кошелек (Профессиональный) 
 -Виртуалка 
 -api
 -Данные 
 -Доступ к сим
 -Прокси
 -SMS ON

После покупки, вы получаете такие данные от кошелька:

1. Данные от кошелька (номер:пароль)
2. Данные от карты (номер:срок действия:cvv)
3. API Токен
4. Данные идентификации
5. Прокси (20-30 дней)

Прайс: 2400.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:RU QIWI (Профессиональный)`),
    Markup.button.callback('Назад', 'Qiwi')
  ]));
});

bot.action('Qiwi-PRO2', async (ctx) => {
  ctx.editMessageText(`
  🇷🇺 Qiwi кошелек (Профессиональный)
  -Неименная карта 
  - [11/23] 
  -api
  - Данные идентификации
  -Прокси
  -Куки 
 После покупки, вы получаете такие данные от кошелька:
 
 1. Данные от кошелька (номер:пароль)
 2. Данные от карты (номер:срок действия:cvv)
 3. API Токен
 4. Данные идентификации
 5. Прокси (20-30 дней)
 6. Куки (формат Netscape)
 
 Прайс: 3000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:RU QIWI (Профессиональный и карта)`),
    Markup.button.callback('Назад', 'Qiwi')
  ]));
});

bot.action('Qiwi-PRO3', async (ctx) => {
  ctx.editMessageText(`
  🇷🇺 Qiwi кошелек
  (Профессиональный)
   -Договор оператора
   -Селфи с паспортом 
  
  После покупки, вы получаете такие данные от кошелька:
  
  1. Данные от кошелька (номер:пароль)
  2. Данные от карты (номер:срок действия:cvv)
  3. API Токен
  4. Данные идентификации
  5. Договор оператора и селфи с паспортом
  6. Прокси (20-30 дней) 
  
  Прайс: 4000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:RU QIWI (Профессиональный и договор)`),
    Markup.button.callback('Назад', 'Qiwi')
  ]));
});



bot.action('Umoney', async (ctx) => {
  ctx.editMessageText(`
  💜 Ты в разделе ЮМани  кошельков


Выбери нужный кошелек и оплати BTC чеком.
  `, Markup.inlineKeyboard([
    Markup.button.callback('🟦Юмани Именной', 'Umoney-def'),
    Markup.button.callback('🟦ЮMoney Сим (Именной)', 'Umoney-Osn'),
    Markup.button.callback('🟦ЮMoney (Идентифицированный)', 'Umoney-IND'),
    Markup.button.callback('🟦ЮMoney Карта (Идентифицированный)', 'Umoney-IND2'),
    Markup.button.callback('◀️ Назад в кошельки', 'Wallets')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 6}));
});

bot.action('Umoney-def', async (ctx) => {
  ctx.editMessageText(`
  🟦Юмани Именной
 -Данные
 -Прокси
 -Коды

После покупки, вы получаете такие данные от кошелька:

1. Данные от кошелька (номер:пароль)
2. Данные от карты (номер:срок действия:cvv)
3. Аварийные коды (25 кодов)
4. Прокси (5-10 дней) 

Прайс: 120₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🟦Юмани Именной`),
    Markup.button.callback('Назад', 'Umoney')
  ]));
});

bot.action('Umoney-Osn', async (ctx) => {
  ctx.editMessageText(`
  🟦ЮMoney кошелек (Именной)
 -Доступ к сим
 -Данные
 -Прокси
 -Коды
После покупки, вы получаете такие данные от кошелька:

1. Данные от кошелька (номер:пароль)
2. Данные от почты (логин:пароль)
3. Данные от карты (номер:срок действия:cvv)
4. Аварийные коды (25 кодов)
5. Данные идентификации
6. Прокси (30 дней)
 
Прайс: 1000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🟦ЮMoney Сим (Именной)`),
    Markup.button.callback('Назад', 'Umoney')
  ]));
});

bot.action('Umoney-IND', async (ctx) => {
  ctx.editMessageText(`
  🟦ЮMoney кошелек (Идентифицированный) 
 -Доступ к сим
 -Данные
 -Прокси
 -Коды

После покупки, вы получаете такие данные от кошелька:

1. Данные от кошелька (номер:пароль)
2. Данные от почты (логин:пароль)
3. Данные от карты (номер:срок действия:cvv)
4. Аварийные коды (25 кодов)
5. Данные идентификации
6. Прокси (30 дней) 
 
Прайс: 2400.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🟦ЮMoney (Идентифицированный)`),
    Markup.button.callback('Назад', 'Umoney')
  ]));
});

bot.action('Umoney-IND2', async (ctx) => {
  ctx.editMessageText(`
  🟦ЮMoney кошелек (Идентифицированный)
 -Неименная карта
 - [10/24]
 -Данные
 -Прокси
 -Коды

После покупки, вы получаете такие данные от кошелька:

1. Данные от кошелька (номер:пароль)
2. Данные от почты (логин:пароль)
3. Данные от карты (номер:срок действия:cvv)
4. Аварийные коды (25 кодов)
5. Данные идентификации
6. Прокси (30 дней) 

Прайс: 4300.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🟦ЮMoney Карта Идентифицированный`),
    Markup.button.callback('Назад', 'Umoney')
  ]));
});

bot.action('PayPal', async (ctx) => {
  ctx.editMessageText(`
  🇷🇺PayPal кошелек
 -Куки
 -Прокси
 -Данные идентификации

После покупки, вы получаете:

1. Куки (формат Netscape)
2. Данные для входа в аккаунт (почта:пароль)
3. Данные для входа в почту (почта:пароль)
4. Прокси http
5. Данные идентификации

Прайс:1000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🇷🇺 Paypal`),
    Markup.button.callback('Назад', 'Wallets')
  ]));
});

bot.action('Binance', async (ctx) => {
  ctx.editMessageText(`
  💛 Ты в разделе Binance кошельков


Выбери нужный кошелек и оплати BTC чеком.
  `, Markup.inlineKeyboard([
    Markup.button.callback('🪙 Binance (вериф вашего кошелька)', 'Binance-Osn'),
    Markup.button.callback('🪙 Binance (вериф + доки)', 'Binance-docs'),
    Markup.button.callback('◀️ Назад в кошельки', 'Wallets')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 6}));
});

bot.action('Binance-Osn', async (ctx) => {
  ctx.editMessageText(`
  🪙 Binance
 -Идентификация вашего аккаунта

От вас потребуются данные для входа. Выполнение в течении суток. 

Прайс: 3500.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🪙 Binance (вериф вашего кошелька)`),
    Markup.button.callback('Назад', 'Binance')
  ]));
});

bot.action('Binance-docs', async (ctx) => {
  ctx.editMessageText(`
  🪙 Binance 
 -Готовый аккаунт

В комплекте данные для входа + паспортные данные дропа.

Првйс: 5000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:🪙 Binance (вериф + доки)`),
    Markup.button.callback('Назад', 'Binance')
  ]));
});

bot.action('LocalBTC', async (ctx) => {
  ctx.editMessageText(`
  💛 Ты в разделе Binance кошельков


Выбери нужный кошелек и оплати BTC чеком.
  `, Markup.inlineKeyboard([
    Markup.button.callback('💰LocalBitcoins T2 (вериф вашего кошелька)', 'LocalBTC-Osn'),
    Markup.button.callback('💰LocalBitcoins T2 (вериф + доки)', 'LocalBTC-docs'),
    Markup.button.callback('◀️ Назад в кошельки', 'Wallets')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 6}));
});

bot.action('LocalBTC-Osn', async (ctx) => {
  ctx.editMessageText(`
  💰LocalBitcoins T2 
 -Идентификация вашего аккаунта

От вас потребуются данные для входа. Выполнение в течении суток.

Прайс: 3000.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:💰LocalBitcoins T2 (вериф + доки)`),
    Markup.button.callback('Назад', 'LocalBTC')
  ]));
});

bot.action('LocalBTC-docs', async (ctx) => {
  ctx.editMessageText(`
  💰LocalBitcoins T2 
 -Готовый аккаунт

В комплекте данные для входа + паспортные данные дропа.

Прайс: 3500.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:💰LocalBitcoins T2 (вериф + доки)`),
    Markup.button.callback('Назад', 'LocalBTC')
  ]));
});



bot.action('Verif', async (ctx) => {
  ctx.editMessageText(`
📃 Ты в разделе верификации кошельков


Выбери нужный кошелек и оплати BTC чеком.
  `, Markup.inlineKeyboard([
    Markup.button.callback('💰 Totalcoin', 'Totalcoin'),
    Markup.button.callback('💰 Blockchain', 'Blockchain'),
    Markup.button.callback('◀️ Назад в категории', 'category')
  ], {wrap: (btn, index, currentRow) => currentRow.length >= index / 8}));
});

bot.action('Totalcoin', async (ctx) => {
  ctx.editMessageText(`
  💰 Totalcoin
Верификация

Делаем вериф вашего кошелька

Прайс: 2900.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:💰 Totalcoin Вериф`),
    Markup.button.callback('Назад', 'Verif')
  ]));
});

bot.action('Blockchain', async (ctx) => {
  ctx.editMessageText(`
  💰 Blockchain
Верификация

Делаем вериф вашего кошелька

Прайс: 2900.00₽

(За подробностями - @WoodyAdm)
  `, Markup.inlineKeyboard([
    Markup.button.callback('Купить за BTC', `buy:💰 Blockchain Вериф`),
    Markup.button.callback('Назад', 'Verif')
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


