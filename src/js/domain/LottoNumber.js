import { InvalidLottoNumberException } from "../exceptions/index.js";

export class LottoNumber {
  static MIN = 1;
  static MAX = 45;
  static #LottoNumbers = Array(LottoNumber.MAX)
                          .fill(LottoNumber.MIN)
                          .reduce((obj, value, key) => {
                            obj[key + value] = new LottoNumber(key + value);
                            return obj;
                          }, {});

  #value;

  constructor(value) {
    if (value < LottoNumber.MIN || LottoNumber.MAX < value) {
      throw new InvalidLottoNumberException();
    }
    this.#value = value;
  }

  static valueOf(value) {
    const instance = LottoNumber.#LottoNumbers(value);
    if (!instance) {
      throw new InvalidLottoNumberException();
    }
    return instance;
  }

  get value() {
    return this.#value;
  }

}