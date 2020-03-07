// board https://kodaktor.ru/func_23e68
// 1
f => f(f)
// 2
(f => f(f))(f => f(f))
// 3
((factorial, x) => factorial(factorial,x))((factorial, x) => x === 1 ? 1 : x * factorial(factorial, x - 1), 5) // 120