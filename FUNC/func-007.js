const sec = a => 1 + a;
const add = (a, b) => (b === 0 ? a : sec(add(a, b - 1)));
const mpy = (a, b) => (b === 1 ? a : add(a, mpy(a, b - 1)));
const pwr = (a, b) => (b === 1 ? a : mpy(a, pwr(a, b - 1)));

console.log(pwr(2, 13)); // pwr(11, 5) or pwr(2,14) causes Maximum call stask exceeded error
