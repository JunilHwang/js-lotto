export class InvalidLottoException extends Error {
  constructor() {
    super(`로또는 6개의 요소를 가진 Array 혹은 Set 이여야 합니다.`);
  }
}