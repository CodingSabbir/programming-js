
const numbers=[1,2,3,4,5,6,7,8,9];
const part=numbers.slice(2,7);
console.log(part);
console.log(numbers);



const number=[1,2,3,4,5,6,7,8,9];
const remove=number.splice(4,2);
console.log(remove);
console.log(number);


const arrNumber=[1,2,3,4,5,6,7,8,9];
const arrAdd=arrNumber.splice(4,2,55,22);
console.log(arrAdd);
console.log(arrNumber);


const arrJoin=arrNumber.join(' ');
console.log(arrJoin);

