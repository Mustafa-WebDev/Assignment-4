let arr = [
    42,
    true,
    "Hello, World!",
    {
        name:"John",
        age : 25,
        isStudent : false
    },
    false,
    3.14,
    "Javascript is fun!"
];

// Question 1
let allString = arr.map((elem,i)=>{
    return elem.toString()
})

console.log(allString);

// Question 2
let numberElems = arr.filter((elem,i)=>{
  return  typeof elem == "number" ? true : false
  
}) 

console.log(numberElems);

// Question 3
arr.forEach(element => {
    console.log(element);
});


// Question 4
let reduceMethod = numberElems.reduce((a,b)=>{
    // console.log(a);
    // console.log(b);
    return a + b;
},0)

console.log(reduceMethod);

// Question 5
let findMethod = arr.find((e,i)=>{
    return typeof e === "boolean"  
})

console.log(findMethod);

// Question 6
let findInd = arr.findIndex((e,i)=>{
    return typeof e === "object"  
})
console.log(findInd);

// Question 7
let isNum = arr.some((e,i)=>{
    return typeof e === "number";
})
  
console.log(isNum);
// Question 8
let isAllString = arr.every((e,i)=>{
    return typeof e === "string";
})
  
console.log(isNum); // After we applied the question 1 it becomes true.

