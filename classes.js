class Person{
    //constructor
    //class takes name as a param
    // initialze .name output name
    /*
    constructor(name){
        this.name = name;
    }
    */
    hello(){
        return "Hello I am Person";
    }
}

//initializing an object using a class
/*
const ryan = new Person();
ryan.name = 'Ryan';
console.log(ryan.name)
console.log(ryan.hello())
*/
//const Ryan = new Person('RYAN')
//console.log(Ryan.hello())

//read up on static

// Inheritance
// extending a class to another class 
// objects initialized during that class inherit all the methods of both classes

class Programmer extends Person{
    hello(){
        // excessing parent function (hello() from Person)
        return super.hello() + ' I am also a programmer'
    }
};

const ben = new Programmer();
console.log(ben.hello())


