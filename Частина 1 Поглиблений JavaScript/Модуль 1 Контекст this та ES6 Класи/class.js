/**
 * Практичне завдання: Клас для опису автомобіля
 * Твоє завдання – створити клас Car, який буде шаблоном для створення об'єктів-автомобілів.
 * Інструкції:
 * 1. Створи новий файл, наприклад class.js.
 * 2. Оголоси клас Car.
 * 3. Створи constructor:
 *  Конструктор має приймати три параметри: brand (марка), model (модель) і year (рік випуску).
 *  Всередині конструктора присвой ці значення відповідним властивостям нового об'єкта (використовуй this.brand = brand; і т.д.)
 *  Також всередині конструктора додай нову властивість this.isEngineOn = false; (двигун за замовчуванням вимкнений).
 * 4. Додай два методи до класу:
 *  startEngine(): цей метод має виводити в консоль повідомлення "Двигун на [Марка] [Модель] запущено." і змінювати властивість this.isEngineOn на true.
 *  stopEngine(): цей метод має виводити в консоль повідомлення "Двигун на [Марка] [Модель] зупинено." і змінювати this.isEngineOn на false.
 *  Використовуй this всередині методів, щоб отримати доступ до марки та моделі.
 * 5. Створи екземпляри:
 *  Створи два об'єкти (екземпляри) цього класу: const car1 = new Car('Toyota', 'Camry', 2021); і const car2 = new Car('Honda', 'Civic', 2022);.
 * 6. Перевір роботу:
 *  Виведи в консоль якийсь з об'єктів, щоб подивитись на його структуру (console.log(car1);).
 *  Виклич для car1 метод startEngine().
 *  Виведи в консоль car1 ще раз, щоб побачити, що властивість isEngineOn змінилась.
 *  Виклич для car2 метод startEngine(), а потім stopEngine().
 */

class Car {
	constructor(brand, model, year) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.isEngineOn = false;
	}
	startEngine() {
		this.isEngineOn = true;
		console.log(`Двигун на ${this.brand} ${this.model} запущено.`);
	}
	stopEngine() {
		this.isEngineOn = false;
		console.log(`Двигун на ${this.brand} ${this.model} зупинено.`);
	}
}
const car1 = new Car("Toyota", "Camry", 2021);
const car2 = new Car("Honda", "Civic", 2022);
console.log(car1);
car1.startEngine();
console.log(car1);
car2.startEngine();
car2.stopEngine();
