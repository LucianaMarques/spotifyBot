const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR BOT TOKEN';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 

    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    } 
       
  });

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome");
    
});

bot.onText(/\/sendpic/, (msg) => {

    bot.sendPhoto(msg.chat.id,"https://www.somesite.com/image.jpg" );
        
});