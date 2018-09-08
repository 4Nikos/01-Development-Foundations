let user1 = {
  firstName: "Coder",
  lastName: "Bill",
  fullName: function () {
    console.log(this.firstName+" "+this.lastName)
  }
}
user1.fullName()

// let user = {
//   firstName: "Coder",
//   lastName: "Bill",
//   fullName: function() {
//       return this.firstName + " " + this.lastName;
//   }
// }

// let product = {
//   cost: 1200,
//   deliveryFee: 200,
//   newPayments: function() {
//     return this.cost+this.deliveryFee*100
//   }
// }
// console.log(product.newPayments);