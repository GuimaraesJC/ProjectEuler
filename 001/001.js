function sumMultiples(n) {
  const values = Array.from(Array(n).keys());

  const newArray = values.filter(value => value % 3 === 0 || value % 5 === 0);

  const sum = newArray.reduce((acc, value) => acc + value, 0);

  return sum;
}

console.log(sumMultiples(1000));