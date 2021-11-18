function sumMultiples(n) {
  return Array.from(Array(n).keys()).filter(current => current % 3 === 0 || current % 5 === 0).reduce((acc, current) => acc + current, 0);
}

console.log(sumMultiples(1000));