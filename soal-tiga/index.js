const isBracketBalance = (brackets) => {
  bracketsArr = brackets.split('').filter(item => item.trim() !== '');
  if ((bracketsArr.length % 2)  !== 0) return 'NO';

  let index = 0;

  for (const item of bracketsArr) {
    if (item === '{'  ) {
      if ((bracketsArr[index + 1] === ')') || (bracketsArr[index + 1] === ']')) return 'NO';
    }
    if (item === '['  ) {
      if ((bracketsArr[index + 1] === '}') || (bracketsArr[index + 1] === ')')) return 'NO';
    }
    if (item === '('  ) {
      if ((bracketsArr[index + 1] === ']') || (bracketsArr[index + 1] === '}')) return 'NO';
    }
    index ++;
  }

  return 'YES';
}

const result = isBracketBalance('{ ( ( [ ] ) [ ] ) [ ] }');
console.log(result);
