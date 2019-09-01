// DATA COLLECTION FROM THE ORDER FORM
var pizzaPrice, crustPrice, toppingPrice,
var subTotalPrice = 0;

function newOrder(pizzaSize, crust, toppings, subTotalPrice){
  this.size = size;
  this.crust = crust;
  this.toppings = topping;
  this.subTotalPrice = subTotalPrice;
}

// proceed to checkout button
$(document).ready(function(event){
  $("#addToCart").click(function(){
    var pizzaSize = $("#pizzaSizeSelected").val();
    var crust = $("#pizzaCrustSelected").val();
    var toppings = $("#toppingSelected").val();

// alert(toppings);
// alert(crust);
// alert(pizzaSize);

// let subTotalPrice = pizzaPrice + crustPrice + toppingPrice
// let totalPrice = subTotalPrice + deliveryPrice

switch(pizzaSize){
  case 1:
  pizzaPrice = parseInt(300);
  console.log(pizzaPrice);
    break;
  case 2:
  pizzaPrice = parseInt(690);
  console.log(pizzaPrize);
    break;
  case 3:
  pizzaPrice = parseInt(790);
  console.log(pizzaPrice);
}
    alert(console.log(pizzaPrice));
});
});
