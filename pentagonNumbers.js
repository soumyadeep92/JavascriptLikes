function isPentagonal(num) {
    const n = (Math.sqrt(24 * num + 1) + 1) / 6;
    return n === parseInt(n);
}
  
function pentagonNumbers() {
    const PENTAGONALS = Array(10000).fill(0);
    for (let i = 1; i < 10000; i++) {
      const p_i = PENTAGONALS[i] = i * (3*i - 1) / 2;
      for (let j = i - 1; j > 0; j--) {
        const p_j = PENTAGONALS[j];
        if (isPentagonal(p_i - p_j) && isPentagonal(p_i + p_j))
          return p_i - p_j;
      }
    }
}
  
console.log(pentagonNumbers());