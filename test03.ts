// Data type (number, string, boolean, array, object)
let data1: number;
data1 = 42; 
let data2: string;
data2 = "Hello, TypeScript!"; 
let data3: boolean;
data3 = true; 
let data4: number[];
data4 = [1, 2, 3]; 
let data5: object;
data5 = { name: "John", age: 30 }; 

let data6: (number|string)[] = [];
data6[0] = 1;
data6[1] = "two";

console.log(data1, data2, data3, data4, data5); // Output the variables