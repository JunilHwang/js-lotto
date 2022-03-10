import { Component } from "./core/index.js";
import { LottoPriceInput, MyLottos, WinningLottoForm } from "./components/index.js";
import { LottoShop } from "./domain/index.js" ;

export class App extends Component {

  data () {
    return {
      lottos: LottoShop.buy(10000),
      currentPrice: 10000,
      showLottos: true,
    }
  }

  buyLottos = (price) => {
    this.currentPrice = price;
    this.lottos = LottoShop.buy(price);
  }

  toggle = () => {
    this.showLottos = !this.showLottos;
  }

  render() {
    const { lottos, buyLottos, currentPrice, showLottos, toggle } = this;

    return `
      <div class="p-3">
        <div class="d-flex justify-center mt-5">
          <div class="w-100">
            <h1 class="text-center">🎱 행운의 로또</h1>
            
            ${new LottoPriceInput({ buyLottos, currentPrice })}
            
            ${lottos ? `
              ${new MyLottos({ lottos, showLottos, toggle })}
              ${new WinningLottoForm()}
            ` : ''}
          </div>
        </div>
  
        <div class="modal">
          <div class="modal-inner p-10">
            <div class="modal-close">
              <svg viewbox="0 0 40 40">
                <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </div>
  
            <h2 class="text-center">🏆 당첨 통계 🏆</h2>
            <div class="d-flex justify-center">
              <table class="result-table border-collapse border border-black">
                <thead>
                  <tr class="text-center">
                    <th class="p-3">일치 갯수</th>
                    <th class="p-3">당첨금</th>
                    <th class="p-3">당첨 갯수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center">
                    <td class="p-3">3개</td>
                    <td class="p-3">5,000</td>
                    <td class="p-3">n개</td>
                  </tr>
                  <tr class="text-center">
                    <td class="p-3">4개</td>
                    <td class="p-3">50,000</td>
                    <td class="p-3">n개</td>
                  </tr>
                  <tr class="text-center">
                    <td class="p-3">5개</td>
                    <td class="p-3">1,500,000</td>
                    <td class="p-3">n개</td>
                  </tr>
                  <tr class="text-center">
                    <td class="p-3">5개 + 보너스볼</td>
                    <td class="p-3">30,000,000</td>
                    <td class="p-3">n개</td>
                  </tr>
                  <tr class="text-center">
                    <td class="p-3">6개</td>
                    <td class="p-3">2,000,000,000</td>
                    <td class="p-3">n개</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-center font-bold">당신의 총 수익률은 %입니다.</p>
            <div class="d-flex justify-center mt-5">
              <button type="button" class="btn btn-cyan">다시 시작하기</button>
            </div>
          </div>
        </div>
      </div>      
    `;
  }

  createChildren (componentName) {
    return {
      LottoPriceInput: {
        constructor: LottoPriceInput,
      }
    }[componentName];
  }

  mounted() {

    const $showResultButton = document.querySelector('.open-result-modal-button')
    const $modalClose = document.querySelector('.modal-close')
    const $modal = document.querySelector('.modal')
    const $lottoNumbersToggleButton = document.querySelector(
      '.lotto-numbers-toggle-button'
    )

    const onModalShow = () => {
      $modal.classList.add('open')
    }

    const onModalClose = () => {
      $modal.classList.remove('open')
    }

    $showResultButton?.addEventListener('click', onModalShow)
    $modalClose?.addEventListener('click', onModalClose)
  }

}
