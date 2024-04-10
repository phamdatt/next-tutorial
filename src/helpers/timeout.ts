export function excuseTimeout(callbackFn: () => void, timeout: number = 0) {
  if (typeof callbackFn !== "function") {
    return;
  }

  if (typeof timeout !== "number" || timeout === 0) {
    timeout = Math.floor(Math.random() * 50) + 20;
  }

  setTimeout(() => {
    callbackFn();
  }, timeout);
}
