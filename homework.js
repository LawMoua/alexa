// Define a list of guests
const guests = {
  firstName: "Alice",
  lastName: "Liddell",
  species: "Human",

  firstName2: "Mad",
  lastName2: "Matter",
  species3: "Human",

  firstName3: "Queen",
  lastName3: "Hearts",
  species3: "Human",

  firstName4: "Cashire",
  lastName4: "Cat",
  species4: "Cat",

  firstName5: "Cater",
  lastName5: "Piller",
  species5: "Caterpillar",

  firstName6: "Dor",
  lastName6: "Mouse",
  species6: "Mouse",

  firstName7: "March",
  lastName7: "Hare",
  species7: "Human",

  firstName8: "Mock",
  lastName8: "Turtle",
  species8: "Turtle",

  firstName9: "King",
  lastName9: "Hearts",
  species9: "Human",
};

// Initialize arrays for each item for each guest
teaCups = true;
teaPlates = true;
smallDesserts = "Carrot Cake";

// Loop through each guest and add items to their respective arrays
for (let i = 0; i < guests.length; i++) {
  // Add a tea cup and tea plate for each guest
  teaCups.push("Tea Cup");
  teaPlates.push("Tea Plate");

  // Add a carrot cake for each guest
  if (smallDesserts === true) {
    console.log("They already have a dessert!");
  } else {
    guests.smallDesserts;
  }
}

// Loop through each guest and print out their setup
for (let i = 0; i < guests.length; i++) {
  console.log(
    `${guests[i]} will have a ${teaCups[i]}, ${teaPlates[i]}, and a ${smallDesserts[i]} for dessert.`
  );
}
