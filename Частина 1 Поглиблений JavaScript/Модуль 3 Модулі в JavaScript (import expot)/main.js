import { findMaxValue, APP_VERSION } from "./utils.js";
import Automobile from "./Car.js";

console.log(APP_VERSION);
console.log(findMaxValue(10, 20, 5));
const car1 = new Automobile("Toyota", "Camry", 2021);
console.log(car1);
car1.startEngine();
console.log(car1);
