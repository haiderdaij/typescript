// Build and run command line::
// tsc ./src/index.ts && node ./src/index.js

let slaes: number = 123_456_789;
let language: string = "TypeScript";

// Any
let level;

// Array
let numbers: (string | number)[] = [1, 2, "4"];

// Tuples
let tuples: [number, string] = [1, "haider"];

// Enum
enum Size {
  Small = 9,
  Medium,
  Large,
}
let mySize: Size = Size.Large;

// Functions
function tax(income: number, year = 2022): number {
  if (year < 2023) return income * 1.2;
  return income * 1.4; // Undefined not a number
}

// Obj && Type aliases
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

// Union Types
function kgToLbs(weight: string | number): number {
  if (typeof weight === "number") return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}

// Intersection Types
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

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// Optional chaining "Null | Undefined"
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);

// The Nullish Coaelscing Operator
let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, "", false, 0)
  // its possible speed become zero, its called falsy value,
  // the 30 will be choosen and that is a mistake!
  speed: speed ?? 30,
};

// <Type Assertions>
// let phone = <HTMLInputElement>window.document.getElementById("phone");
// phone.value;

// Class
class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invilad");
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
}
let account = new Account(1, "haider", 125);
// account.deposite(139);

// Index Sinatures
class SeatAssignment {
  [seatNumber: string]: string;
}
let seat = new SeatAssignment();
seat.A1 = "daij";

// Generics
class KeyValue<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new KeyValue<number, boolean>(1, true);

// Merge Strings Alternately
function mergeAlternately(word1: string, word2: string): string {
  let a: number = 0;
  let b: number = 0;
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
// console.log(mergeAlternately("abc", "kds"));

// Decorators
