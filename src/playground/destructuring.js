//Object destructuring

// const person = {
//     name: 'Stephanie',
//     age: 35,
//     location: {
//         city: "Sunny Isles",
//         temperature: '88'
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temperature: temp } = person.location;

// // const name = person.name;
// // const age = person.age;
// // const city = person.location.city;
// // const temperature = person.location.city;

// console.log(`${firstName} is ${age}.`);

// if (city && temp) {
//     console.log(`Where she lives, in ${city}, it is ${temp} degrees.`);
// };

// define a new object and destructure it

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);

//Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [ , city, state = 'New York' ] = address;

// console.log(`You are in ${city}, ${state}.`)

const item = ['coffee (hot)', '$2.00', "$2.50", '$2.75'];

const [itemName, , med] = item

console.log(`A medium ${itemName} costs ${med}.`)