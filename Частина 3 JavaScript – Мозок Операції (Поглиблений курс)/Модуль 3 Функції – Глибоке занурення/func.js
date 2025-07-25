/*
Калькулятор площі прямокутника:
Напиши функцію calculateArea за допомогою Function Declaration.
Вона має приймати два параметри: width та height.
Всередині вона має перемножувати їх і повертати (return) результат.
Виклич цю функцію з аргументами (наприклад, 5 і 10) і виведи результат в консоль.
*/
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10));

/*
Перевірка на парність:
Напиши функцію isEven за допомогою Function Expression.
Вона має приймати один параметр number.
Вона має повертати true, якщо число парне, і false, якщо непарне. (Згадай про оператор %).
Виклич її кілька разів з різними числами (парним і непарним) і виведи результати.
*/
const isEven = function (number) {
  return number % 2 === 0;
};
console.log(isEven(5));
console.log(isEven(8));

/*
Привітання користувача:
Напиши функцію greetUser за допомогою Arrow Function.
Вона має приймати один параметр name.
Вона має повертати рядок привітання, наприклад: "Вітаю, Сергій!". (Використай шаблонні літерали `).
Виклич її, передавши своє ім'я, і виведи результат.
*/
const greetUser = (name) => `Вітаю, ${name}!`;
console.log(greetUser("Сергій"));

/*
Стрілкова функція "в один рядок":
Перепиши функцію для розрахунку площі прямокутника, назвавши її calculateAreaShort, але цього разу використай короткий синтаксис стрілкової функції (без {} і return).
Перевір її роботу так само, як і першу.
*/
const calculateAreaShort = (width, height) => width * height;
console.log(calculateAreaShort(10, 5));
