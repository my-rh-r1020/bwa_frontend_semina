import store from "./store";

let currentAuth;

function listener() {
  // Get current auth
  let previousAuth = currentAuth;

  // Get state in store Redux
  currentAuth = store.getState().auth;

  // Check previous auth and current auth
  if (currentAuth !== previousAuth) localStorage.setItem("auth", JSON.stringify(currentAuth));
}

function listen() {
  // Register listener to store
  store.subscribe(listener);
}

export { listen };
