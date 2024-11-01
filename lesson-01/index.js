// import calc, { squareArea, sub } from './math.js'
// import * as math_101 from './math.js';

// console.log('Welcome class CIJS-101');

/* 
function functionName(a, b) {
    // code, logic, load image...
}

Mục đích:
- Gọn code
- Tái sử dụng

2 cách sử dụng:
- Thực thi
- Trả về kết quả

f(x, y) = 2x +3y
*/

// let min = Math.min(1, 32, 9);
// console.log(min);

// function calculation_x_and_y(x, y) {
//     return 2*x + 3*y;
// }

// console.log(calc(4, 5));
// console.log(calc(7, 6));

// function greeting() {
//     console.log('Hello world');
// }

// greeting();

/* 
Arrow function
const functionName = (p1, p2) => {
    // code, logic, load image...
}

Cú pháp
- Nếu chỉ có 1 tham số
const functionName = p => {
    // code, logic, load image...
}

- Nếu như hàm chỉ trả về logic / biểu thức, có thể bỏ {}
const functionName = (x, y) => logic;

*/

// const calc = (x, y) => {
//     return x + y;
// }

// console.log(math_101.calc(4, 5));

// const squareArea = r => {
//     return 3.14 * r;
// }

// console.log(math_101.squareArea(5));

// console.log(math_101.sub(8, 3));

// const calc = (x, y) =>  x + y;

// console.log(calc(4, 3));

/*
Điểm khác biệt normal function & arrow function
- this
    - normal function: đại diện cho đối tượng gọi function
    - arrow function: onwer / enviroment chứa arrow function
- hoisting ("nâng hạ")
    - arrow function: khai báo trước, dùng sau
    - normal function: như nào cũng được


*/

// let hello = () => {
//     document.getElementById('demo').innerHTML += this;
// }

// window.addEventListener('load', hello);

// document.getElementById('btn').addEventListener('click', hello);

/*
Template literals - Mẫu chuỗi / mẫu chữ
Cú pháp ` ` 
Mục đích: định dạng một chuỗi có kèm tham số / biến
*/

// const class_name = 'CIJS-101';
// const start_date = '28-10-2024';

// // Yêu cầu: in ra câu "Welcome CIJS-101 class, start in 28-10-2024"
// console.log('Welcome ' + class_name + ' class, \n start in ' + start_date + ' ');

// console.log(`Welcome ${class_name} class,
// start in ${start_date}`);

/*
Spread Operator - Mở rộng, "trải phẳng"
Cú pháp: ...
*/

// const arr = [1, 2, 3, 99, 2033, 87, 44];

// console.log(...arr);

// console.log(Math.max(...arr));

// const newArr = [...arr, 22, 33];

// console.log(newArr);

// const mergedArr = [...arr, 0, 299, ...newArr];

// console.log(mergedArr);
// let arrName = ["Hung", "Dat"];
// const flatName = ...arrName;

// const mindx_class = { name: 'CIJS-101', teacher: ...arrName, studentNo: 27};
// console.log(mindx_class);

// const open_class = {...mindx_class, location: "HN", start: "28-10-2024"};

// console.log(open_class);

/*
Rest Operator - Phần còn lại
Cú pháp: ...
*/
// Tính tổng giờ làm việc của nhân viên [7, 4, 6, 8]

// function sum(h, j, ...args ) {
//     let total = h*1.5 + j;
//     console.log(total);

//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//         total += args[i];
//     }
//     return total;
// }

// console.log(sum(24, 4, 6, 8, 10, 20, 30));

// const person = {name: "MindX", age: 7}
// const {name, age} = person;

// console.log(name, age);

// const coordinate = [0, 1, 1];
// const [x, y, z] = coordinate;

// console.log(x,y,z);

// Bài 1
console.log("Bai 1");
const square = a => a * a;

console.log(square(4));

// Bài 2
console.log("Bai 2");
const str = "Hello world";
const keyword = "world";

const keywordExist = (str, keyword) => str.indexOf(keyword) > -1 ? true : false;

console.log(keywordExist(str, keyword));

/*
Bài 3
- Input: Mảng chuỗi: ["one", "two", "three"], Tiền tố: "number: "
- Output: function(["one", "two", "three"], ’number’) 
            -> ["number: one", "number: two", "number: three"]

*/
console.log("Bai 3");
const arr3 = ["one", "two", "three"];
console.log(arr3);
const prefix = "number: ";

const addPrefix = (arr, prefix) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `${prefix} ${arr[i]}`;
    }
    return arr;
}

console.log(addPrefix(arr3, prefix));

// Bài 4
console.log("Bai 4");
const arr4 = [3, 6, 9, 12];

const doubleArray = arr => {
   for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
   } 
   return arr;
}

console.log(doubleArray(arr4));

// Bài 5
console.log("Bai 5");
const arr5 = [1, 3, 7, 4, 6, 5];

const oddArr = arr => {
    let retArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            retArr.push(arr[i]);
        }
    }

    return retArr;
}

console.log(oddArr(arr5));

// Bài 6
console.log("Bai 6");

const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];

const totalWorkingDays = employees => {
    let total = 0;

    // for (let i = 0; i < employees.length; i++) {
    //     total += employees[i].workingDays;
    // }
    for (const employee of employees) {
        total += employee.workingDays;
    }

    return total;
}

console.log(totalWorkingDays(employees));