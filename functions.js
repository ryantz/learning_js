// funtion fn_name(args, args, args){}
// function returns undefined unless contains return statement
// default parameters can be passed in ()

function addition(num1 = 0, num2 = 0){
    console.log(num1+num2)
    return num1 + num2
}

const num1 = 3, num2 = 4;
addition(num1, num2)

// arrow functions
// they are anonymous, variables must be assigned
// drop the word function
// let function = () =>{}
// if it only contains one statement, can remove {}
// default parameter values in () too

let newfn = (var1 = ' nice to', var2 = ' meet you') => {
    console.log('hello' + var1 + var2)

}

// single line 'on-line' statements have implicit returns (no need for return statement)
let nextfn = (varr = 3, varr2 = 4) => console.log(varr + varr2)

newfn('ryan','hello')
nextfn()

