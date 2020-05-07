

let inPut = prompt(`Hi there, welcome to shop admimn panel, what do you want ( C,R,U,D)?`).toLowerCase();
let i;
let toDoList = [`1. Jeans`, `2. T-Shirt`, `3. Socks`];
let dem = toDoList.length + 1;
// console.log(dem);

if (inPut == `c`) {
    toDoList.push(dem + `. ` + prompt(`Enter the name of the new item`));
    console.log(`The curent items are:\n`);
    for (i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i]);

    }
}
else if (inPut == `r`) {
    console.log(`The curent items are:\n`);
    for (i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i]);

    }
}
else if (inPut == `u`) {
    let phanTuUpDate = Number(prompt(`Enter the position you want to update`)) - 1;
    toDoList.splice(phanTuUpDate, 1, phanTuUpDate + 1 + `. ` + prompt(`Enter the new name`));
    alert(`done`);
    for (i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i]);

    }
}
else if (inPut == `d`) {
    let phanTuXoa = Number(prompt(`Enter the position you want to delete`)) -1 ;
    toDoList.splice(phanTuXoa,1);
    alert(`done`);
    for (i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i]);

    }
}

else alert(`This command is not supported`);


