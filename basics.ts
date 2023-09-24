//  Primatives: numers, strings, booleans
//  Complex Types: arrays, objects
// Function Types, parameters

//  primatives

let age: number = 24;

age = 12;

let userName: string;

userName = "Max";

let isIntstructor: boolean;

isIntstructor = true;

//More Complex Types

let hobbies: string[];

hobbies = ["Sports", "Cooking", "12 here as number, would not work"];

let person: {
  name: string;
  age: number;
};
// tells Typescript to allow the name and age to be a specific type
// Can use any, but its generally too broad
person = {
  name: "Max",
  age: 32,
};

// This doesnt work as we did not declare it in our typescript
// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Lets you store an array of persons with the number, age requirements.

// Type Inferance

// if you dont declare it will infer what type you wanted, use this to your benefit and dont declare types when you do not need to.
let course = "React - The Complete Guide";

// course = 12341;
