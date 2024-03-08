  const _ = require('lodash');

  const numbers = [1, 2, 3, 4, 5];

  // Піднесення кожного числа до квадрату
  const ResultMap = _.map(numbers, (num) => num * num);

  console.log(ResultMap);

  const num = [1, 2, 3, 4, 5];

  //Фільтрація парних чисел
  const ResultFilter = _.filter(num, (num) => num % 2 === 0);

  console.log(ResultFilter);

  const users = [

    {name: 'Volodia', age: 20},
    {name: 'Igor', age: 18},
    {name: 'Oleg', age: 25}

  ];
  
  // Групування за віком
  const Users = _.groupBy(users, 'age');

  console.log(Users);

  const numb = [1, 2, 2, 3, 3, 4, 5, 5];

  // Вилучення повторюючих елементів з масиву
  const uniqueResult = _.uniq(numb);

  console.log(uniqueResult);

  const array = [1,2,3,4,5];

  //Додає новий останій елемент
  const PushResult =_.concat(array , 6);

  console.log(PushResult);