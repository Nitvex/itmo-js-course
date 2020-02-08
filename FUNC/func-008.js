// board https://kodaktor.ru/func_505fd
var x;
(async () => {
  const response = await fetch("https://3336.kodaktor.ru/funcpsst", {
    method: "POST"
  });
  const { g } = await response.json();
  const funcs = g.map(f => new Function(f));
  console.log(funcs[0]);
  x = Array.from(document.querySelectorAll(".f0")).map(arg => arg.value);
  console.log(funcs[0].apply(x));
  x = Array.from(document.querySelectorAll(".f1")).map(arg => arg.value);
  console.log(funcs[1].apply(x));
})();
