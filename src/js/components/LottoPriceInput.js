import { Component } from "../core";

export class LottoPriceInput extends Component {
  render() {
    return `
      <form class="mt-5" data-component="LottoPriceInput">
        <label class="mb-2 d-inline-block">
          구입할 금액을 입력해주세요.
        </label>
        <div class="d-flex">
          <input
            type="number"
            class="w-100 mr-2 pl-2"
            placeholder="구입 금액"
          />
          <button type="button" class="btn btn-cyan">확인</button>
        </div>
      </form>
    `;
  }

  beforeMount() {
    console.log('beforeMount')
  }

  mounted() {
    console.log('mounted')
  }
}
