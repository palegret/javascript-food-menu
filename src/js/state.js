export function createStore(reducer) {
  const listeners = {};
	const defaultState = {
		items: {},
		cart: (new Set()),
		cartVisible: false,
	};

  let state = Object.assign({}, defaultState);

  function on(event, cb) {
		listeners[event] = listeners[event] || [];
    listeners[event].push(cb);
  }

  function trigger(event, data = {}) {
    state = reducer(state, event, data);

    if (listeners[event])
      listeners[event].forEach(cb => cb(state));
  }

  return {
    on,
    trigger,
  };
}
