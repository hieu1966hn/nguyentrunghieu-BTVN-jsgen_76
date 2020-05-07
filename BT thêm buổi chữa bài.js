let inPut = prompt(`nhap vào 1 dãy số, mỗi số cách nhau 1 dấu phẩy`);
console.log(`day vừa nhập vào là: ` + inPut);
//1). Tính 
/*
A= Tổng các số >0 trong dãy 
B= Tổng các số <0 trong dãy
C= Tổng các số chia hết cho 3
D= Trung bình cộng của dãy 
E = Trung bình cộng của các số >0
2). Sắp xếp dãy số theo thứ tự tăng dần/ giảm dần.
3). Kiểm tra xem, dãy số đó có đối xứng hay không.
*/

let b = (inPut.split(`,`));
console.log(`cac phần tử trong mảng b là: ` + b);

// console.log(`kieu dl của b là `+ typeof(b));
let A = 0, B = 0, C = 0, D = 0, E = 0, dem = 0;
for (let i = 0; i < b.length; i++) {
    b[i] = Number(b[i]);
}
let count = 0; // biến đếm phần tử trùng nhau
for (i = 0; i < b.length; i++) {
    // for (let k = i + 1; k < b.length; k++) {
    //     if (b[k] === b[i]) {
    //         b.splice(k,1);
    //     }
    // } ///// hàm xoá phần tử trùng nhau.
    dem++;
    if (b[i] % 3 == 0) {
        C += b[i];
    }
    if (b[i] > 0) {
        A += b[i];
    }
    else B += b[i];
}

console.log(`tong cac số > 0 trong dãy là: ` + A);
console.log(`tong các số < 0 trong dãy là:` + B);
console.log(`tong các số % 3 ===0 là:` + C);
console.log(`trung bình cộng các số trong mảng là: ` + (A + B) / dem);
console.log(`trung bình cộng các >0 trong mảng là: ` + A / dem);
//// sắp xếp dãy theo thứ tự tăng dần trong mảng
let j = 0;
// let min = b[0];
for (i = 0; i < b.length - 1; i++) {
    for (j = i + 1; j < b.length; j++) {
        if (b[i] > b[j]) {
            let temp = b[i];
            b[i] = b[j];
            b[j] = temp;
        }
    }
}
console.log(`vay day tang dần là: ` + b);
/////giảm dần dãy


for (i = 0; i < b.length - 1; i++) {
    for (j = i + 1; j < b.length; j++) {
        if (b[i] < b[j]) {
            let temp = b[i];
            b[i] = b[j];
            b[j] = temp;
        }
    }
}
console.log(`vay dãy giảm dần là: ` + b);
/////////////  Bubble sort, Inserttion sort, selection sort, quick sort,merge sort.
/*
     độ phức tạp thuật toán càng cao -> sắp xếp càng lâu và ngược lại.
*/