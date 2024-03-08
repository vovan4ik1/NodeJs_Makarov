const file = require('fs');

const newString = 'Hello World\n';

file.appendFile('Laba1/playground/Task2/task2.txt' , newString, (err) => {
  
  if(err) throw err;
  console.log('String sucesfull add in file');

});
