let x = 5; // TS type inference ==> let x: number, already identified the type.
let y; // TS type inference ==> Variable 'y' implicitly has an 'any' type, but a better type may be inferred from usage.
let z: number; // Explicitly defining variable type
let a: string;
let b: boolean;
let c: Date;
let d: string[];

d = "Hi"; // Assigning to incorrect type, TS shows an error.

let e: any; // e can hold any type

d = "Hi" as any; // Also TS type casting can be used to tell it to treat any value as the type any.

// Custom types with interface
// Defining
interface Vehicle {
  model: string;
  year: number;
  color?: string; // Optional felid
}

// Any Class definitions can also be used as interfaces.
// Difference between an interface and a class, is that interfaces strictly exist to provide type information to TS.
// They are only used at compile time and are never available, and never appear in runtime code.

// Using
let vehicle1: Vehicle;

vehicle1 = {
  model: "Toyota",
  year: 2020,
};

// Extending an interface
interface Person extends Address {
  name: String;
  bod: Date;
}

// Keeping the Address interface separate, increases the reusability
interface Address {
  line1: String;
  line2: String;
  city: String;
}

let Jhon: Person = {
  name: "Jhon",
  bod: new Date("07-07-2021"),
  line1: "NO.5",
  line2: "Downtown",
  city: "California",
};

// Type alias
// Its an alias for another type
// Defining types using type keyword
type engineNumber = string;

// Enums
// Unlike many other TS syntaxes that get stripped away at compile time,
// enums do get compiled along with the rest of your code, allowing us
// to refer these types at runtime.

enum vehicleStatus {
  NEW = "new",
  USED = "used",
}

interface Car {
  model: string;
  status: vehicleStatus;
}

let car1: Car = {
  model: "Nissan",
  status: vehicleStatus.NEW,
};
