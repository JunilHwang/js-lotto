import { LottoNumber } from "../domain/index.js";

export class InvalidLottoNumberException extends Error {
  constructor() {
    super(`로또 번호는 ${LottoNumber.MIN} ~ ${LottoNumber.MAX} 사이의 숫자여야 합니다.`);
  }
}