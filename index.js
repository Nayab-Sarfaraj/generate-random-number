const getNum = function (options = {}) {
  const { float = false, min = 0, max = 100 } = options;

  if (float == false) {
    if (min > max && max === 100) {
      const arr = [10, 100, 1000, 10000, 100000];
      const multiplier = Math.floor(Math.random() * arr.length);
      return Math.ceil(min + Math.random() * arr[multiplier]);
    } else if (max < min && min === 0) {
      const arr = [10, 100, 1000, 10000, 100000];
      const multiplier = Math.floor(Math.random() * arr.length);
      return Math.floor(max - Math.random() * arr[multiplier]);
    } else if (max < min) return;

    return Math.ceil(min + Math.random() * (max - min + 1));
  } else {
    if (min > max && max === 100) {
      const arr = [10, 100, 1000, 10000, 100000];
      const multiplier = Math.floor(Math.random() * arr.length);
      return min + Math.random() * arr[multiplier];
    } else if (max < min && min === 0) {
      const arr = [10, 100, 1000, 10000, 100000];
      const multiplier = Math.floor(Math.random() * arr.length);
      return max - Math.random() * arr[multiplier];
    } else if (max < min)
      throw new Error("min must be less than or equal to max");

    return min + Math.random() * (max - min);
  }
};

// console.log(getNum({ float: true }));

module.exports = getNum;
