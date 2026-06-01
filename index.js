// 1- Given the following list of names: [moaz, yassen, lana, mazen, loay, lama].
//  Iterate through each name, and for each character in the name, 
// if the character is one of the vowels (a, i, o, u, e), convert it to uppercase.
// The final printed output should look like this: [mOAz, yAssEn, lAnA, mAzEn, lOAy, lAmA].

// let names = ["moaz", "yassen", "lana", "mazen", "loay", "lama"]
// let vowels= ['a','e','i','u','o']
// const newName= names.map((word)=> 
//     { 
//         return  word
//         .split("")
//         .map((item)=> vowels.includes(item) ? item.toUpperCase(): item )
//          .join("")
//     })
// console.log(newName)
    

//         2- I want to create 2 arrays: one for males and one for females. 
// I want to store each name inside an object, and each person should have their own ID consisting of 3 digits.
//  Create the IDs, making sure they are not repeated among all people.
// Names: [yamen, majd, hanan, rawan, yazan, moaz]
// Expected output example for men: [{name: "yamen", id: 231}, {name: "majd", id: 478}, ...]
// (Note: hanan and rawan go to females array; the rest go to males.)

        // let namesMale = ["moaz", "yassen", "mazen", "loay","mohammad"]
        // let namesFemale = ["reem" , "lana",  "lma", "Asmaa"]
        // let NewMale= namesMale.map((name)=>({id: Math.floor(Math.random()*100) ,  name }))
        // let NewNamesFemale= namesFemale.map((name)=>({id: Math.floor(Math.random()*100) ,  name }))
        // console.log(NewMale)
        // console.log(NewNamesFemale)


//       3- You are given the following array of items:
//            ["banana", "syria", "iphone 12", "orange", "blueberry", "france", "labtop", "s23", "turkey"]
//              Classify these items into three separate arrays:
//               countries
//                fruits
//              electronics
//            Then, print each array as a list, starting with the array name as a title, followed by the items numbered from

//                 const items = [
//                         { name: "Syria", type: "country" },
//                         { name: "Apple", type: "fruit" },
//                         { name: "iphone 12", type: "electronics" },
//                         { name: "France", type: "country" },
//                         { name: "Banana", type: "fruit" },
//                          { name: "labtop", type: "electronics" },
//                          { name: "Turkey", type: "country" },
//                          { name: "blueberry", type: "fruit" },
//                         { name: "s23", type: "electronics" },
// ];
//                 const countries = items.filter((country)=>  country.type==="country").map(item=>item.name).join(" , ")
//                 console.log("1. countries :" , countries)

//                 const fruits = items.filter((fruit)=>  fruit.type==="fruit").map(fruit=>fruit.name).join(" , ")
//                 console.log("2. fruits :" , fruits)


//                  const electronics = items.filter((electronic)=>  electronic.type==="electronics").map(electronic=>electronic.name).join(" , ")
//                 console.log("3. electronics :" , electronics)

//                 4- Write a mathematical equation in the following form:
//                      3x^2 + 4x + 3 = ....
//                       Where:
//               x is a number entered by the user.
//               The constants (3, 4, 3) are also numbers entered by the user.
//                The only mathematical operation is addition (no subtraction — all constants are positive or handled via signed input if needed).
//              Finally, print the output in the following format:
//              text:
//         3x^2 + 4x + 3 ====> 3(3)^2 + 4(3) + 3 = result
        // Example: If x = 2, constants are 2, 6, 1, the output would be:
        // text
//         2x^2 + 6x + 1 ====> 2(2)^2 + 6(2) + 1 = 21

                // function mathematical (a,b,c,x){
                //         return  a*x**2 + b*x + c
                // }
                // console.log( mathematical (3,4,3,3))