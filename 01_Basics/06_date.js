// date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

console.log(myDate.getMonth());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myDate2 = new Date(2020, 2, 16)
console.log(myDate2.toDateString());

// notes:
// 1. The month is zero-indexed, which means that January is represented as 0, February as 1, March as 2, and so on. Therefore, when you create a date with new Date(2020, 2, 16), it represents March 16, 2020.

// 2. The toDateString() method converts the date to a human-readable string format, which typically includes the day of the week, month, day of the month, and year. In this case, it will output something like "Mon Mar 16 2020".

let myDate3 = new Date('2020-03-16')
console.log(myDate3.toDateString());
// note: When you create a date using a string format like new Date('2020-03-16'), it is parsed according to the ISO 8601 format (YYYY-MM-DD). This means that the date will be interpreted as March 16, 2020, regardless of the month being zero-indexed in the previous example. The toDateString() method will still output "Mon Mar 16 2020".


let myTimeStamp = Date.now()
console.log(myTimeStamp);
// note: Date.now() returns the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. This value is often referred to as a timestamp and can be used for various purposes, such as measuring time intervals or creating unique identifiers based on the current time.