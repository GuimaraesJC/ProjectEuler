const evens = [];

function sumEvenFibonacciNumbers(first, second) {
  const nextValue = first + second;

  if (nextValue <= 4000000) {
    if (nextValue % 2 === 0) {
      evens.push(nextValue);
    }

    sumEvenFibonacciNumbers(second, nextValue);
  }

  return evens.reduce((acc, current)=> acc + current , 2);
}

console.log(sumEvenFibonacciNumbers(1, 2));