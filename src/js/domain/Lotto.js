export class Lotto {
  #lotto;

  constructor(lotto) {
    this.#lotto = new Set(lotto);
  }

  static of (lotto) {
    return new lotto(lotto);
  }


}