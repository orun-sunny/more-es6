// let priyoPerson = 'Koolsum Begum';
// priyoPerson = 'Momotaj Begum';
// const hubby = 'Akbar the great';

// // default parameter
// function getName(first, last = 'Chowdhury') {
//     return first + ' ' + last;
// }

// // template string
// const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName('Akbar')}. My name is ${priyoPerson}.`

// console.log(myPeople);

// // arrow function
// const getName2 = (first, last) => first + ' ' + last;
// const fiveTimes = x => x * 5;
// const bigArrowFunc = (x, y, z) => {
//     const firstPart = x + y;
//     const secondPart = y * z;
//     const thirdPart = x / z;
//     const result = (firstPart + secondPart) * thirdPart;
//     return result;
// }

// const numbers = [2, 4, 67, 54];
// const min = Math.min(...numbers)

// function getSum(a, b = 9) { return a + b; }
// console.log(getSum(2, 7));


// const y = x => x * x;
// const x = y(5);
// console.log(x);

// const name = 'Hero';
// const greetings = 'Welcome Home!' + ' ' + name;
// console.log(greetings);



// const name = 'Hero';
// const greetings = 'welcome Home !' +'' + ${name};
// console.log(greetings);


const hubby = 'omor sani';
let phone = 'iphone 15 ';
phone = 'samsung galazy s117';

const myNotes = `i am monju of ${hubby}i dont have a life laili`
console.log(myNotes);
//defult parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

//spread operator
//
//arrow function

const square = x => x * x;
console.log(square(8));


