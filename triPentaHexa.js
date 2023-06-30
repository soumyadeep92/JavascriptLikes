function isPentagonal(num) {
    const n = (Math.sqrt(24 * num + 1) + 1) / 6;
    return (n - parseInt(n) === 0) ? n : 0;
}
  
function nearestHexagonal(num) {
    return parseInt((Math.sqrt(8 * num + 1) + 1) / 4);
}
  
function hexagonal(num) {
    return num * (2 * num - 1);
}
function triPentaHexa(num) {
    let n = nearestHexagonal(num) + 1;
    let h_n = hexagonal(n);
    while (!isPentagonal(h_n)) {
      n++;
      h_n = hexagonal(n);
    }
    return h_n;
}
  
console.log(triPentaHexa(40756));