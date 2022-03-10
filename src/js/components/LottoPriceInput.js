import { Component } from "../core";

export class LottoPriceInput extends Component {

  get $priceForm () {
    return this.$refs("$priceForm");
  }

  get $priceInput () {
    return this.$refs("$priceInput");
  }

  get price () {
    return this.$priceInput.value;
  }

  render() {
    return `
      <form class="mt-5" data-ref="$priceForm">
        <label class="mb-2 d-inline-block">
          구입할 금액을 입력해주세요.
        </label>
        <div class="d-flex">
          <input
            data-ref="$priceInput"
            type="number"
            class="w-100 mr-2 pl-2"
            placeholder="구입 금액"
          />
          <button type="submit" class="btn btn-cyan">확인</button>
        </div>
      </form>
    `;
  }

  mounted() {
    this.$priceForm.onsubmit = (e) => {
      e.preventDefault();
      this.$props.buyLottos(Number(this.price));
    }
  }
}
