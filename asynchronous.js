async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(error);
  }
}

// if we call from another function ;

function bigData() {
  console.log("boro data");
  return getData();
}

// need to go throw with async function ;
(async function () {
  const result = await bigData();
})();
