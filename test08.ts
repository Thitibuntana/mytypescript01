class Student {
    fname: string = ""
    age: number = 0

    showinfo() {
        console.log(`Hi ${this.fname}`);
        console.log(` Age: ${this.age}`);
    }
}

let ob1 = new Student();
ob1.fname = "John";
ob1.age = 20;
ob1.showinfo();