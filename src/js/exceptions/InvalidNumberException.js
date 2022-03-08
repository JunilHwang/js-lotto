export class InvalidNumberException extends Error {
  constructor() {
    super("숫자가 아닙니다.");
  }
}