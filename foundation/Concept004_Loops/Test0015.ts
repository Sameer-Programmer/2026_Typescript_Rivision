// Perfect number

const num = 6;
let sum = 0;

for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    sum += i;
  }
}

console.log(`Sum of divisors: ${sum}`);

if (sum === num) {
  console.log("Perfect number");
} else {
  console.log("Not a perfect number");
}
