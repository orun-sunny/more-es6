// const fish = {id: 58, name: 'King hilsha ', price: 9000, phone: '172222222222222222222 ', address: 'chandput ', dress: 'silver'
// };
// console.log(fish.name);

const company = {
    name: 'GP',
    CEO: { id: 1, name: 'Ajmol', food: 'icecream' },
    web: { work: 'website development', frameWork: 'react' }
};


// const work =company.web

const { work, frameWork } = company.web;
const { food } = company.CEO;
console.log(work, frameWork, food);