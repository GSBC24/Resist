const shoppingCart = new ShoppingCart();

const item1 = { name: 'Product 1', price: '20' };
const item2 = { name: 'Product 2', price: '30' };
const item3 = { name: 'Product 3', price: '40' };
const item4 = { name: 'Product 4', price: '50' };

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);
shoppingCart.addItem(item3);
shoppingCart.addItem(item4);

shoppingCart.showItemsInCart();

const creditCard = new CreditCard('1234567890', '12/24', '123');
const payPal = new PayPal('example@email.com', 'password');
const payment = new Payment();

shoppingCart.checkout(creditCard);
shoppingCart.checkout(payPal);

shoppingCart.showItemsInCart();

payment.pay();
