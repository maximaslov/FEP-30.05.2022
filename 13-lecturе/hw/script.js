const calculator = new Calculator(100);

calculator.add(10); // 110
calculator.add(10); // 120
calculator.sub(20); // 100
console.log(calculator.get()); // 100

calculator.set(20); //
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get()); // 40









function Calculator(base) {
  this.base = base;

  this.add = function(num) {
    this.base += isNumber(num) ? num : 0;
  }

  this.sub = function(num) {
    this.base -= isNumber(num) ? num : 0;
  }

  this.set = function(num) {
    if (isNumber(num)) {
      this.base = num;
    }
  }

  this.get = function() {
    return this.base;
  }
}


function createCalculator(base) {
    if (!isNumber(base)) {
      base = 0;
    }
  
    return {
      add: (num) => base += isNumber(num) ? num : 0,
      sub: (num) => base -= isNumber(num) ? num : 0,
      set: (num) => {
        if (isNumber(num)) {
          base = num
        }
      },
      get: () => base,
    };
  }
  
  function isNumber(num) {
    return !isNaN(num) && num !== ''; //
  }