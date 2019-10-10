function solution(A) {
  const obj = new Map();
  for (let i of A) {
      if (obj.get(i)) {
          obj.delete(i);
      } else {
          obj.set(i, 1);
      }
  }
  for (let i of obj.keys()) {
      return i;   
  }
}