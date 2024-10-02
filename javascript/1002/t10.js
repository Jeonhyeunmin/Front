'use strict'

let arr1 = ['문자자료',
  5,
  true,
  [2,4,6,8],
  {
    tel : '010-1234-5678',
    address : '청주',
    age : 99
  },
  function(){
    let atom = 0;
    console.log(atom + "안녕하세요");
  }
];

console.log("arr1 : ", arr1);
console.log("1. : " ,arr1[1]);
console.log("2-1. : " ,arr1[3]);
console.log("2-2. : " ,arr1[3][1]);
console.log("3. : " ,arr1[4]);
console.log("4. : " ,arr1[4].tel);
// console.log("5. : " ,arr1[5]);
arr1[5]();
console.log("===========================");

arr1.push(50);
console.log("arr1 : ", arr1);

let str1 = arr1;
console.log("1. str1 : ", str1);

let str2 = arr1.join('-');
console.log("2. str2 : ", str2);
console.log("===========================");

arr1.forEach(function(data, idx){
  console.log(idx, " : ", data);
})

arr1.forEach((data, idx) => console.log(idx, " : ", data));
console.log("===========================");

arr1.map((data, idx) => console.log(idx, " : ", data));
console.log("===========================");

arr1.filter((data, idx) => console.log(idx, " : ", data));
console.log("===========================");
arr1.filter((data, idx) => idx % 2 == 0).map((data, idx) => console.log(idx, " : ", data));
// console.clear();

let arr2 = [10, 8, 20, 15, 11, 17];
console.log("arr2 : ", arr2);

// 오름차순 정렬 : sort() - 문자값으로 정렬
let res = arr2.sort();
console.log("res : " , res);
console.log("===========================");

res = arr2.sort((a, b) => a-b);
console.log('res : ', res);

// 내림차순 정렬 
res = arr2.sort((a, b) => b-a);
console.log('res : ', res);

// 역순으로 출력 : reverse()
res = arr2.reverse();
console.log("res : ", res);
console.log("===========================");

let arr3 = [10, 8, 20, 15, 11, 17];
console.log("arr3 : ", arr3);
res = arr3.reverse();
console.log("res : ", res);

// let str3 = 'asdfasdf';
// console.log(str2.reverse());

let max = Math.max(10, 8, 20, 15, 11, 17);
console.log("max : ", max);
let min = Math.max(10, 8, 20, 15, 11, 17);
console.log("min : ", min);
console.log("===========================");

let max2 = Math.max(...arr3);
console.log("max2 : ", max2);
let min2 = Math.min(...arr3);
console.log("max2 : ", min2);
