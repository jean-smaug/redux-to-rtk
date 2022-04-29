export function wait(delay = 2000) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, delay);
  });
}
