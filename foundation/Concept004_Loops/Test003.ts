
let num = 123;
let lastDigit;
let reverse = 0;



for(num =123; num>0; num = Math.floor(num/10)){
     lastDigit = num%10; //3
     reverse = (reverse*10)+lastDigit;
}
console.log(reverse);


