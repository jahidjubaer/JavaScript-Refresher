// function method

// find ; -> return only one value ;
const fruits = ["banana", "apple", "pineapple", "orange", "mango"];

const orange = fruits.find((f) => f === "orange");
// findindex ;
const orangeIndex = fruits.findIndex((f) => f === "orange");
console.log(orangeIndex);
console.log(orange);

// filter ; -> one or multi value meet the condition ;
const orgMan = fruits.filter((f) => f === "orange" || f === "mango");
console.log(orgMan);

// slice ;
const sliceFruits = fruits.slice(2, 4);
console.log(sliceFruits);

// splice -> its hits difference , it will change the main array so careful;
const spliceFruits = fruits.splice(2, 4, "fruits2", "fruits3");
console.log(spliceFruits); //it will return what splice and the main array update with newly added fruits ;

console.log(fruits);
