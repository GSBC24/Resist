// Parent class (acts like interface)
class Payment {
  pay(amount) {
    throw new Error("A payment method must be implemented!");
  }
}

// CreditCard class
class CreditCard extends Payment {
  constructor(cardNumber, expiryDate, cvv) {
    super();
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  pay(amount) {
    console.log("Paid " + amount + " using Credit Card " + this.cardNumber);
  }
}

// PayPal class
class PayPal extends Payment {
  constructor(email, password) {
    super();
    this.email = email;
    this.password = password;
  }

  pay(amount) {
    console.log("Paid using PayPal account " + this.email);
  }
}

// ShoppingCart class (context)
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // add item to cart
  addItem(item) {
    this.items.push(item);
  }

  // calculate total price
  getTotalPrice() {
    let total = 0;

    for (let i = 0; i < this.items.length; i++) {
      total += Number(this.items[i].price);
    }

    return total;
  }

  // display items
  showItemsInCart() {
    console.log("Item(s) in cart");

    for (let i = 0; i < this.items.length; i++) {
      console.log(
        "Product: " +
          this.items[i].name +
          " price: " +
          this.items[i].price
      );
    }

    console.log(
      "Cart total value: " +
        this.getTotalPrice() +
        " item count: " +
        this.items.length
    );
  }

  // checkout using strategy
  checkout(paymentMethod) {
    const total = this.getTotalPrice();

    if (this.items.length === 0) {
      console.log("Cart is empty");
      return;
    }

    paymentMethod.pay(total);

    // clear cart after payment
    this.items = [];
  }
}

// ===== PROVIDED CODE (DO NOT CHANGE) =====

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
