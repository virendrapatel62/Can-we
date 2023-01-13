Array.prototype.sum = function () {
  let sum = 0;
  for (let number of this) {
    sum += number;
  }
  return sum;
};

console.log([12, 23, 45, 5, 7, 8].sum());
console.log([1, 2, 3].sum());
console.log(["Virendra", " ", "Patel"].sum());
