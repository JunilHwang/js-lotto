import { observable, observe } from "./observer.js";

export class Component {

  $props;
  $data;

  static #root = null;
  static #components = [];

  constructor(props = {}) {
    this.$props = Component.#useReadonly(props);
    this.$data = observable(this.data());
    this.bindData();
    Component.#components.push(this);
    this.beforeMount();
  }

  data() {
    return {};
  }

  bindData () {
    Object.keys(this.$data).forEach(key => {
      Object.defineProperty(this, key, {
        get () { return this.$data[key]; },
        set (value) { this.$data[key] = value; }
      })
    })
    Object.keys(this.$props).forEach(key => {
      Object.defineProperty(this, key, {
        get () { return this.$props[key]; },
      })
    })
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
      Component.#root.innerHTML = this.render().trim();
      Component.#components.forEach(v => v.mounted());
    });
  }

  beforeMount() {}

  render() {
    throw new Error(`${this.constructor.name} class 에 render method를 정의해주세요`);
  }

  toString() {
    return this.render();
  }

  mount (root) {
    Component.#root = root;
    observe(() => this.#render());
  }

  mounted() {}

  $refs (name) {
    const $els = [ ...Component.#root.querySelectorAll(`[data-ref="${name}"]`) ];
    if ($els.length === 0) return null;
    if ($els.length === 1) return $els[0];
    return $els;
  }

  addEvent(eventType, selector, callback, options) {
    Component.#root.querySelectorAll(selector).forEach($target => {
      $target.addEventListener(eventType, callback, options);
    })
  }
}