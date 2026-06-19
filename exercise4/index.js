
// // 4- Fetch the data from the URL: https://jsonplaceholder.typicode.com/users
// // Display the results on the page using JavaScript DOM. Create cards with CSS classes. Display 3 cards per row,
// //  centered within the page. If there are 10 users, we will have 4 rows (3+3+3+1).
// // Each card should show the user's name, email, phone number, and address street. Design the CSS as you like."


// const Container= document.querySelector(".container");

//     async function getData(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/users")
//      const Data= await response.json()
 
//     return Data
//     }
//     async function showUser(){
//    const users= await getData()
//    Container.innerHTML=""
//    users.forEach(element => {
//          let div = document.createElement("div");
//          div.innerHTML=`
//          <h3>id:${element.id}</h3>
//          <h1>name:${element.name}</h1>
//          <h2>username:${element.username}</h2>
//          <h3>email:${element.email}</h3>
//          <ul>
//         <h3><li>address : </li></h3> 
//          <li>city: ${element.address.city}</li>
//          <li>geo: ${element.address.geo.lat},${element.address.geo.lng}</li>
//          <li>street: ${element.address.street}</li>
//          <li>suite: ${element.address.suite}</li>
//         <li>zipcode: ${element.address.zipcode}</li>
//          </ul>
//          <ul>
//          <h3> <li>company: </li> </h3>
//          <li>name: ${element.company.name}</li>
//          <li>catchPhrase: ${element.company.catchPhrase}</li>
//          <li>bs: ${element.company.bs}</li>
//          </ul>
//          `  
//          Container.appendChild(div)
//     })
   
// }
    
//     showUser()
