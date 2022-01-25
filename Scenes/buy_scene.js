const {Telegraf ,Scenes: {WizardScene}, Markup} = require('telegraf');
const config = require('config');

const pay = Telegraf.on('text', async (ctx) => {
  if (ctx.update.message.text.split('?')[0] === 'https://telegram.me/BTC_CHANGE_BOT') {
    ctx.telegram.sendMessage(config.get('admin'), `
    ${ctx.message.text}
 @${ctx.session.order.buyer} купил ${ctx.session.order.item}.
    `);
    ctx.reply(`Теперь ты можешь написать @WoodyAdm в лс и забрать свой товар`, Markup.inlineKeyboard([
      Markup.button.callback('Вернуться в меню', 'menu'),
      Markup.button.url('Написать админу', 'https://t.me/WoodyAdm'),
    ]));
    ctx.scene.leave();
  } else {
    ctx.reply('Давай сюда чек, врунишка', Markup.inlineKeyboard([
      Markup.button.callback('Отменить покупку', 'menu')
    ]));
  }
});


const buyScene = new WizardScene('buyScene', pay);

buyScene.enter(ctx => ctx.editMessageText(`
Для того, что бы оплатить товар - пришлите BTC чек боту
`));

module.exports = buyScene;
