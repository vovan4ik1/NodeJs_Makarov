const os = require('os');
const fs = require('fs');


const userName = os.userInfo().username;


const Greeting = `Hello, ${userName}!\n`;


fs.appendFile('Laba1/playground/Task3/Task3.txt', Greeting, (err) => {
  if (err) throw err;
  console.log('Greeting write in file "Task3.txt"');
});