import { createHeader } from "./second.js";
var myName = createHeader("Nikita Sheremet");
document.body.prepend(myName);
console.log(myName);
