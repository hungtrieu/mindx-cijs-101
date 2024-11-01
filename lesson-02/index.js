console.log("Lesson 02");
/*
Kiểu dữ liệu nguyên thuỷ
- String
    - Chuỗi ký tự
    - Được đặt trong dấu "" '' ` `
- Number
    - Tất cả số, không phân biệt số nguyên, thập phân
    - Hàm ép kiểu parseInt(), parseFloat()
- Boolean
    true / false
- null
    - Tồn tại, nhưng không mang giá trị
- undefined
    - Không tồn tại
- Symbol
    Ít dùng
 */

// const a = null;
// const b = undefined;
// const c = 'Hello';
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));

// const obj = {name: 'MindX', type: 'hybrid'};
// const arr = [0, 1, 2];

// const e = 10;
// const f = 10;
// console.log( e === f);

// const arr1 = [10, 20, 30];
// const arr2 = [10, 20, 30];
// console.log(arr1 === arr2);

// const obj1 = { name: "MindX" };
// const obj2 = { name: "MindX" };

// Làm thế nào để so sánh obj1 và obj2 là giống nhau?
/*
Đưa về kiểu dữ liệu nguyên thuỷ có thể so sánh được

 */
// console.log(obj1);

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let index = 0; index < numbers.length; index++) {
//     const item = numbers[index];

//     //....
//     const item2 = item;
//     if(item2 === 5) continue;
//     console.log(item2);
// }

/* 
.forEach()
    - Duyệt qua toàn bộ mảng
    - Không dừng hoặc tiếp tục được (không dùng continue, break được)
    - Cú pháp: arr.forEach( (item, index) => {
        // Callback function
        // Thực hiện thao tác với item và index
    });
*/
// console.log("Use forEach");
// numbers.forEach( (item) => {
//     console.log(item);
// });

/* 
Tác dụng của array methods
- Có sẵn để dùng
- Tăng hiệu suất lập trình
- Tăng hiệu suất bộ nhớ
*/

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// numbers.push(10);
// console.log(numbers);

// numbers.pop();
// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.unshift(20);
// console.log(numbers);

// // splice(start, deleteCount, item1, item2)

// numbers.splice(3, 0, 300, 400);
// console.log(numbers);

// numbers.splice(3, 3, 500, 501, 502);
// console.log(numbers);

// numbers.push(600, 61, 62);
// console.log(numbers);

// const addArr = [80, 90, 101, 102];
// numbers.push(...addArr);
// console.log(numbers);

// Bài 4
console.log("Bai 4");
const arr4 = [1, 2, 3, 4];

const result4 = arr4.map( (item) => {
    return item * 2;
});

console.log(result4);

/*
.map()
    - Cú pháp tương tự forEach()
    - Duyệt qua toàn bộ mảng
    - Giá trị mỗi item là kết quả return của callback function
    - Số lượng phần tử đúng bằng số lượng của mảng ban đầu
 */

// const doubleArray = arr => {
//    for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//    } 
//    return arr;
// }

console.log("Bai 5");
const arr5 = [1, 3, 7, 4, 6, 5];

const result5 = arr5.filter( (item) => {
    return item % 2 !== 0;
});

console.log(result5);

/* 
.fiter()
    - Cú pháp tương tự forEach()
    - Giá trị mỗi item là kết quả thoả mãn điều kiện của callback function
    - Số phần tử có thể giảm đi
*/

// const oddArr = arr => {
//     let retArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             retArr.push(arr[i]);
//         }
//     }

//     return retArr;
// }

// let numbers = [5, 10, 15, 20, 25];

// // Tìm số chia hết cho 10 đầu tiên và trả về phần tử đó
// let divisibleByTen = numbers.findIndex(num => num % 10 === 0);
// console.log(divisibleByTen); // Output: 10

// let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];

// // Trích xuất mảng con từ vị trí 1 đến vị trí thứ 3 (không bao gồm vị trí 3)
// // định nghĩa theo toán học: [1, 3)
// let slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits); // Output: ['Banana', 'Cherry']

// const fillFruits = fruits.fill('Dua', 2);
// console.log(fillFruits);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Tính tổng các phần tử của mảng
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     const item = numbers[i];
//     total = total + item;
// }

// console.log(total);

// const totalReduce = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 0); 

// console.log(totalReduce);

console.log("Bai 7");
const employees7 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 3500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "Peter", salary: 2800 },
];

