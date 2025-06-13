// Exercise 1
// difference btwn primitive and reference types

// primitive 

let a = 10;
let b = a;
b=20;
console.log(a);
// the value of a did not change

let aa= [1,2,3];
let bb = aa;
bb[1] = 19;
console.log(aa);

// here by setting the reference of bb and aa same we are can change the values of aa
// by changing the values of bb


// ---------shallow and deep copy


let original = {name: "Alice",
                address: {city: "Wonderland"}
};
 
// Shallow copy
let shallow = { ...original };

// Deep copy
let deep = JSON.parse(JSON.stringify(original));

//here above we are making deep copy 

shallow.name = "Bob"; 
console.log(shallow.name);  //name of the shallow is changed 
console.log(original.name); // but the original name is as it is

shallow.address.city = "New York"; // Affects original too!
console.log(shallow.address.city );

deep.address.city = "Delhi"; // Does NOT affect original
console.log(deep.address.city);


//shallow copy using objects

let obj1 = {a1:1, a2:2, c:{c1:3}};
let obj2 = {...obj1};
obj2.c.c1 = 9;
console.log(obj2.a1 ); 
console.log(obj1); //it did not change the top level properties 
// it just copied it 

console.log(obj1.c.c1);
// here on changing the value of nested objectin obj2 
// also made chnges in obj1.



// console.log(obj2);

// ------------passed by value and passed by reference---

function checkUser(obj){
    obj.name = "kuraria";
}

let user = {
    name : "priya",
    age : 25
}

checkUser(user);
console.log(user.name);
// idhr user object ki name value update hogai from priya to mansi
// we are changing objects property inside function by copying the reference

// ------------CONFUSION---------
// function replaceUser(userObj) {
//   userObj = { name: "New User", age: 30 };  // Reassigning the parameter
// }

// let user = {
//   name: "Original Name",
//   age: 25
// };

// replaceUser(user);
// console.log(user.name);  // 😮 Still "Original Name"

function functin(arr){
    arr = [0,0,0];
    console.log(arr);
}

let nums = [1,2,3];
functin(nums);
nums[0] = 9;
// console.log(nums);


//  EXERCISE 2
// SPREAD AND REST 

// 1) array cloning

let abc = [1,2,3];
let bc = [...abc];
console.log(bc);
// simple cloning of array is done

// 2)merfing
let ar = [1,2,3];
let br = ["a","b","c"];

let mer = [...ar, ...br];
console.log(mer);

// 3) object updating

let userr= {name:"mansi", age: 25};
let newUser = {...userr, age:30};

console.log(newUser); //this new value getsupdated.
console.log(userr);//original remains unchanged obviously

// REST--------------------


function sum(...num){
    return num.reduce((a,b) => a+b, 0);
}

// num = [1,2,3];
console.log(sum(1,2,4));
// rest operator will basically take the value in arrays format
// and then we can apply array functions on it like reduce etc

//  array destructuring

let [aaa,bd,...c] = [10, 20, 30, 40]

console.log(aaa);
console.log(bd);
console.log(c);// all the remaining values come in variale c


// promises and async 
function fetchData(){
return new Promise((res, reject) => {

    setTimeout(()=>{
        const data = {user:"alice", age:25}
        res(data);
    },2000)
});
}

fetchData().then( data => {
    console.log("data received",data);
    
})

function secFetch(){
    return new Promise((res,reject) => {
        setTimeout(()=>{
            const data = {name:"mansi"}
                res(data);
              reject("no data")

        },1000)
    })
}
secFetch().then(data =>{
    console.log("kya", data);
    
})
.catch(err =>{
    console.error("error h",err);
})

// conditional success or failure

function conditional(login, password){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(login=="admin" && password==123){
                resolve("login successful");
            }else{
                reject("failed");
            }
        },1000)
    })
}
conditional("admin",1234).then(msg=>console.log(msg))
.catch(err => console.log("erroe",err))


// chaining--------------
function doubleAsync(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof n === "number") {
        resolve(n * 2);
      } else {
        reject("Not a number");
      }
    }, 500);
  });
}

doubleAsync(5)
  .then(result => {
    console.log(result);  // 10
    return doubleAsync(result);
  })
  .then(result2 => {
    console.log(result2); // 20
  })
  .catch(err => {
    console.log("Error:", err);
  });


//   user managmnt system--------------

let users = []; // In-memory "database"

// Add a single user using spread
function addUser({ name, age }) {
  users = [...users, { name, age }];
}



// Remove a user by name
function removeUser(name) {
  users = users.filter(user => user.name !== name);
}

// Add multiple users using rest operator
function addMultipleUsers(...newUsers) {
  users = [...users, ...newUsers];
}

// App logic using Promises and then()
addUser({ name: "mansi", age: 25 });


getUsers().then((userList1) => {
  console.log("Users after adding:", userList1);

  removeUser("mansi");

  getUsers().then((userList2) => {
    console.log("After removing 'mansi':", userList2);

    addMultipleUsers(
      { name: "priya", age: 28 },
      { name: "shahswat", age: 35 },
       { name: "chiku", age: 15 },
        { name: "brownie", age: 20 }
    );

    getUsers().then((userList3) => {
      console.log("✅ After adding multiple users:", userList3);
    });
  });
});
