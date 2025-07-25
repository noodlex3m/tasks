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
