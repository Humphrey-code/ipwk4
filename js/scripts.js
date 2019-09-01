// // DATA COLLECTION FROM THE ORDER FORM
// var pizzaPrice, crustPrice, toppingPrice,
// var subTotalPrice = 0;
//
// function newOrder(pizzaSize, crust, toppings, subTotalPrice){
//   this.size = size;
//   this.crust = crust;
//   this.toppings = topping;
//   this.subTotalPrice = subTotalPrice;
// }

// proceed to checkout button

// Order Online Button

$(document).ready(function(event){
  $("#orderNow").click(function(){
    $("#orderForm").show();
  });
});

// add to cart button

$(document).ready(function(event){
  $("#addToCart").click(function(){
    $("#orderForm").hide();
    $("#itemsCart").show();
  });
});

$(document).ready(function(event){
  $("#addToCart").click(function(){
    var pizzaSize = $("#pizzaSizeSelected").val();
    var crust = $("#pizzaCrustSelected").val();
    var toppings = $("#toppingSelected").val();
    var delivery = $("#deliveryOptionSelected").val();

// Validating entries


// alert(toppings);
// alert(crust);
// alert(pizzaSize);


var pizzaPrice = "";
switch(pizzaSize){
  case "1":
  pizzaPrice = 790;
    break;
  case "2":
  pizzaPrice = 690;
    break;
  case "3":
  pizzaPrice = 300;
    break;
  default:
    console.log("No price");
}

var crustPrice = "";
switch(crust){
  case "1":
  crustPrice =100;
   break;
  case "2":
  crustPrice = 150;
   break;
  case "3":
  crustPrice = 200;
    break;
  default:
    console.log("No price");
  }

var toppingPrice = "";
switch(toppings){
  case "1":
  toppingPrice = 0;
    break;
  case "2":
  toppingPrice = 99;
    break;
  case "3":
  toppingPrice = 149;
    break;
  case "4":
  toppingPrice = 199;
    break;
  default:
    console.log("No price");
};

var deliveryPrice = "";
switch (delivery) {
  case "1":
  deliveryPrice = 0;
    break;
  case "2":
  deliveryPrice = 100;
    break;
  default:
    console.log("No price");
};

  alert(pizzaPrice)
  alert(crustPrice)
  alert(toppingPrice)
  alert(deliveryPrice)

var subTotalPrice = pizzaPrice + crustPrice + toppingPrice
var totalPrice = subTotalPrice + deliveryPrice

  alert(subTotalPrice)
  alert(totalPrice)
});
});

// pizzaSize > "0") && (crust > "0") && (delivery > "0")){
// console.log ("Please fill in all required fields!")
// }
