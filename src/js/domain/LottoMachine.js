import { LottoNumber } from "./LottoNumber.js";
import { Lotto } from "./Lotto";

export class LottoMachine {

  constructor() {
    throw new Error("LottoMachine을 만들 수 없습니다.")
  }

  static pick () {
    return Lotto.of(
      Array(LottoNumber.MAX)
        .fill(LottoNumber.MIN)
        .map((v, k) => LottoNumber.valueOf(v + k))
        .sort(() => Math.random() - 0.5)
        .slice(Lotto.SIZE)
    );
  }

}