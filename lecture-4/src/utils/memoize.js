export function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (args.length !== 1) {
      return fn(...args);
    }

    if (cache.hasOwnProperty(args)) {
      return cache[args];
    }

    const result = fn(...args);
    cache[args] = result;

    return result;
  };
}

// memoize(getAverageColorOfImage)(img) === getAverageColorOfImage(img)
