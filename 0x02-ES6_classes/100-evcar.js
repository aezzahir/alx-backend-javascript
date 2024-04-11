import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar method to return an instance of Car
  cloneCar() {
    const { constructor, ...properties } = this;
    const car = new Car(...Object.values(properties));
    return car;
  }
}

export default EVCar;
