class Aptech{
    constructor(a, b){
        this.a = a;
        this.b = b;
        console.log(this.a + this.b);
    }
    faculty(emp_id){
        this.emp_id = emp_id;
        console.log(`Method For Faculty whose id : ${this.emp_id}`);
    }
    students(name){
        this.name = name;
        console.log(`Method For Student : ${this.name}`);
    }
    management(){
        console.log("Method For Management");
    }
}

const rafay = new Aptech(2, 5);
const ayan = new Aptech(4, 10);
const asad = new Aptech(3, 7);

// rafay.students("Rafay");
// ayan.students("Ayan");
// asad.faculty(199);


