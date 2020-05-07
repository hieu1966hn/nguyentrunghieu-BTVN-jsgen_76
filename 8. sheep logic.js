let n = prompt(`nhap vào số con cừu mà bạn đang có:`);

let sheep = [n]; ///// mảng cừu gồm n con cừu con nhé.
console.log(typeof (sheep));

// nhập vào số cừu  trong mảng cho tới n.
console.log(`nhap vào cừu`);
for (let i = 0; i < n; i++) {
    sheep[i] = Number(prompt(`lông cừu ` + (i + 1) + `= `));
}
console.log(`cac size của cừu là : `);


console.log(sheep); /////// in ra các size của cừu có trong mảng 


/// khai báo biến max -> để tìm cừu max khi đến mùa thu hoạch -> thu hoạch xong cừu = size 8. 
let max = sheep[0];
let pick =0;
for (i = 0; i < n; i++) {
    if (max < sheep[i]) {
        max = sheep[i];
        pick = i;
    }
}
console.log(`pick = `+pick);

console.log(`size sheep max = ` + max);//// in ra size max nhất 
console.log(`now my sheep max size is ` + max + ` let shave it`);
console.log(`after shearing, here is my flock`);
// điều kiện để reset con cừu size max khi bị hớt tóc trở về -> 8 (size default).
if (max >= 8)
    sheep[pick] = 8;
// for(i=0;i<n;i++){
//     console.log(sheep[i]);

// }
console.log(sheep);

////////////////nhập vào số tháng mà bạn muốn nuôi cừu tới lúc dó
let month = Number(prompt(`nhap vào số tháng bạn muốn nuôi cừu (số tháng phải > =1 )`));
console.log(`nhap vào số tháng bạn muốn nuôi cừu là: ` + month);

console.log(` sau từng tháng all sheep upgrade more than 50.`);
let thang = 1; // tháng 1 == lần lặp thứ nhất.
let dem = 0;
while (month > 0) {
    dem++;
    for (i = 0; i < n; i++) {
        sheep[i] += 50;
    }
    ////////// tỉa tóc cho cừu nào 

    console.log(`after shearing month ` + thang + `, here is my flock`);
    ////// chosing sheep max...... 
    max = sheep[0];
    for (i = 0; i < n; i++) {
        if (max < sheep[i]) {
            max = sheep[i];
            pick = i;
        }
    }
console.log(`pick = `+ pick);

    if (max >= 8) { //// điều kiện để tỉa tóc cho cừu 
        sheep[pick] = 8;
    }
    console.log(`now my sheep max size is ` + max + ` let shave it`);/// in ra con cừu có size max nhất trong tháng.
    /// in ra các size cừu sau khi tỉa tóc con max size nhất 
    console.log(sheep);

    ///// bước giảm tháng để lặp 
    month--;
    thang++;
}
// console.log(sheep);
console.log(` one month has, passed, my sheeps has grown, here are sizes `);//////// khi mà cừu đã lớn 
console.log(sheep);
let sumSheep = 0
for (i = 0; i < n; i++) {
    sumSheep += sheep[i];
}
///// in ra tổng số size cừu
console.log(`i flock has size in total: ` + sumSheep);
console.log(`i would get ` + sumSheep + `*2$ = ` + sumSheep * 2);

///xoa đi ngay 
console.log(`đếm số lần lặp vòng lặp while ` + dem);





