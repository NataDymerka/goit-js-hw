class Car {
    static getSpecs(car) {
        console.log(`
            maxSpeed: ${car.maxSpeed}, 
            speed: ${car.speed}, 
            isOn: ${car.isOn}, 
            distance: ${car.distance}, 
            price: ${car.price}`
        );
    }
    constructor(car) {
        this.speed = 0;
        this._price = car.price;
        this.maxSpeed = car.maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    set price(price) {
        this._price = price;
        return this._price;
    }
    get price() {
        return this._price;
    }
    turnOn() {
        this.isOn = true;
        return this.isOn;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value) {
        if (this.speed < this.maxSpeed && this.speed + value <= this.maxSpeed) {
            this.speed += value;
        } else {
            this.speed = this.maxSpeed;
        }
    }
    decelerate(value) {
        if (this.speed - value > 0) {
            this.speed -= value;
        } else {
            this.turnOff();
        }
    }
    drive(hours) {
        if (this.isOn) {
            this.distance = hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000