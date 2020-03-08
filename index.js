class AsinAmazon {
  constructor(asin) {
    this['.asin'] = asin
      .toUpperCase()
      .split('')
    ;
  }
  static increase(asin) {
    return new AsinAmazon(asin).increase().me();
  }
  static decrease(asin) {
    return new AsinAmazon(asin).decrease().me();
  }
  increase() {
    return this._increase()
  }
  decrease() {
    return this._decrease()
  }
  /**@private*/
  _increase(i = this['.asin'].length - 1) {
    if (this['.asin'][i] === 'Z') {
      this['.asin'][i] = '0';
      return this._increase(i - 1);
    } else if (this['.asin'][i] === '9') {
      this['.asin'][i] = 'A';
    } else {
      this['.asin'][i] = String.fromCharCode(this['.asin'][i].charCodeAt(0) + 1);
    }
    return this;
  }
  /**@private*/
  _decrease(i = this['.asin'].length - 1) {
    if (this['.asin'][i] === '0') {
      this['.asin'][i] = 'Z';
      return this._decrease(i - 1);
    } else if (this['.asin'][i] === 'A') {
      this['.asin'][i] = '9';
    } else {
      this['.asin'][i] = String.fromCharCode(this['.asin'][i].charCodeAt(0) - 1);
    }
    return this;
  }
  me() {
    return this['.asin'].join('');
  }
}

module.exports = AsinAmazon