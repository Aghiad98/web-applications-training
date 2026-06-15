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





//////////////////////////////////////
// XHR GET Request
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
  function getUserFetch(userId){

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {

            if(!response.ok){
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return response.json();

        })
        .then(user => {

            console.log('Fetch Success:', user);

        })
        .catch(error => {

            console.log('Network Error:', error);

        });

}

getUserFetch(1);

// /////////////
async function getUserAsync(userId){

    try{

        const response =
            await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );

        if(!response.ok){

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }

        const user = await response.json();

        console.log('Fetch Success:', user);

    }
    catch(error){

        console.log('Network Error:', error);

    }

}

getUserAsync(1);