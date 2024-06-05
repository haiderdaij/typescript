// Build and run command line::
// tsc ./src/index.ts && node ./src/index.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Number && String && Boolean
var slaes = 123456789;
var language = "TypeScript";
var hasAccess = true;
// 2. Any
var level;
// 3. Array
var numbers = [1, 2, "4"];
// 4. Tuples
var tuples = [1, "haider"];
// 5. Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 9] = "Small";
    Size[Size["Medium"] = 10] = "Medium";
    Size[Size["Large"] = 11] = "Large";
})(Size || (Size = {}));
var mySize = Size.Large;
// 6. Void
function warnUser() {
    console.log("This is my warning message");
}
// 7. Null and Undefined:
var u = undefined;
var n = null;
// 8. Never
function error(message) {
    throw new Error(message);
}
// 9. Unknown
var notSure = 4;
var human = {
    firstName: "John",
    lastName: "Doe",
    greet: function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, ".");
    },
    gender: "Male",
};
// 11.1 Classes
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getBookInformation = function () {
        return "".concat(this.title, " by ").concat(this.author, " published in ").concat(this.year);
    };
    return Book;
}());
var myBook = new Book("1984", "George Orwell", 1949);
// 11.2 Inheritance
var HumanBeing = /** @class */ (function () {
    function HumanBeing(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HumanBeing.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return HumanBeing;
}());
var HumanEmployee = /** @class */ (function (_super) {
    __extends(HumanEmployee, _super);
    function HumanEmployee(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    HumanEmployee.prototype.getEmployeeInfo = function () {
        return "".concat(this.getFullName(), " is a ").concat(this.jobTitle, ".");
    };
    return HumanEmployee;
}(HumanBeing));
var humanEmployee = new HumanEmployee("John", "Doe", "Software Developer");
// 11.3 Abstract
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var myRectangle = new Rectangle(5, 10);
var myCircle = new Circle(7);
// 11.4 Index signatures
var SeatAssignment = /** @class */ (function () {
    function SeatAssignment() {
    }
    return SeatAssignment;
}());
var seat = new SeatAssignment();
seat.A1 = "daij";
// 12. Functions
function tax(income, year) {
    if (year === void 0) { year = 2022; }
    if (year < 2023)
        return income * 1.2;
    return income * 1.4; // Undefined not a number
}
// console.log(tax(10_000, 2024));
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// console.log(sum(1, 2, 3));
// 13. Generics
function identity(arg) {
    return arg;
}
var output1 = identity("Hello, world!");
function loggingIdentity(arg) {
    return arg;
}
var pairGreet = {
    first: "Hello",
    second: 42,
};
var KeyValue = /** @class */ (function () {
    function KeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValue;
}());
var pair = new KeyValue(1, true);
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Alice", age: 25 };
var text = {
    drag: function () { },
    resize: function () { },
};
// 14.2 Union Types
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
// 14.3 Type Guards
function isString(value) {
    return typeof value === "string";
}
function printValue(value) {
    if (isString(value)) {
        console.log("String value: ".concat(value));
    }
    else {
        console.log("Number value: ".concat(value));
    }
}
// printValue("Hello");
// printValue(42);
// 14.4 Type Assertions
var someValue = "Hello, TypeScript!";
var strLength = someValue.length;
var quantity = 50;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(1);
var speed = null;
var ride = {
    // Falsy (undefined, null, "", false, 0)
    // its possible speed become zero, its called falsy value,
    // the 30 will be choosen and that is a mistake!
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
var employee = {
    id: 1,
    retire: function (date) {
        console.log(date);
    },
};
employee.name = "haider";
// Decorators
