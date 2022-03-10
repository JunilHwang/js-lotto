export class Lottos {

  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  get value () {
    return [ ...this.#lottos ];
  }

  get length () {
    return this.value.length;
  }

  getRewordsBy(winningLotto) {
    return this.#lottos.map(winningLotto.getReward);
  }

}