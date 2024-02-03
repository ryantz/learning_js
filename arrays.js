// 2 ways to create an array
const a = []
const b = Array()

// pre filling the array
const c = [1, 2, 3]
const d = Array.of(1, 2, 3)

// can hold multiple types of data
const e = [1, 'Hello', [3, 2], ['a', 'b']]

//creating a matrix
const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
mat[0][0] // 1
mat[2][1] // 8

const arr = Array(6).fill(0) // array of 6 zeros
arr.length // checks the length of the array, 6

// adding and removing items in an array
const new_arr = [1,2,3,4,5,6]

new_arr.push('pushed') // adding to the end of the array
new_arr.unshift('unshift') // adding to the start 

new_arr.pop() // remove the last item in the array
new_arr.shift() // remove the first item in the array

//console.log(new_arr)

// joining arrays
const next_arr = [7,8,9]

const joined = new_arr.concat(next_arr) // 123456789
const joined2 = [...next_arr, ...new_arr] //789123456
//console.log(joined2)

// finding items in array
const abc = ['a', 3, 'hello', 'needle', false]

const esult = abc.find(element => element === 'needle') // needle
const findit = abc.find(i => i === 200) // undefined as not in array

const result2 = abc.findIndex(index => index === 'needle') // 3

const inclusive = abc.includes('needle', abc) // true
const noninarr = abc.includes(34, abc) //false
//console.log(noninarr)



