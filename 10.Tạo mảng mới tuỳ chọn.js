let inPut = prompt(`nguoi dùng nhập vào các tên (chú ý giữa 2 tên được ngăn cách bằng dấu ",")`);
 console.log(typeof(inPut));//// string
let b = inPut.split(`,`);
let keep  = b;
console.log(b);// in ra mảng các phần tử

console.log(...b);/// in ra các phần tử  trong mảng
// console.log(b[0]);// in ra được phần tử đầu tiên
// console.log(typeof(b));// object
// console.log(typeof(b[0]));// string

let demDauPhay = 0;
for(let i=0;i<b.length;i++){
    if(demDauPhay<b.length-1)
    b[i] = `<${b[i]}>`;
    else b[i] = `<${b[i]}>`;
    demDauPhay++;
    
}
console.log(`mang sau khi gán dấu <> cho các phần tử là`);
console.log(inPut + `=> `+b);



