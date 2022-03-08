export class Lottos {

  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  get value () {
    return [ ...this.#lottos ];
  }

  getRewordsBy(winningLotto) {
    return this.#lottos.map(winningLotto.getReward);
  }

}