// board https://kodaktor.ru/func_f16a2
const curryPow = x => y => x ** y;
// const partiPow = ... // аналогично предыдущей функции
Out.log(curryPow(2)(10)); // 1024
const partiPow = y => x => x ** y;
const qv = partiPow(2);
const cb = partiPow(3);

Out.log(qv(5)); // 25
Out.log(cb(5)); // 125
