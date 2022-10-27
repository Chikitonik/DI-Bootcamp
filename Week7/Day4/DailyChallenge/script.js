// Using this object :

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries
// object. Use the forEach method.
const displayGroceries = (groceries) => {
  for (e of groceries.fruits) console.log(e);
};
// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the
// user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
client = "Betty";
// -------comment: yes, because it is the same variable, I just made a reference to it ------------------------
// In the function, create a variable named shopping that equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// -------comment: yes, because it is the same variable, I just made a reference to it ------------------------
groceries.totalPrice = "35$";
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// -------comment: yes, because it is the same variable, I just made a reference to it ------------------------
groceries.other.payed = false;
const cloneGroceries = () => {
  user = client;
  shopping = groceries;
  console.log(user);
  console.log(shopping);
};
// Invoke the cloneGroceries function.
cloneGroceries();
