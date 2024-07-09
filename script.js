let name = "SaurabhGurung";
console.log(name);

var hobbies = "coding, react, node";
console.log(hobbies);

const reading = "always";
console.log(reading);



// Arrow function
const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Saurabh")); // Output: Hello, Alice!


function a(){
    if (true){
        var x = 10;
        let y = 20;
    }
    console.log(x); 
    console.log(y);
}

a(); //


const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};

console.log(student.name);  // Output: John Doe
console.log(student.age);   // Output: 20
console.log(student.grade); // Output: A


// Creating an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements in the array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Adding an element to the end of the array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Adding an element to the beginning of the array
fruits.unshift("Elderberry");
console.log(fruits); // Output: ["Elderberry", "Apple",



//for new array use map or spread operator

// if parameter value is not known use rest operator








//sir

// s = "jello";
// console.log(typeof s);
// console.log(s);

// var name = "Subash";
// console.log(name);

// let hobbies = "Coding, Nodejs, Reactjs";
// console.log(hobbies);

// const learning = "Always";
// console.log(learning);
// var a = 40;
// var b = 20;

// function test() {
//   let a = 20;
//   b = 30;

//   console.log(a);
//   console.log(b);
// }

// test();

// console.log(b);
// console.log(a);

// prabin2();
// prabin("Test");

// const prabin = (givenName) => {
//   console.log("Hello " + givenName);
//   console.log("Hello ", givenName);
// };

// function prabin2() {
//   console.log("Prabin 2 is printing");
// }

// prabin("Suaper", "Jello");

// function simpletVarAndLetExample() {
//   if (true) {
//     var x = 10;
//     let y = 20;
//   }
//   console.log(x); // Output: ?
//   console.log(y); // Output: ?
// }

// // simpletVarAndLetExample();

// let student = {
//   id: "1",
//   name: "ABC",
// };

// let arr = ["Hello", 1, "2"];

// console.log(student.name, student.id);

// console.log(arr[2]);

// console.log(typeof arr[1]);

// let newArr = arr.map((item) => {
//   console.log(item);
//   return item + " new";
// });

// console.log(newArr);

// let a = [1, 2, 3, 4];

// let b = [...a];

// console.log(b);

// a.push(5);

// console.log(b);

// let m = "Hello";

// let t = m;

// m = "test";

// console.log(t);

// function restTest(...a) {
//   console.log([...a]);
// }

// restTest(10, 20);

let test = {
    id: "Hello",
    name: "Jello",
    age: "trello",
  };
  
  let { name, age } = test;
  
  console.log(test);
  console.log(name);
  console.log(age);