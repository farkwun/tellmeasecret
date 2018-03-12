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

export function range(a, b = null) {
  let ret = [];
  const min = b ? a : 0;
  const max = b || a;

  for (let i = min; i < max; i++) {
    ret.push(i);
  }

  return ret;
}

export const permuteSlightly = (val, stepsize) => {
  const step = randomInt(-1, 3) * stepsize;
  return val + step;
};
