import { LottoMachine } from "./LottoMachine.js";
import { Lottos } from "./Lottos.js";

export class LottoShop {

  static PRICE = 1_000;

  static buy (totalPrice) {
    const count = Math.floor(totalPrice / LottoShop.PRICE);
    return new Lottos(
      Array.from({ length: count }).map(LottoMachine.pick)
    )
  }
}
