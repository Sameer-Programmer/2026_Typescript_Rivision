let a: string = "A";
let b : string = "Ab"

let c:string ="c";

let isUpperCase : boolean = /^[A-Z]$/.test(a);
console.log(isUpperCase);

let isUpperCase1 : boolean = /^[A-Za-z]$/.test(b);
console.log(isUpperCase1);   

let isLowerCase: boolean = /^[a-z]$/.test(c);
console.log(isLowerCase);