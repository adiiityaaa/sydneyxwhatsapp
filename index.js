import { Client } from 'whatsapp-web.js';
import LocalAuth from "whatsapp-web.js/src/authStrategies/LocalAuth.js";
import { ai } from "./ai.js";
import qr from "qrcode-terminal"; 

const client = new Client({
    authStrategy: new LocalAuth(),
})

client.on('ready', () => {
    console.log(`• Connected to WhatsApp:\n• Name: ${client.info.pushname}\n• Number: ${client.info.wid.user}\n• Platform: ${client.info.platform}`);
});

client.on('message', async message => {
  if(message.hasMedia) { return; }
  let chat = message.getChat();
  if(chat.isGroup) { 
  if(message.body.toLowerCase().includes(`${client.info.wid.user}`)) { 
  const query = message.replace(client.info.wid.user, "");
  const result = await ai(query);
  await message.reply(`${result}`);
}} else { 
  const result = await ai(message);
  await client.sendMessage(message.from, `${result}`)
}});

client.initialize();
