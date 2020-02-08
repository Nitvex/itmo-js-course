// board https://kodaktor.ru/func_d5f23
const cc = (x = 0) => () => ++x;
const c = cc();
console.log(c());
console.log(c());
console.log(c());

