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
export default Car;
