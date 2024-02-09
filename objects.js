// creating objects and defining
const person = {
    fav_color:"blue",
    names: "Ryan",
    'why': 'idk'
};

//console.log(person.fav_color)
//console.log(person['why'])
// nested objects

const car ={
    brand:{
        name: 'Ford',
    },
    color: 'blue',
}

//console.log(car.brand.name)
//console.log(car.color)

// adding properties
car.age = 2

// deleting properties of an object
delete car.color

//console.log(car.age)
//console.log(car.color) //undefined

// object methods are properties in a function
const cars = {
    brand:'Merc',
    model: 'E class',
    start: function(){
        console.log(`started ${this.brand} ${this.model}`)
    },
}
// with a function, there is excess to this(instance)
cars.start()


//using arrow functions, there is no this attribute.
// arrow functions are not bound to the object

