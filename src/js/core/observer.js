let currentObserver = null;


export function observe (fn) {
  currentObserver = fn;
  fn();
  currentObserver = null;
}

export function observable (obj) {
  Object.keys(obj).forEach(key => {
    let _value = obj[key];
    const observers = new Set();
    Object.defineProperty(obj, key, {
      get () {
        if (currentObserver) {
          observers.add(currentObserver);
        }
        return _value;
      },
      set (value) {
        _value = value;
        observers.forEach(fn => fn());
      },
    })
  })
  return obj;
}
