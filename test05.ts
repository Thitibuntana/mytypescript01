function FuncC() {
    console.log("FuncC called");
  return "FuncC";
}

function FuncD(n1: number, n2: number) {
    console.log("FuncC called");
  return n1+n2;
}

console.log(FuncC());

console.log(FuncD(5, 10));