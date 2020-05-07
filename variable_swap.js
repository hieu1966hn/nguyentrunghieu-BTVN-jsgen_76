let a = 5;
let b = 6;
//////////// dưới đây là 4 cách để swap  các giá trị a,b .
////////////// cách 1:
// [a, b] = [b, a];
// let temp;
// temp = b;
// b= a;
// a = temp;

//////////////// cách 2: 
// [a,b] = [b,a];
///////////// cách 3: 
// a = a + b;
// b = a - b;
// a = a - b;
///// cách 4:
// a  = a^b;
// b = a^b;
// a = a^b;
//////////// in ra a, b sau khi đã hoán đổi 
console.log(a + ` ` + b);
