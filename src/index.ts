// Build and run command line::
// tsc ./src/index.ts && node ./src/index.js

// 1. Number && String && Boolean
let slaes: number = 123_456_789;
let language: string = "TypeScript";
let hasAccess: boolean = true;

// 2. Any
let level;

// 3. Array
let numbers: (string | number)[] = [1, 2, "4"];

// 4. Tuples
let tuples: [number, string] = [1, "haider"];

// 5. Enum
enum Size {
  Small = 9,
  Medium,
  Large,
}
let mySize: Size = Size.Large;

// 6. Void
function warnUser(): void {
  console.log("This is my warning message");
}

// 7. Null and Undefined:
let u: undefined = undefined;
let n: null = null;

// 8. Never
function error(message: string): never {
  throw new Error(message);
}

// 9. Unknown
let notSure: unknown = 4;

// 10. Interfaces
interface Person {
  readonly firstName: string;
  readonly lastName: string;
  age?: number;
  greet(): string;
}

interface Human extends Person {
  gender: string;
}
let human: Human = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  },
  gender: "Male",
};

// 11.1 Classes
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getBookInformation(): string {
    return `${this.title} by ${this.author} published in ${this.year}`;
  }
}
let myBook = new Book("1984", "George Orwell", 1949);

// 11.2 Inheritance
class HumanBeing {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class HumanEmployee extends HumanBeing {
  jobTitle: string;

  constructor(firstName: string, lastName: string, jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  getEmployeeInfo(): string {
    return `${this.getFullName()} is a ${this.jobTitle}.`;
  }
}
let humanEmployee = new HumanEmployee("John", "Doe", "Software Developer");

// 11.3 Abstract
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

let myRectangle = new Rectangle(5, 10);
let myCircle = new Circle(7);

// 11.4 Index signatures
class SeatAssignment {
  [seatNumber: string]: string;
}
let seat = new SeatAssignment();
seat.A1 = "daij";

// 12. Functions
function tax(income: number, year = 2022): number {
  if (year < 2023) return income * 1.2;
  return income * 1.4; // Undefined not a number
}
// console.log(tax(10_000, 2024));

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// console.log(sum(1, 2, 3));

// 13. Generics
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("Hello, world!");

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  return arg;
}
// console.log(loggingIdentity({ length: 3 }).length);

interface Pair<T, U> {
  first: T;
  second: U;
}

let pairGreet: Pair<string, number> = {
  first: "Hello",
  second: 42,
};

class KeyValue<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new KeyValue<number, boolean>(1, true);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let person = { name: "Alice", age: 25 };
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));

// 14.1 Intersection Types
type Draggable = {
  drag: () => void;
};
type Resize = {
  resize: () => void;
};
type Widget = Draggable & Resize;

let text: Widget = {
  drag() {},
  resize() {},
};

// 14.2 Union Types
function kgToLbs(weight: string | number): number {
  if (typeof weight === "number") return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}

// 14.3 Type Guards
function isString(value: any): value is string {
  return typeof value === "string";
}
function printValue(value: number | string) {
  if (isString(value)) {
    console.log(`String value: ${value}`);
  } else {
    console.log(`Number value: ${value}`);
  }
}
// printValue("Hello");
// printValue(42);

// 14.4 Type Assertions
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// 14.5 Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// 14.6 Optional chaining "Null | Undefined"
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);

let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, "", false, 0)
  // its possible speed become zero, its called falsy value,
  // the 30 will be choosen and that is a mistake!
  speed: speed ?? 30,
};

// 14.7 Obj
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};
const employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "haider";

// Decorators
