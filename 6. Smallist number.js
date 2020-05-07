let a = prompt(`nguoi dùng nhập vào dãy số có phẩy nhé`);
let b = 0;
b = a.split(`,`);
console.log(`day vừa nhập vào là: \n`);;
for (let i = 0; i < b.length; i++) {
    b[i] = Number(b[i]);
    console.log(b[i]);

}

let min = b[0];

for (let i = 1; i < b.length; i++) {
    if (min > b[i]) {
        min = b[i];
    }
}
console.log(`the smallest number is: ` + min);



