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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
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
// 15. Namespace
var Utils;
(function (Utils) {
    function greet(name) {
        return "Hello, ".concat(name, "!");
    }
    Utils.greet = greet;
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    Utils.toUpperCase = toUpperCase;
})(Utils || (Utils = {}));
// console.log(Utils.greet("Alice"));
// console.log(Utils.toUpperCase("hello"));
// 16. Decorators
/* Decorators is a console or debugging tool; to trigger
 the method in the #class everytime it called (start,end) */
function logger(originalMethod, _context) {
    function replacementMethod() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("start:", originalMethod.name);
        var result = originalMethod.call.apply(originalMethod, __spreadArray([this], args, false));
        console.log("end:", originalMethod.name);
        return result;
    }
    return replacementMethod;
}
var User = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _greet_decorators;
    var _printAge_decorators;
    return _a = /** @class */ (function () {
            function User(name, age) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
                this.age = age;
            }
            User.prototype.greet = function () {
                console.log("Hello, my name is ".concat(this.name, "."));
            };
            User.prototype.printAge = function () {
                console.log("I am ".concat(this.age, " years old"));
            };
            return User;
        }()),
        (function () {
            _greet_decorators = [logger];
            _printAge_decorators = [logger];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _printAge_decorators, { kind: "method", name: "printAge", static: false, private: false, access: { has: function (obj) { return "printAge" in obj; }, get: function (obj) { return obj.printAge; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var user = new User("Ron", 25);
// user.greet();
// user.printAge();
