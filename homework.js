// Define a list of guests
const guests = [
  "Alice",
  "Mad Hatter",
  "Queen of Hearts",
  "Cheshire Cat",
  "White Rabbit",
  "Caterpillar",
  "Dormouse",
  "March Hare",
  "Mock Turtle",
  "King of Hearts",
];

// Initialize arrays for each item for each guest
const teaCups = [];
const teaPlates = [];
const smallDesserts = [];

// Loop through each guest and add items to their respective arrays
for (let i = 0; i < guests.length; i++) {
  // Add a tea cup and tea plate for each guest
  teaCups.push("Tea Cup");
  teaPlates.push("Tea Plate");

  // Add a carrot cake for each guest
  if (i < 10) {
    smallDesserts.push("Carrot Cake");
  } else {
    console.log("They already have a dessert!");
  }
}

// Loop through each guest and print out their setup
for (let i = 0; i < guests.length; i++) {
  console.log(
    `${guests[i]} will have a ${teaCups[i]}, ${teaPlates[i]}, and a ${smallDesserts[i]} for dessert.`
  );
}
