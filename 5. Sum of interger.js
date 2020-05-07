let a = prompt(`nguoi dùng nhập vào dãy số có phẩy nhé`);
let b =  a.split((`,`));
let sum =0;
// console.log(`day người dùng vừa nhập vào là ` +b);
console.log(`day người dùng vừa nhập vào là: \n`);

console.log(b);
for(let i=0;i<b.length;i++){
    sum += Number(b[i]);
}
console.log((`the sum of them is: `+ sum));





