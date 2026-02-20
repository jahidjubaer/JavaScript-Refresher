const sum = (text, ...rest) => {
  const result = rest.reduce((sum, currentValue) => sum + currentValue, 0);
  console.log(`${text}, ${result}`);
};

sum("The sum is", 4, 3, 5);
