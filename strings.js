// length attribute

const names = 'Ryan'
length = names.length
//console.log(length)

// combining strings with +
const statement = ' is cool'
console.log(names + statement)

// interpolation
console.log('who else' + statement)

// backticks template literals using ` not '
const multiline = `what
is 
this
format
`
console.log(multiline)

// template literal ${}
const add = 'test'
const addto = `what ${add}` // using ` and interpolating with ${}
console.log(addto)