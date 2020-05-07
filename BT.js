///////////// giờ ta có bài toán sau đây 
///// hôm nay chúng ta cùng làm việc với mảng nhé mọi người. Trước hết ta giải lại 2 bài toán đã làm với buổi học hôm T2 nhé MN.
///First A)

// let A = 0;
// let n;
// do {
//     n = Number(prompt(`nhap vào giá trị của SỐ NGUYÊN CỦA n nhé mọi người ơi: `));
//     if (n <= 1) {
//         console.log(`phan tử n bạn nhập vào không khả thi. Mời người dùng nhập lại nhé: `);

//     }


// }
// while (n <= 1);
// for (let i = 2; i <= n; i++) {
//     A += 1 / ((i - 1) * i);
// }
// console.log(`kết quả A = ` + A);
// //// tiếp chúng ta làm đến phần giai thừa. Với B = 1! + 2! + 3! + ... + n!.
// let B = 0;
// ///////// trước hêt ta sẽ thử tính 3! = gì đã nhé @@ 

// let giaiThua = 1;
// let tongGiaiThua = 0;
// let temp;
// // while (n > 0) {
// //     giaiThua = giaiThua * n;
// //     n--;
// // }
// for (i = 1; i <= n; i++) {
//     temp = i;   /// khai báo 1 biến tạp để gán -> tránh mất đi giá trị i ban đầu nhé. 
//     giaiThua = 1;   ////// gán giai thửa ==1 để tránh bị cộng dồn số khi lặp 1 vòng for
//     while (temp > 0) {  /// vòng lặp tính giai thừa của 1 số 
//         giaiThua = giaiThua * temp;
//         temp--;
//     }
//     tongGiaiThua += giaiThua;
// }

// console.log(`vay B = ` + tongGiaiThua);


//////////// giờ chúng ta làm chút bài tập về mảng nhé mọi người 
/////// yêu cầu như cũ. có sẵn 1 mảng có name = todolist[toi đi làm vào 8 am]
let toDoList = [`tôi đi làm vào 8 am`, `xin chào mọi người nhé`];
//////// yêu cầu đề bài như sau nhập các từ khoá  ABCD với A: thêm 1 phần tử do người dùng nhập vào cuối mảng \n B: In ra tất cả các phần tử của màng \n C: Update 1 phần tử ở vị trí bất kì do người dùng nhập và in ra toàn bộ mảng sau khi Update \n D: xoá 1 phần tử tại vị trí mà người dùng muốn.
////// yêu cầu thêm muốn exet press `e` and another is continua.
let i, key;
do {

    let inPut = prompt(`nguoi dùng nhập vào các từ khoá A/B/C/D để thực hiện yêu cầu đề bài với \n A: thêm 1 phần tử do người dùng nhập vào cuối mảng \n B: In ra tất cả các phần tử của màng \n C: Update 1 phần tử ở vị trí bất kì do người dùng nhập và in ra toàn bộ mảng sau khi Update \n D: xoá 1 phần tử tại vị trí mà người dùng muốn.`).toLowerCase();


    if (inPut == `a`) {

        toDoList.push(prompt(`nguoi dùng nhập vào giá trị muốn thêm vào cuối mảng:`));
        console.log(`cac phần tử trong mảng sau khi thêm giá trị vào mảng là `);;

        for (i = 0; i < toDoList.length; i++) {
            console.log(toDoList[i]);

        }
    }
    else if (inPut == `b`) {
        console.log(`cac phần tử trong mảng là: `);
        for (i = 0; i < toDoList.length; i++) {
            console.log(toDoList[i]);

        }

    }
    else if (inPut == `c`) {
        toDoList.splice(Number(prompt(`nguoi dùng nhập vào  vị trí phần từ muốn update`)), 1, prompt(`nguoi dùng nhập vào nội dung muốn update:`));
        //////// code trên là code update nd mảng tại vị trí mà người dùng nhập vào.
        console.log(`mang sau khi update là :`);

        for (i = 0; i < toDoList.length; i++) {
            console.log(toDoList[i]);

        }
    }
    else if (inPut == `d`) {
        toDoList.splice(Number(prompt(`nhap vào vị trí phần tử trong mảng mà bạn muốn xoá`)), 1);
        console.log(`mang sau khi xoá phần tử là; `);
        for (i = 0; i < toDoList.length; i++) {
            console.log(toDoList[i]);

        }

    }
    else console.log(`yeu cầu bạn nhập không tồn tại.`);
    key = prompt(` người dùng có muốn tiếp tục chương trình || if U don't please ->  press E`).toLowerCase();
}
while (key !== `e`);


