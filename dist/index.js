"use strict";
let slaes = 123456789;
let language = "TypeScript";
let level;
function render(id) {
  return id;
}
let numbers = [1, 2, "4"];
let tuples = [1, "haider"];
var Size;
(function (Size) {
  Size[(Size["Small"] = 9)] = "Small";
  Size[(Size["Medium"] = 10)] = "Medium";
  Size[(Size["Large"] = 11)] = "Large";
})(Size || (Size = {}));
let mySize = Size.Large;
function tax(income, year = 2022) {
  if (year < 2023) return income * 1.2;
  return income * 1.4;
}
tax(10000);
const employee = {
  id: 1,
  retire: (date) => {
    console.log(date);
  },
};
employee.name = "haider";
function kgToLbs(weight) {
  if (typeof weight === "number") return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}
let text = {
  drag() {},
  resize() {},
};
let quantity = 50;
function getCustomer(id) {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
let speed = null;
let ride = {
  speed: speed !== null && speed !== void 0 ? speed : 30,
};
class Account {
  constructor(id, owner, _balance) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }
  deposite(amount) {
    if (amount <= 0) throw new Error("Invilad");
    this._balance += amount;
  }
  get balance() {
    return this._balance;
  }
}
let account = new Account(1, "haider", 0);
account.deposite(139);
class SeatAssignment {}
let seat = new SeatAssignment();
seat.A1 = "daij";
class KeyValue {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
let pair = new KeyValue(1, "");
function Component(options) {
  return (constructor) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}
function mergeAlternately(word1, word2) {
  let a = 0;
  let b = 0;
  let merged = [];
  while (a < word1.length || b < word2.length) {
    if (a < word1.length) {
      merged.push(word1[a]);
      a += 1;
    }
    if (b < word2.length) {
      merged.push(word2[b]);
      b += 1;
    }
  }
  return merged.join("");
}
function gcdOfStrings(str1, str2) {
  for (let i = Math.min(str1.length, str2.length); i > 0; i--) {
    const subStr = str1.substring(0, i);
    if (str1.length % i === 0 && str2.length % i === 0) {
      if (
        subStr.repeat(str1.length / i) === str1 &&
        subStr.repeat(str2.length / i) === str2
      ) {
        return subStr;
      }
    }
  }
  return "";
}
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
//# sourceMappingURL=index.js.map
