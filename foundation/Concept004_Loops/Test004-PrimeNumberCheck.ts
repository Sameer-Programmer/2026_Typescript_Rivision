//4. Write a program to check if a given number is a prime number using a while loop. 

let num =7;
let count = 0;

for(let i = 2; i<=num;i++ ){
    
    if(num%i===0){
        count ++;
    }
}
if(count==1){
    console.log(num+"primeNumber")
}