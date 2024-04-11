export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('Type Error');
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Type Error');
    }
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Type Error');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
