let score="33abc";

console.log(typeof score);
console.log(typeof(score))//this is as a method====

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);//will give NaN(not a number);
//"33"=>33
//"33abc" =>NaN;
// true =>1; false=>0

let isloggedIn="abhi";
let boolisloggedIn= Boolean(isloggedIn);
console.log(boolisloggedIn);

// 1=>true;
// 0=>false;
// ""=false;
// "abhi"=true;

let somenumber=33;
let string=String(somenumber);
console.log(string);
console.log(typeof string);