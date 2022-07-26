const max1Berturut = (arr) => {
  let max1Sementara = 0;
  let totalMax1Berturut = 0;

  arr.forEach( (item) => {
    if (item === 1) max1Sementara += 1;

    totalMax1Berturut = totalMax1Berturut < max1Sementara ? max1Sementara : totalMax1Berturut;

    if (max1Sementara !== 0 && item === 0) max1Sementara = 0;
  });

  return totalMax1Berturut;
}

const result = max1Berturut([1,0,0,1,0,1,1]);

console.log(result);