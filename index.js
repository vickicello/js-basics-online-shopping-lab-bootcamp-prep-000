var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var i = {itemName:item, itemPrice:Math.floor(Math.random() * 100)};
 cart.push(i);
 
}

function viewCart() {
  for (var i = 1; i < 100; i++) {
  console.log( "In your cart, you have " + i + " time" );
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
