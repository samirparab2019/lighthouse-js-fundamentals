
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function() {
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent +"%.";
    
  },
};

console.log(savingsAccount.printAccountSummary());
console.log(savingsAccount.balance);
console.log(savingsAccount["balance"]);
console.log(savingsAccount.withdraw = 50);
console.log(savingsAccount.removeMoney = 50);
console.log(savingsAccount.removeMoney = 100);



var myObj = { 
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

console.log(myObj.eat()); // method
console.log(myObj.color); // property

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function(donut) {
  donut = donut.type + " donuts cost $" + donut.cost + " each";
  console.log(donut);
});