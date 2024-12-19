const animals = ['cow', 'dog', 'cow', 'monkey', 'lion', 'tiger'];
animals.sort();

const sortNum = function (a, b) {
  return a - b;
}

const cmpStringLenght = function (string1, string2) {
  if (string1.length === string2.length) {
    return sortStrings(string1, string2);
  }

  if (string1.length < string2.length) {
    return 1;
  }

  return -1;
}
//['a','ac','ab','cb','ca','bac','bbc']
const compareString = function (str1, str2) {
  if (str1 < str2) {
    return 1;
  }

  if (str1 === str2) {
    return 0;
  }

  return -1;
}