// - Output: { id: 3, name: "Mark", salary: 3000 }
/*
1. Gán mức lương cao nhất cho nhân viên đầu tiên
2. Duyệt qua các nhân viên còn lại
2.1. Nếu như mức lương của nhân viên hiện tại > mức lương cao nhất, 
    thì gán mức lương cao nhất bằng mức lương hiện tại 
 */
let maxSalaryEmployee = employees7[0];
for (let i = 1; i < employees7.length; i++) {
    const employee = employees7[i];
    // kiểm tra
    if( employee.salary > maxSalaryEmployee.salary ) maxSalaryEmployee = employee;
}

console.log(maxSalaryEmployee);

console.log("Bai 8");
const employees8 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];

//- Output: { id: 3, name: "Mark", workingDays: 25, lateDays: 1 }
let workHardEmployee = employees8[0];
for (let i = 1; i < employees8.length; i++) {
    const employee = employees8[i];
    // kiểm tra
    if( (employee.workingDays - employee.lateDays) > (workHardEmployee.workingDays - workHardEmployee.lateDays) ) 
        workHardEmployee = employee;
}

console.log(workHardEmployee);

console.log("Bai 9");
const employees9 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];

let result9 = [];
employees9.forEach( (item) => {
    const { name } = item;
    if(result9[name]) {
        result9[name].push(item);
    } else {
        result9[name] = [item];
    }
});

console.log(result9);

// Bài 10 về nhà làm, tương tự bài 8

console.log("Bai 11");
const employees11 = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];

let result11 = [];
employees11.forEach( (item) => {
    const { workingDays } = item;
    if (result11[workingDays]) {
        result11[workingDays]++;
    } else {
        result11[workingDays] = 1;
    }
});

console.log(result11);

console.log("Bai 12");
const employees12 = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];

/* 
- Output: [
    {
        name: "John",
        email: "john@example.com",
        workInfo: { workingDays: 22, lateDays: 2 }
    },
    {
        name: "Jane",
        email: "jane@example.com",
        workInfo: { workingDays: 20, lateDays: 0 }
    },
    {
        name: "Mark",
        email: "mark@example.com",
        workInfo: { workingDays: 25, lateDays: 1 }
    }
]
 */

let result12 = [];
employees12.forEach( (item) => {
    const { name, email, workingDays, lateDays } = item;
    result12.push({
        name: name,
        email: email,
        workInfo: {
            workingDays, lateDays
            // workingDays: workingDays,
            // lateDays: lateDays
        }
    });
});

console.log(result12);

console.log("Bai 13");
let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];

// Hiển thị danh sách task đã có
// tasks.forEach( (item) => {
//     console.log(item);
// });

// 1. Viết hàm thêm mới task
function addTask(tasks, newTask) {
    tasks.push(newTask);
}

// Thử thêm mới task
addTask(tasks, {name: "Task 04", description: "Task 04", completed: false});

// Hiển thị lại danh sách
// tasks.forEach( (item) => {
//     console.log(item);
// });

// 2. Viết hàm đánh dấu hoàn thành công việc
function markCompleted(tasks, taskName) {
    tasks.forEach( (item) => {
        if(item.name === taskName) {
            item.completed = true;
        }
    });
}

// Thử hoàn thành việc "Đi mua hàng"
markCompleted(tasks, "Đi mua hàng");

// Hiển thị lại danh sách
tasks.forEach( (item) => {
    console.log(item);
});

// 3. Viết hàm sắp xếp sortTask(asc = true / false)
function sortTask(tasks, ascending = true) {
    tasks.sort( (a, b) => {
        if(ascending) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
}

// Thử sắp xếp A->Z và hiển thị lại danh sách
sortTask(tasks);
// tasks.forEach( (item) => {
console.log(tasks);
// });

// Thử sắp xếp Z->A và hiển thị lại danh sách
sortTask(tasks, false);

console.log(tasks);