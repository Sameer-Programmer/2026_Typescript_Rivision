let num: number = 153;
let lastDigit = 0;
let result = 0;

const expectedResult = num;

for (; num > 0; num = Math.floor(num / 10)) {
  lastDigit = num % 10;
  result = result + lastDigit * lastDigit * lastDigit;
}

console.log(result);

if (result === expectedResult) {
  console.log("Armstrong number");
} else {
  console.log("Not an Armstrong number");
}
