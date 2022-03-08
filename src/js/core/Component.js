import { observable, observe } from "./observer.js";

export class Component {

  $el;
  #props;
  state;

  constructor($el, props = {}) {
    this.$el = $el;
    this.#props = Component.#useReadonly(props);
    this.state = observable(this.initState());
    observe(() => this.#render());
  }

  initState() {
    return {};
  }

  static #useReadonly (obj) {
    Object.entries(obj)
      .filter(([, value]) => value instanceof Object)
      .forEach(([key, value]) => {
        obj[key] = Object.freeze(value);
      })
    return Object.freeze(obj);
  }

  #render() {
    requestAnimationFrame(() => {
      this.beforeMount();
      this.$el.innerHTML = this.render();
      this.mounted();
    });
  }

  beforeMount() {}

  render() {
    throw new Error(`${this.constructor.name} class 에 render method를 정의해주세요`);
  }

  mounted() {}

  addEvent(eventType, selector, callback, options) {
    this.$el.querySelectorAll(selector).forEach($target => {
      $target.addEventListener(eventType, callback, options);
    })
  }

}