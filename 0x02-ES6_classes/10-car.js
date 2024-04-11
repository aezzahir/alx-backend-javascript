const cloneMethod = Symbol('cloneMethod');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone a car
  [cloneMethod]() {
    const { constructor, ...properties } = this;
    return new constructor(...Object.values(properties));
  }

  // Public method to call cloneCar
  cloneCar() {
    return this[cloneMethod]();
  }
}

export default Car;
