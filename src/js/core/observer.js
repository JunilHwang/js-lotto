let currentObserver = null;

function debounce (fn) {
  let currentFrameNumber = 0;
  return () => {
    cancelAnimationFrame(currentFrameNumber)
    currentFrameNumber = requestAnimationFrame(fn);
  }
}

export function observe (fn) {
  currentObserver = debounce(fn);
  currentObserver();
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
