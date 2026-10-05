let num : number = 153;
let lastDigit;
let result = 0;

let expectedResult = num;


for(num;num>0;num=Math.floor(num/10)){

    lastDigit = num%10;

    result = result+(lastDigit*lastDigit*lastDigit);

}

console.log(result);

if(result===expectedResult){
    console.log("Palindrome");
}