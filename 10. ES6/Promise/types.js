// const p1 = Promise.reject(0);
const p1 = Promise.resolve(3);
const p2 = 42; // // primitive
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});


// 1. Promise.race - Which promise resolves or reject first
Promise.myRace = function(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p).then(res => resolve(res), err => reject(err)) // If p is primitive, Promise.resolve(p) will return new promise that resolves to the primitive value
    }
  });
};
Promise.myRace([p1, p2, p3]);
Promise.race([p1, p2, p3]);


// 2. Promise.any - Which promise resolves first

// Promise.any is a method that returns a promise which fulfills as soon as any of the promises in the iterable fulfills. 
// If none of the promises in the iterable fulfill (i.e., if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, 
// which is a new error type that groups together individual errors.

// Here's how Promise.any works:

// Promise.any accepts an iterable of promises and returns a new promise.
// The returned promise resolves as soon as any of the input promises resolves.
// If all the input promises reject, the returned promise rejects with an AggregateError.

Promise.myAny = function(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p).then(res => resolve(res), err => reject(err));
    }
  });
};
Promise.myAny([p1, p2, p3]);
Promise.any([p1, p2, p3]);


// 3. Promise.all
// Output 1 - Returns array of all the results of all the promises when all are fulfilled
// Output 2 - Returns result of rejected promise when any of the promise is rejected

// Promise.all is a method that returns a promise which resolves when all of the promises in the iterable passed to it have resolved, or rejects if any of the promises in the iterable reject. Here’s how Promise.all works in detail:

// It takes an iterable (like an array) of promises as input.
// It returns a single promise.
// This returned promise:
// Resolves with an array of the results (in the same order as the input promises) when all input promises have resolved.
// Rejects immediately with the reason of the first promise that rejects.
// Here's an example to demonstrate Promise.all:

// javascript
// Copy code
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'first');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'second');
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, 'third');
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('Resolved with values:', values); // This will log "Resolved with values: ['first', 'second', 'third']" after all promises have resolved
//   })
//   .catch((error) => {
//     console.error('Rejected with error:', error);
//   });
// In this example:

// promise1 resolves after 500 milliseconds with the value 'first'.
// promise2 resolves after 100 milliseconds with the value 'second'.
// promise3 resolves after 200 milliseconds with the value 'third'.
// The promise returned by Promise.all will resolve after all the input promises have resolved, with an array of the results: ['first', 'second', 'third'].

// If any of the promises reject, Promise.all will reject immediately with the reason of the first rejected promise:

// javascript
// Copy code
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'first');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, 'second'); // This promise rejects
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, 'third');
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('Resolved with values:', values);
//   })
//   .catch((error) => {
//     console.error('Rejected with error:', error); // This will log "Rejected with error: second"
//   });
// In this case:

// promise2 rejects after 100 milliseconds with the reason 'second'.
// Since promise2 rejects, the promise returned by Promise.all will immediately reject with the reason 'second', and the then block will not be executed.

Promise.myAll = (promises) => {
  const result = [];
  return new Promise((resolve, reject) => {
    for (let i=0; i<promises.length; i++) {
      Promise.resolve(promises[i]).then(res => {
        result[i] = res;
        if (result.length === promises.length) {
          resolve(result);
        }
      }, err => {
        reject(err);
      })
    }
  })
};
Promise.myAll([p1, p2, p3]).then(
  (values) => {
    console.log(values);
  }, err => console.log(err)
);
Promise.all([p1, p2, p3]).then(
  (values) => {
    console.log(values);
  }, err => console.log(err)
);


// 4. Promise.allSettled()
// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
// with an array of objects that describe the outcome of each promise.

// Promise.allSettled is a method that returns a promise which resolves after all of the promises in the iterable have settled (i.e., each promise has either fulfilled or rejected). 
// The returned promise resolves with an array of objects that describe the outcome of each promise.

// Here's a breakdown of how Promise.allSettled works:

// It takes an iterable (like an array) of promises as input.
// It returns a single promise.
// This returned promise resolves when all of the input promises have settled, meaning they have either been resolved or rejected.
// The result of the returned promise is an array of objects. Each object represents the outcome of each promise and has the following properties:
// status: a string that is either "fulfilled" or "rejected".
// value: if the promise was fulfilled, this is the value with which it was fulfilled.
// reason: if the promise was rejected, this is the reason for the rejection.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);
// Expected output:
// "fulfilled"
// "rejected"