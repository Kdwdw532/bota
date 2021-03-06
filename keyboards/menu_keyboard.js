const {Markup} = require('telegraf');

const menu_keyboard = Markup.inlineKeyboard([
  Markup.button.callback('🛍 Категории', 'category'),
  Markup.button.callback('👨🏻‍🔧 Помощь', 'help'),
  Markup.button.callback('📚 О BTC чеке', 'btc'),
], {wrap: (btn, index, currentRow) => currentRow.length >= index / 1});

module.exports = {menu_keyboard};
