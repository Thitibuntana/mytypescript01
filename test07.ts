// optional function type annotation
let sum = function (a: number, b: number, c?: number) {
   if (typeof c != 'undefined') {
       console.log(a + b + c);
   }else {
       console.log(a + b);
   }
}
sum(10, 20);
sum(10, 20, 30);

let sum1 = function (a: number, b: number, c: number = 100) {
   if (typeof c != 'undefined') {
       console.log(a + b + c);
   }else {
       console.log(a + b);
   }
}

sum1(10, 20);
sum1(10, 20, 30);