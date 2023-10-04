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