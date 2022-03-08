export class LottoReward {

  static FIRST = new LottoReward(6, 2_000_000_000);
  static SECOND = new LottoReward(5, 30_000_000);
  static THREE = new LottoReward(5, 1_500_000);
  static FOUR = new LottoReward(4, 50_000);
  static FIVE = new LottoReward(3, 5_000);

  #count;
  #price;

  constructor(count, price) {
    this.#count = count;
    this.#price = price;
  }

  static match(count, hasBonus) {
    return Object.values(LottoReward)
                 .find(v => v.match(count, hasBonus))
  }

  match(count, hasBonus) {
    if (this.#count !== count) return false;
    const isSecond = this === LottoReward.SECOND;
    return hasBonus === isSecond;
  }

}