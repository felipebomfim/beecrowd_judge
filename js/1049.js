var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const p1 = lines[0].trim();
const p2 = lines[1].trim();
const p3 = lines[2].trim();

let animal;

if (p1 === "vertebrado") {
  if (p2 === "ave") {
    animal = p3 === "carnivoro" ? "aguia" : "pomba";
  } else {
    // mamifero
    animal = p3 === "onivoro" ? "homem" : "vaca";
  }
} else {
  // invertebrado
  if (p2 === "inseto") {
    animal = p3 === "hematofago" ? "pulga" : "lagarta";
  } else {
    // anelideo
    animal = p3 === "hematofago" ? "sanguessuga" : "minhoca";
  }
}

console.log(animal);
