// board https://kodaktor.ru/func_9414c - doesn't work after clicking 'view'???
(async () => {
  const response = await fetch("https://3336.kodaktor.ru/funcpsst", {
    method: "POST"
  });
  const { g } = await response.json();
  const funcs = g.map(f => new Function(f));
  const f0Args = Array.from(document.querySelectorAll(".f0")).map(arg => arg.value)
  const f1Args = Array.from(document.querySelectorAll(".f1")).map(arg => arg.value)
  console.log(funcs[0].apply(f0Args));
  console.log(funcs[1].apply(f1Args));
})();