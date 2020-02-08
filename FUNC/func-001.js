// board https://kodaktor.ru/task_func_1be9d
function rgbColor(r = 255, g = 255, b = 255) {
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(rgbColor(1, 2, 3)); // rgb(1, 2, 3)
console.log(rgbColor(1, 2)); // rgb(1, 2, 255)
console.log(rgbColor(1)); // rgb(1, 255, 255)
console.log(rgbColor()); // rgb(255, 255, 255)
