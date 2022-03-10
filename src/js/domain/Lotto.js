import { InvalidLottoException } from "../exceptions/index.js";

export class Lotto {
  #lotto;

  static SIZE = 6;

  constructor(lotto) {
    Lotto.#validate(lotto);
    this.#lotto = new Set(
      [ ...lotto ].sort((a, b) => a.value - b.value)
    );
  }

  static of (lotto) {
    return new Lotto(lotto);
  }

  get value () {
    return [ ...this.#lotto ];
  }

  contains = value => this.value.has(value);

  static #validate (lotto) {
    if (
      typeof lotto[Symbol.iterator] !== 'function' ||
      lotto.length < Lotto.SIZE
    ) {
      throw new InvalidLottoException();
    }
  }


}