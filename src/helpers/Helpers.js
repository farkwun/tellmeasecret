export const randomInt = (min, max) => Math.floor(Math.random() * max) + min;

export const boundedVal = (min, max) => value => {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};
