//Diagonal of a square
const diagonal = 1.414 * 9;
console.log(`The Diagonal Of square ➜ ${diagonal}`);
const a = 5, b = 6, c = 7;
const semi = (a+b+c)/2;
const area = Math.sqrt(semi* (semi - a) * (semi - b) * (semi - c) );
console.log(`The Area Of a Triangle ➜ ${area}`);
//Circumference of a circle
const radius = 4, circumference = (2 * Math.PI * radius);
console.log(`Circumference Of The Circle Radius 4 ➜ ${circumference}`);
//surface area of a circle
const surface = Math.PI * Math.pow(radius,2);
console.log(`Surface area of the circle having radius of 4 ➜ ${surface}`);