//Leap Year

let year: number = 2024;

//BMS -> 400-100-4

if (year % 400==0) {
  console.log("LeapYear");
} else if (year % 100==0) {
  console.log("Not LeapYear");
} else if (year % 4==0) {
  console.log(" LeapYear");
} else {
  console.log(" Not LeapYear");
}
