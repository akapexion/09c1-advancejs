class AIDC{
    constructor(){
        console.log("This is my Constructor");
    }
    testing(){
        console.log("Main Testing");
    }
    match1(){
        console.log("This is for 1st Game");
    }
    match2(){
        console.log("This is for 2nd Game");
    }
    static Lab209(){
        console.log("For Group A");
    }
    static Lab208(){
        console.log("For Group B");
    }
}

class Backup extends AIDC{
    constructor(){
        super();
        console.log("Backup Constructor");
    }
    testing(){
        super.testing();
        console.log("Backup Testing");
    }
}

const rafay = new AIDC();
const ayan = new Backup();

ayan.testing();