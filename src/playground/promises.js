//the code for the promise generally gets kept in the firebase library
//the call for the promise is throughout the project

const promise = new Promise((resolve, reject) => {
    //simulate a delayed process for 1.5 seconds
    setTimeout(() => {
        //long-running async task goes here, i.e. request to a server, firebase data change, take a pic w/webcam
        //when it's done we call one of 2 functions depending on whether the task succeeded (resolve) or not (reject)
        resolve({
            name: 'Steph',
            age: '35'
        });
        reject('Error: Something went horribly wrong!')
    }, 5000)
});

console.log('before');

//now we can use the promise below
//.then is what happens when the promise is resolved and data is what comes back from resolve above
promise.then((data) => {
    console.log('1', data);
    //.catch runs when it's rejected
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((str) => {
    console.log('does this run', str);
}).catch((error) => {
    console.log('error', error);
});

console.log('after');