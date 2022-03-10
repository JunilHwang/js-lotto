import { Component } from "../core";

export class LottoPriceInput extends Component {

  get $input () {
    return this.$refs("input-price");
  }

  render() {
    return `
      <form class="mt-5" data-component="LottoPriceInput">
        <label class="mb-2 d-inline-block">
          구입할 금액을 입력해주세요.
        </label>
        <div class="d-flex">
          <input
            data-ref="input-price"
            type="number"
            class="w-100 mr-2 pl-2"
            placeholder="구입 금액"
          />
          <button type="button" class="btn btn-cyan">확인</button>
        </div>
      </form>
    `;
  }

  mounted() {
    this.addEvent('click', '.btn-cyan', () => {
      alert(this.$input.value)
    })
  }
}
