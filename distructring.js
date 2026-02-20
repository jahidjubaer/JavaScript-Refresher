const player = {
  name: "jahid",
  age: 19,
  position: {
    batting: {
    //   battingPosition: "open",
      battingHand: "Right Hand",
    },
    bowling: "N/A",
  },
};

// distructring ;
const {
  name,
  age,
  position: { batting: {battingPosition } } = {},
} = player;
console.log(name, age, battingPosition);


