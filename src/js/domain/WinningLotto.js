import { LottoReward } from "./LottoReward";

export class WinningLotto {
  #lotto;
  #bonus;

  constructor(lotto, bonus) {
    this.#lotto = lotto;
    this.#bonus = bonus;
  }

  getReward = (lotto) => {
    const count = lotto.filter(this.#lotto.contains).length;
    const hasBonus = Boolean(lotto.contains(this.#bonus));
    return LottoReward.match(count, hasBonus);
  }
}