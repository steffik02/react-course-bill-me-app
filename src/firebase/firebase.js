import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { database as default, firebase }

// // child_removed a subscriber listening for a child to be removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed fires when a child changes
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added fires when a new child is added
// //and fires once for all the children already existing
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//use one with value to set up a subscription
//see array printing once, then any time data changes, array should print again

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 150000,
//     note: 'I hate paying rent',
//     createdAt: 0
// }); 

// database.ref('expenses').push({
//     description: 'Car Payment',
//     amount: 28200,
//     note: 'I owe too much on my car',
//     createdAt: 78999302
// });

// database.ref('expenses').push({
//     description: 'Netflix',
//     amount: 1500,
//     note: 'It streams',
//     createdAt: -347839238
// });

// database.ref('notes/-LHezabC_xv_g2L8RB7T').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         aksldjkslei: {
//             title: 'First Note',
//             body: 'This is my note'
//         },
//         fjdksidfkls: {
//             title: 'Another Note',
//             body: 'This is my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note'
// }, {
//     id: '7232',
//     title: 'Another Note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

//set up new data subscription.
//print to screen Andrew is a software developer at Amazon.
//change the data and make sure it reprints

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`)
// }, (e) => {
//     console.log('error! ', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(22);
// }, 3500);

// setTimeout(() => {
//     //cancel all subscriptions
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// //request the data once; argument: event type
// //once returns a promise
// database.ref('location/city')
//     .once('value')
//     //returns a snapshot which gives access to data
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data: ', e)
//     });

// //get reference to root of DB and set
// //ref is short for reference; gives us a reference to a specific part of our database
// //ref is like a collection i.e. users, expenses, classes, comments
// //if nothing passed in, it's root of the db.
// //set can be called on a reference, it sets the value for that reference. Don't have to pass an object
// database.ref().set({
//     name: 'Stephanie Bree',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'entrepreneur',
//         company: 'Fitforia'
//     },
//     location: {
//         city: "Sunny Isles Beach",
//         country: "United States"
//     }
// }).then(() => {
//     console.log('Data is saved...!');
// }).catch((e) => {
//     console.log('Something went horribly wrong!', e)
// });

// update the database with new data
// must take an object

//change stress level to a 9, change the company to Amazon
//change city to Seattle
// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
// });

//set with no object
//set wipes out anything that came before it
// database.ref().set('This is my data');

//to UPDATE, pass an argument to ref
// database.ref('age').set(28);

// //setting nested data
// database.ref('location/city').set('Miami');

//attributes: height, weight inches, lbs as numbers
// database.ref('attributes').set({
//     height: 67,
//     weight: 145,
//     eyeColor: 'brown'
// }).then(() => {
//     console.log('Your attributes have been successfully stored in our database');
// }).catch((e) => {
//     console.log('Attribute save failed.', e)
// });

//wipe isSingle from the database.

// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle was successfully removed');
// }).catch((e) => {
//     console.log('Agh! Abort! Abort!', e);
// });

//or wipe it using set(null)
// database.ref('isSingle').set(null);