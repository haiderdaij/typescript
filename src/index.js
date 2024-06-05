// Build and run command line::
// tsc ./src/index.ts && node ./src/index.js
var slaes = 123456789;
var language = "TypeScript";
// Any
var level;
// Array
var numbers = [1, 2, "4"];
// Tuples
var tuples = [1, "haider"];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 9] = "Small";
    Size[Size["Medium"] = 10] = "Medium";
    Size[Size["Large"] = 11] = "Large";
})(Size || (Size = {}));
var mySize = Size.Large;
// Functions
function tax(income, year) {
    if (year === void 0) { year = 2022; }
    if (year < 2023)
        return income * 1.2;
    return income * 1.4; // Undefined not a number
}
var employee = {
    id: 1,
    retire: function (date) {
        console.log(date);
    },
};
employee.name = "haider";
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray(["Haider", "Daij"]));
// Union Types
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
var text = {
    drag: function () { },
    resize: function () { },
};
var quantity = 50;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(1);
// The Nullish Coaelscing Operator
var speed = null;
var ride = {
    // Falsy (undefined, null, "", false, 0)
    // its possible speed become zero, its called falsy value,
    // the 30 will be choosen and that is a mistake!
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
// <Type Assertions>
// let phone = <HTMLInputElement>window.document.getElementById("phone");
// phone.value;
// Class
var Account = /** @class */ (function () {
    function Account(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    Account.prototype.deposite = function (amount) {
        if (amount <= 0)
            throw new Error("Invilad");
        this._balance += amount;
    };
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var account = new Account(1, "haider", 125);
// account.deposite(139);
// Index Sinatures
var SeatAssignment = /** @class */ (function () {
    function SeatAssignment() {
    }
    return SeatAssignment;
}());
var seat = new SeatAssignment();
seat.A1 = "daij";
// Generics
var KeyValue = /** @class */ (function () {
    function KeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValue;
}());
var pair = new KeyValue(1, true);
// Merge Strings Alternately
function mergeAlternately(word1, word2) {
    var a = 0;
    var b = 0;
    var merged = [];
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
// console.log(mergeAlternately("abc", "kds"));
// Decorators
