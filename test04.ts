function FuncA() {
    console.log("Function A is called");
}
function FuncB(param1: string, param2: number) {
    console.log(param1);
    console.log(param2);
}

FuncA();
FuncB("Hello, TypeScript!", 42);