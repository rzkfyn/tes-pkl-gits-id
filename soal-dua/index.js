const reverse = (arr, index = 0, result = []) => {
  let length = arr.length;

  result[index] = arr[length - index - 1];

  if ((length - index - 1) > 0) {
    reverse(arr, index + 1, result);
  }
  return result;
}

const result = reverse(['h', 'e', 'l', 'l', 'o']);
console.log(result);