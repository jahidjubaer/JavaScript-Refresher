// statement function ;
function hello() {
  console.log("hello");
}
// in this function there will return nothing ; but undefine ;

// function expression ;

const hello1 = function () {
  console.log("hello from expression");
};

// named function expression ;

const hello2 = function hello() {
  console.log("hello named function expression");
};

//  arrow function
const hello3 = () => {
  console.log("hello from arrow function ");
};

// anonymous function ;

const hello4 = () => {
  return function () {
    console.log("hello");
  };
};
