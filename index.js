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
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } 
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}.`;
  }
    var r = `In your cart, you have`;
    for (var i = 0; i < cart.length; i++) {
    if(i===cart.length-1) {
      r = r + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
     } else{
      r = r + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
  }
  return r;
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++);
  total += cart[i].itemPrice
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
