///////////////////////////////////////////
// Simulating API calls with callbacks
// function getUser(userId, callback) {
// setTimeout(() => {
// console.log('1. Got user');
// callback({ id: userId, name: 'John' });
// }, 1000);
// }
// function getOrders(user, callback) {
// setTimeout(() => {
// console.log('2. Got orders for', user.name);
// callback(['Order1', 'Order2']);
// }, 1000);
// }
// function getOrderDetails(order, callback) {
// setTimeout(() => {
// console.log('3. Got details for', order);
// callback({ order: order, total: 100 });
// }, 1000);
// }
// function processPayment(details, callback) {
// setTimeout(() => {
// console.log('4. Payment processed for', details.order);
// callback({ success: true, amount: details.total });
// }, 1000);
// }
// // CALLBACK HELL - Nested pyramid
// getUser(1, (user) => {
// getOrders(user, (orders) => {
// getOrderDetails(orders[0], (details) => {
// processPayment(details, (result) => {
// console.log('Final result:', result);
// console.log('Done!');
// });
// });
// });
// });
// OUTPUT after 4 seconds:
// 1. Got user
// 2. Got orders for John
// 3. Got details for Order1
// 4. Payment processed for Order1
// Final result: { success: true, amount: 100 }
// Done!
//////////////////////////////////////////////////////////
// function getUser(userId){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('1. Got user');
//             resolve({
//                  id: userId
//                 , name: 'John' 
//             });
      
//     },1000)
// }
// )}
// function getOrders(user) {

//     return new Promise((resolve) => {

//         setTimeout(() => {

//             console.log('2. Got orders for', user.name);

//             resolve(['Order1', 'Order2']);

//         }, 1000);

//     });

// }
// function getOrderDetails(order) {

//     return new Promise((resolve)=>{

//         setTimeout(() => {

//        console.log('3. Got details for', order);

//      resolve({ order: order, total: 100 });

// }, 1000);

// });
// }
// function processPayment(details) {

//     return new Promise((resolve)=>{

//       setTimeout(() => {

//     console.log('4. Payment processed for', details.order);

//     resolve({ success: true, amount: details.total });

// }, 1000);
// });
// };

// getUser(1)
//     .then(getOrders)
//     .then(orders => getOrderDetails(orders[0]))
//     .then(processPayment)
//     .then(result => {
//         console.log('Final result:', result);
//         console.log('Done!');
//     })
//     .catch(error => {
//         console.log(error);
//     });





///////////////////////////////////////////             
///////////////////////////////////////////////////////////             
////////////////////////////////////////////////////////////////////             
// 2- XHR GET Request
// function getUserXHR(userId) {
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`, true);
// xhr.onload = function() {
// if (xhr.status === 200) {
// const user = JSON.parse(xhr.responseText);
// console.log('XHR Success:', user);
// } else {
// console.log('XHR Error:', xhr.status);
// }
// };
// xhr.onerror = function() {
// console.log('Network Error!');
// };
// xhr.send();
// }
// getUserXHR(1);



//////////////////
// XHR GET Request
//   function getUserFetch(userId){

//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => {

//             if(!response.ok){
//                 throw new Error(`HTTP Error: ${response.status}`);
//             }

//             return response.json();

//         })
//         .then(user => {

//             console.log('Fetch Success:', user);

//         })
//         .catch(error => {

//             console.log('Network Error:', error);

//         });

// }

// getUserFetch(1);

// /////////////
// async function getUserAsync(userId){

//     try{

//         const response =
//             await fetch(
//                 `https://jsonplaceholder.typicode.com/users/${userId}`
//             );

//         if(!response.ok){

//             throw new Error(
//                 `HTTP Error: ${response.status}`
//             );

//         }

//         const user = await response.json();

//         console.log('Fetch Success:', user);

//     }
//     catch(error){

//         console.log('Network Error:', error);

//     }

// }

// getUserAsync(1);


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 
// 3- Create a Fetch API POST request to the endpoint 'https://jsonplaceholder.typicode.com/posts'.
//  The function should accept an object as an argument containing the data to be posted. 
// Validate the input data before sending. Display the response message 'Created new post' upon success.
// Use the XHR code as a reference for additional details.":
// XHR POST Request

// function createPostXHR() {
// const xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// const newPost = {
// title: 'My Post',
// body: 'This is the content',
// userId: 1
// };
// xhr.onload = function() {
// if (xhr.status === 201) {
// const response = JSON.parse(xhr.responseText);
// console.log('XHR Created:', response);
// } else {
// console.log('XHR Error:', xhr.status);
// }
// };
// xhr.send(JSON.stringify(newPost));
// }
// createPostXHR();


////////////////////////////////////////////

// async function createPostResponse(){
//     try{
//     const url ='https://jsonplaceholder.typicode.com/posts';
    
//     const newPost = {
//     title: 'My Post',
//     body: 'This is the content',
//     userId: 1
//         };

//     if(
//     !newPost.title ||
//     !newPost.body ||
//     !newPost.userId
// ){
//     console.log("Invalid Data");
//     return;
// }
//         const response =await fetch(url,{
//             method:"POST",
//             body:JSON.stringify(newPost),
//             headers : {'Content-Type': 'application/json'}
//         })
      
//          if(!response.ok){

//             throw new Error(
//                 `HTTP Error: ${response.status}`
//             );
//         }else{
            
//             const res=await response.json()
//             console.log('XHR Created:', res);
//         }
//     }catch(error){
//         console.log( 'XHR Error:', error.message);
//     }
// }
// createPostResponse()


///////////////////////////////////////////////
// function createPost() {
//     const newPost = {
//     title: 'My Post',
//     body: 'This is the content',
//     userId: 1
//         };
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:"POST",
//     body:JSON.stringify(newPost),
//     headers:{'Content-Type': 'application/json'}
// }).then((response)=>{
//       if(!response.ok){
//                 throw new Error(`HTTP Error: ${response.status}`);
//             }
//             return response.json();
//         }).then(data => {

//     console.log("Created new post :",data);

// })
//         .catch(error => {
//     console.log(error.message);
// })
// }
// createPost();

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 5- Give an example of Promise.all that returns data. Don't forget to use .catch() and .finally() .
// output:
// • First promise: success
// • Second promise: success after 5 seconds
// • Third promise: success

const First = Promise.resolve("First promise: success");

const Second = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second promise: success after 5 seconds");
    }, 5000);
});

const Third = Promise.resolve("Third promise: success");

Promise.all([First, Second, Third])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(`Rejected: ${error}`);
    })
    .finally(() => {
        console.log("Promise is completed");
    });