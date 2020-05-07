const arr = [3, 4, 6, -9, 10, -88, 2];
// console.log(arr.length);
console.log(typeof (arr[0]));
let inPut = Number(prompt(`nguoi dùng nhập vào giá trị tìm kiếm:`));
let c = false;
for (let i = 0; i < arr.length; i++) {
    if (inPut === arr[i]) {
        c = true;
        console.log( inPut +` is FOUND on my Array `);
        
        
        break;
    }
}

if(c == false) console.log(inPut + ` is not FOUND in my Array`);




/// hàm random 
// function randomIntFromInterval(min, max) { 
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// const a = 20;
// const b = 30;
// randomIntFromInterval(a,b);
// console.log(randomIntFromInterval);

