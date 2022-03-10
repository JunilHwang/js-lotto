import { Component } from "../core";

export class MyLottos extends Component {

  render() {
    const { lottos, showLottos } = this.$props;
    return `
      <section class="mt-9">
        <div class="d-flex">
          <label class="flex-auto my-0">총 ${lottos.length}개를 구매하였습니다.</label>
          <div class="flex-auto d-flex justify-end pr-1">
            <label class="switch">
              <input
                ${showLottos ? 'checked' : ''}
                data-ref="$toggle"
                type="checkbox"
                class="lotto-numbers-toggle-button"
              />
              <span class="text-base font-normal">번호보기</span>
            </label>
          </div>
        </div>
        <div class="d-flex flex-wrap ${showLottos ? 'flex-col' : ''}">
          ${lottos.value.map((lotto) => `
            <span class="mx-1 text-4xl">
              <span class="lotto-icon">🎟</span>
              ${showLottos ? `
              <span class="lotto-numbers">
                ${lotto.value.map(v => v.value).join(', ')}
              </span>` : ''}
            </span>
          `).join("")}
        </div>
      </section>
    `;
  }

  mounted() {
    this.$refs("$toggle").addEventListener('change', this.$props.toggle);
  }
}