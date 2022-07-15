function Hamburger(size) {
    this.price = size.price;
    this.callories = size.callories;
  }
  
  Hamburger.prototype.getPrice = function() {
    return this.price;
  }
  
  Hamburger.prototype.getCallories = function() {
    return this.callories;
  }
  
  Hamburger.prototype.addTopping = function(topping) {
    this.price += topping.price;
    this.callories += topping.callories;
  }
  
  Hamburger.SIZE_SMALL = {
    price: 100,
    callories: 8888,
  }
  
  Hamburger.TOPPING_MAYO = {
    price: 25,
    callories: 999,
  }
  
  Hamburger.TOPPING_POTATO = {
    price: 42,
    callories: 500,
  }

  export default Hamburger;
  