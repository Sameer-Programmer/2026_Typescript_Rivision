let a = 10;
let b= 20;
let gcd =1;
let lcm ;

for(let i =1; i<=10; i++){
    if(a%i==0 && b%i==0){
        gcd = i;
    }
}

console.log(gcd);
lcm =( a*b)/gcd;
console.log(lcm);

