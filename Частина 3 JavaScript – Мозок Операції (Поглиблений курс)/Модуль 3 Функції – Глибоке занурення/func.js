/*
Завдання 1: Функція-вітання (Function Declaration)
Напиши функцію з ім'ям sayHello, яка приймає один параметр name.
Функція має виводити в консоль рядок Привіт, [ім'я]!.
Виклич цю функцію кілька разів з різними іменами. 
*/
function sayHello(name) {
  console.log(`Привіт, ${name}`);
}
sayHello("Serhii");
sayHello("Alina");
sayHello("Ivan");

/*
Завдання 2: Функція для обчислення віку (Function Expression)
Напиши функцію, присвоєну константі calculateBirthYear.
Функція має приймати один параметр age.
Всередині функції, від поточного року (можеш взяти 2025) відніми вік, щоб отримати рік народження.
Функція має повертати (return) обчислений рік народження.
Виклич функцію, передавши їй свій вік, і збережи результат в змінну. Виведи цю змінну в консоль.
 */
const calculateBirthYear = function (age) {
  const currentYear = new Date().getFullYear();
  const yearBirth = currentYear - age;
  return yearBirth;
};
console.log(calculateBirthYear(35));
/*
Завдання 3: Універсальний калькулятор (Arrow Function)
Напиши стрілкову функцію, присвоєну константі universalCalc.
Функція має приймати три параметри: a, b, та operation (який буде рядком: "+", "-", "*", "/").
Всередині функції використай конструкцію switch...case для перевірки значення operation.
В залежності від операції, функція має повертати (return) результат відповідної математичної дії.
Якщо operation невідомий, функція має повертати рядок "Невідома операція".
Виклич цю функцію кілька разів з різними числами та операціями і виведи результати в консоль.
*/
const universalCalc = (a, b, operation) => {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Ділення на нуль неможливе";
      }
      return a / b;
    default:
      return "Невідома операція";
  }
};
console.log(universalCalc(5, 10, "+"));
console.log(universalCalc(10, 5, "-"));
console.log(universalCalc(15, 5, "*"));
console.log(universalCalc(0, 0, "/"));
console.log(universalCalc(8, 6, "%"));
