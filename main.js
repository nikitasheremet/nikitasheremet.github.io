import { createHeader } from "./second.js";
let myName = createHeader("Nikita Sheremet");
document.body.prepend(myName);
console.log(myName);
