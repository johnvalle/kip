export function getRandomNumber(min: number, max: number) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const randomNumber = array[0] / (0xffffffff + 1);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}
