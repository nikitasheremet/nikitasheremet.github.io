import { createHeader } from "./second";
var myName = createHeader("Nikita Sheremet");
document.body.prepend(myName);
console.log(myName);
