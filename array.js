let arr = [2, 4, 5, 6]
arr.push(8)
console.log(arr);
// Array.push er maddome array er last e element add hobe

arr.pop()
console.log(arr);
// Array.pop last er element remove kore

arr.unshift(8)
console.log(arr);
// arr.unshift() mathod pothome element add kore

arr.shift()
console.log(arr);
// prothom theke Element remove kore shift

// akon jodi ami 4 remove korte chi ki korte hobe 
arr.splice(0,2)
console.log(arr);
// position 0 theke 2 mane doita element remove korte hobe
// *splice(position,remove,add)
// *splice kore fele dibe 

arr.splice(0, 0, 444)
console.log(arr);
//  *splice(positon,remove,add) .last e 444 add hoyeche

arr.slice(1,2);
console.log(arr);

let name2 = ['arifur', 'civil', 'dhaka', 'gallary']
let newArr = name2.slice(1, 3)
console.log(newArr);
//* slice(arrayIndex,arrayNumber)
// *slice kore reke dibe

arr.join('-');
console.log(newArr);

let join=['a', 'b', 'c'].join('/');
console.log(join);

let updateArr = [1,2,3,4,5]
console.log(updateArr);

let updateArr2 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(updateArr2.indexOf('b'));
// *indexOf index b koto numner index tha ber korbe

console.log(updateArr2.includes('d'));
console.log(updateArr2.includes('m'));

let inclu = ['a', 'b', 'c'].includes('c');
console.log(inclu);

//* Array.include check kore c include ace ki na


console.log([2,3, 5,6, 8].find((n) => n % 2 === 0)
);

// Array.find() function er betetor akta callback function recive kore .
// find() returns the value of the first element in an array that passes a test

console.log([2, 4, 3, 5].findIndex((n) => n % 2 !== 0));
console.log([3, 4, 8, 6].map((n) => n * 2));

console.log([1, 4, 7, 8].filter((n) => n % 2 === 0));

console.log([2, 4, 3, 7].reduce((acc, cur) => acc + cur));
console.log([2, 3, 4, 5].every((x) => x < 6));
// every() returns true if all elements in an array pass a test(provided as a function)
console.log([3, 5, 6, 8].some((n) => n > 6));
// The some() method checks if any array elements pass a test(provided as a callback function).
console.log([1, 2, 3, 4].reverse());
console.log([3, 5, 7, 8].at(-2));