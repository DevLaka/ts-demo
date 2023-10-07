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

// Typing functions
interface Human {
  name: string;
  age: number;

  // Defining a method in a interface
  clone(name: string): Human;
}

function cloneHuman(source: Human, func: (source: Human) => Human): Human {
  return Object.apply({}, source);
}

// Generics
function cloneWithGenerics<T>(source: T): T {
  return Object.apply({}, source);
}

const tv = cloneWithGenerics({ model: "LG", size: 32 });

// Multiple generic parameters
function cloneWithMultipleGenerics<T1, T2>(source: T1): T2 {
  return Object.apply({}, source);
}

// Calling a function with multiple generic parameters
const g = cloneWithMultipleGenerics<Car, Date>({
  model: "VX",
  status: vehicleStatus.NEW,
});

// In TS, you can use generic constraints to impose rules on the types that can
// be used as generic parameters in your functions. For instance, you can ensure
// that the return type of a method matches the input type by using the
// extends keyword. This means you can supply any type as the second generic
// parameter as long as it matches the properties of the first type parameter.
// It's not necessary for the second type to extend or derive from the first;
// it just needs to have matching properties. For example, you can create a new
// interface that shares the same properties as another type, and it will satisfy
// the extends constraint. This allows you to make your generic functions more
// specific and enforce type compatibility. See code example below.

interface Animal {
  name: string;
}

interface Cat {
  name: string;
  noOfLivesRemaining: number;
}

function cloneAgain<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}

const animal1: Animal = { name: "garfield" };
const cat1 = cloneAgain<Animal, Cat>(animal1);

// Generics in TS are not limited to functions; they can also be applied to
// interfaces and classes. A generic type can be used within the interface for
// specifying property types or as generic parameters for other interfaces.
// See code example below.

interface Dog<TExternalId> {
  name: string;
  age: number;
  externalId: TExternalId;
  loadExternalId(): Task<TExternalId>;
}
