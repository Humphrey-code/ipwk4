// DATA COLLECTION FROM THE ORDER FORM
var pizzaSize, crust, toppings, subTotalPrice

function Order(pizzaSize, crust, toppings, subTotalPrice){

  this.size = pizzaSize;
  this.crust = crust;
  this.toppings = toppings;
  this.subTotalPrice =subTotalPrice;
}

// Order Online Button

$(document).ready(function(event){
  $("#orderNow").click(function(){
    $("#orderForm").show();
  });
});

// add to cart button


$(document).ready(function(event){
  $("#addToCart").click(function(){
    var pizzaSize = $("#pizzaSizeSelected").val();
    var crust = $("#pizzaCrustSelected").val();
    var toppings = $("#toppingSelected").val();
    var delivery = $("#deliveryOptionSelected").val();

 // validating entries

 if((pizzaSize == "0") || (crust == "0") || (toppings == "0") || delivery == "0"){
   alert("Please fill in all required fields!");
 } else {
  $("#itemsCart").show();
};

// alerting delivery option
var deliveryCost=""
if(delivery == "2"){
  var location = prompt("Where would you want your delivery done?")
  var deliveryCost = parseInt(150);
alert("Confirmed, Your order shall be delivered at" + " " +location)
} else {
  var deliveryCost = parseInt(0);
};

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
var subTotalPrice = parseInt(pizzaPrice) + parseInt(crustPrice) + parseInt(toppingPrice)
console.log(subTotalPrice)
let checkOutTotal =0;
checkOutTotal = checkOutTotal + subTotalPrice +deliveryCost;

  $("#pizSize").html($("#pizzaSizeSelected").find('option:selected').text());
  $("#pizCrust").html($("#pizzaCrustSelected").find('option:selected').text());
  $("#pizTop").html($("#toppingSelected").find('option:selected').text());
  $("#subTPrice").html(subTotalPrice);

  $('#pizzaSizeSelected').prop('selectedIndex',0);
   $('#pizzaCrustSelected').prop('selectedIndex',0);
    $('#toppingSelected').prop('selectedIndex',0);
     $('#deliveryOptionSelected').prop('selectedIndex',0);
  // Proceed to Checkout Button
  $(document).ready(function(){
    $("#checkOut").click(function(){
      console.log(("Your delivery cost is" + " KES "+deliveryCost));
         $("#deliveryCost").append("Your delivery cost is" + " KES "+deliveryCost);
        console.log("Total Amount Payable =" +checkOutTotal);
          $("#totalCost").append("Total Amount Payable = KES" +checkOutTotal);
     var client = prompt("Your name Please?");
     var Contact = prompt("For easier communcation, provide us with your contact as well");
  alert("Thank you" + " " +client+"," + " "+ "Enjoy the Meal, Prepare the Total amount billed, Delivery shall be done within 20 minutes. Be sure to give us feedback")
event.preventDefault();
   });
  });



// Add Item Button
$(document).ready(function(event){
  $("#addItem").click(function(){
    $("#addToCart").hide();

    var pizzaSize = $("#pizzaSizeSelected").val();
    var crust = $("#pizzaCrustSelected").val();
    var toppings = $("#toppingSelected").val();
    var delivery = $("#deliveryOptionSelected").val();

    if((pizzaSize == "0") || (crust == "0") || (toppings == "0") || delivery == "0"){
      alert("Please fill in all required fields!");
      return;
    }
var pname, cname, tname, subTotalPriceA
    var pname = ($("#pizzaSizeSelected").find('option:selected').text());
    var cname = ($("#pizzaCrustSelected").find('option:selected').text());
    var tname =($("#toppingSelected").find('option:selected').text());
    var subTotalPriceA = pizzaPrice + crustPrice + toppingPrice;

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

      var newOrder= new Order(pname,cname,tname,subTotalPrice);

    $("#listOfItems").append('<tr><td id ="Pizza">' + "Pizza" + '<td id="pizSize">'+ newOrder.size + '</td><td id ="pizCrust">' + newOrder.crust + '</td><td id="pizTop">' + newOrder.toppings + '</td><td id ="subTPrice">' + newOrder.subTotalPrice +'</td></tr>');


  });
});

});
});
