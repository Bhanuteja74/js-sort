const randomSort = function () {
  return Math.random() - 0.5;
}

const compareNum = function (a, b) {
  return a - b;
}

const sortBoo = function (a, b) {
  return true;
}//it gives same for true or false

const s = function () { return NaN }//it also not works for undifineds NaN

const sortNeg = function (a, b) {
  if (Math.abs(a) === Math.abs(b)) {
    return a - b;
  }
  return Math.abs(a) - Math.abs(b);
}

const sortStrings = function (str1, str2) {
  if (str1 < str2) {
    return 1;
  }

  if (str1 === str2) {
    return 0;
  }

  return -1;
}

const isEven = (num) => num % 2 === 0;

const sortEvensFirst = function (a, b) {
  const isAEven = isEven(a);
  const isBEven = isEven(b);

  if (isAEven && !isBEven) {
    return -1;
  }

  if (!isAEven && isBEven) {
    return 1;
  }

  return compareNum(a, b);
}


