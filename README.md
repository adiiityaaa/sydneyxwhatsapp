# Sydney X WhatsApp
An amazing nodejs v18 project which integrates Microsoft's SydneyGPT with WhatsApp.

# About
Turn your normal WhatsApp experience into something which you would have never experienced! Sydney X WhatsApp converts your ordinary WhatsApp number into a chatbot having various commands and AI Chatbot. Powered by Microsoft's SydneyGPT, this repository brings you ChatGPT's better version right on your WhatsApp number.

# Installation: 
1. This is not the complete code. You need to add a line of code given below when using this repository for the first time. Then, you can delete it. It is basically for the authorization to WhatsApp.
2. Install all the packages using npm install.
3. Run the code and scan the QR to Login.
4. SydneyGPT and Chatbot are now active on your WhatsApp account.

# Line of Code
const qrcode = require('qrcode-terminal');
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

# Note
This code should run only on Visual Studio Code. Third party code runners may not support this. Author should not be held responsible for any harm to Data Privacy. Suspicious usage may lead to a Ban from WhatsApp, so please use cautiously.
