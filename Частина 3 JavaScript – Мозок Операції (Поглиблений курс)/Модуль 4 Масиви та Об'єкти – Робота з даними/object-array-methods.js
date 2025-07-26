/**
 * 1. Створи дані:
 *  ◦ Створи масив students, який містить 3-4 об'єкти.
 *  ◦ Кожен об'єкт-студент повинен мати такі властивості: id (число), name (рядок), age (число), isProgrammer (булеве).
 * 2. Виконай маніпуляції (використовуй console.log після кожного кроку, щоб бачити результат):
 *  ◦ Перевір, чи всі студенти є програмістами? Ми цього методу не проходили, але він логічний: students.every(student => student.isProgrammer). Просто спробуй.
 *  ◦ Додай нового студента: За допомогою методу .push() додай в масив ще одного студента.
 *  ◦ Знайди студента за id: Використовуючи метод .find(), знайди студента з id, наприклад, 2.
 *  ◦ Створи масив імен: Використовуючи метод .map(), створи новий масив, який буде містити тільки імена всіх студентів.
 *  ◦ Відфільтруй повнолітніх: Використовуючи метод .filter(), створи новий масив, в якому будуть тільки студенти, старші за 18 років.
 *  ◦ Виведи інформацію про кожного: Використовуючи метод .forEach(), виведи в консоль рядок для кожного студента у форматі: "Студент [Ім'я], вік [Вік].".
 */
let students = [
  { id: 1, name: "Serhii", age: 35, isProgrammer: true },
  { id: 2, name: "Vova", age: 15, isProgrammer: false },
  { id: 3, name: "Alina", age: 20, isProgrammer: false },
  { id: 4, name: "Vetal", age: 45, isProgrammer: true },
];
console.log(students);
const anyProgrammers = students.every((student) => student.isProgrammer);
console.log(anyProgrammers);
students.push({ id: 5, name: "Lena", age: 38, isProgrammer: true });
console.log(students);
const findStudent = students.find((user) => user.id === 3);
console.log(findStudent);
const nameStudents = students.map((userName) => userName.name);
console.log(nameStudents);
const adult = students.filter((userAdult) => userAdult.age >= 18);
console.log(adult);
students.forEach((userInfo) => {
  console.log(`Студент ${userInfo.name}, вік ${userInfo.age}`);
});
