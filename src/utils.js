export function wait(delay = 1500) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}
