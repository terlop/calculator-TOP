function add(a=0, b=0) {
    return a + b
}
function subtract(a=0, b=0) {
    return a - b
}
function multiply(a=0, b=0) {
    return a * b
}
function divide(a=0, b=0) {
    return a / b
}
function power(a=0, b=0) {
    a ** b
}
function changesign(a=0, b=0) {
    if (a > 0) {
        return -a
    }
    else {
        return Math.abs(a)
    }
}
function remainder(a=0, b=0) {
    return a % b
}

let firstNumber
let secondNumber
let operator

function operate(firstNumber=0, operator, secondNumber=0) {
    if (operator == '+') {
        // add(parseInt(firstNumber), parseInt(secondNumber))
        return add(firstNumber, secondNumber)
    }
    else if (operator == '-') {
        return subtract(firstNumber, secondNumber)
    }
    else if (operator == 'x') {
        return multiply(firstNumber, secondNumber)
    }
    else if (operator == '/') {
        return divide(firstNumber, secondNumber)
    }
    else if (operator == '^') {
        return power(firstNumber, secondNumber)
    }
    else if (operator == '+/-') {
        return changesign(firstNumber)
    }
    else if (operator == '%') {
        return remainder(firstNumber, secondNumber)
    }
}

//

// adressing all buttons 
let buttonsdiv = document.querySelector('#buttons') 

// creating array of buttons for every column
let clmn1 = ['+', '1', '4', '7', '0']
let clmn2 = ['x', '2', '5', '8', '.']
let clmn3 = ['-', '3', '6', '9', 'clear']
let clmn4 = ['/', 'del', '+/-', '^', '=' ]

// creating every column
for (let i=0; i < 4; i++) {
    let column = document.createElement('div')
    column.setAttribute('id', `c${i+1}`)
    buttonsdiv.appendChild(column)
}

// creating a button inside of every column 
function createColumn(column, number) {
    let cl = document.querySelector(`#c${number}`) 
    column.forEach(sign => {
        let btn = document.createElement('button')
        btn.setAttribute('id', sign)
        btn.textContent = sign
        cl.appendChild(btn)
    });
}
createColumn(clmn1, 1)
createColumn(clmn2, 2)
createColumn(clmn3, 3)
createColumn(clmn4, 4)

function populate() {

}


// array of IDs of all buttons 
// const buttIDs = ['+', '1', '4', '7', '0', 'x', '2', '5', '8', '.', '-', '3', '6', '9', '/', '+/-', '^']
const buttIDs = ['1', '4', '7', '0', '2', '5', '8','3', '6', '9']
let storedValues = []
let stringOfValues = ''
const display = document.querySelector('#numbers-field')

// every pressed button value we save in the "storedValues" array and displaying this array
buttIDs.forEach(id => {
    let button = document.getElementById(id)
    document.addEventListener('DOMContentLoaded', function() {
        button.addEventListener('click', () => {
            storedValues.push(button.id)
            stringOfValues += button.id
            display.textContent = stringOfValues
            
        })
    })
    
})



// function to divide left numbers, operator and right numbers and evaluate the expression

function whenAllInputed() {
    let leftNums = []
    let sign = []
    let rightNums = []
    for (val of storedValues) {
        if (['+', '/', '-', 'x', '^'].includes(val)){
            leftNums.push(stringOfValues.split(val)[0])
            sign.push(val)
            rightNums.push(stringOfValues.split(val)[1])
        }
        
    }
    leftNums = parseInt(leftNums[0])
    sign = sign[0]
    rightNums = parseInt(rightNums[0]) || 0
    let retValue = operate(leftNums, sign, rightNums)
    display.textContent = retValue
    stringOfValues = '' + retValue
    // stringOfValues = '' + retValue
    console.log(retValue)
    // return retValue
    console.log([leftNums, sign, rightNums])
    // console.log(operate(leftNums, sign, rightNums))
    
}

// making a fucntion which forces every operator to do the expression when its pressed 
let leftValue = 0
let operatorButtons = ['+', '/', '-', 'x', '^']
operatorButtons.forEach((button) => {
    let btn = document.getElementById(button)
    btn.addEventListener('click', () => { 
        storedValues.push(button)
        stringOfValues += button
        display.textContent = stringOfValues
        whenAllInputed()
         


    })
})

// function to evaluate the expression 
let equals = document.getElementById("=")
equals.addEventListener('click', () => {
    // return storedValues.reduce((a, b) => {return a + b})
    whenAllInputed()
    display.textContent = storedValues.reduce((a, b) => a + b, 0)
})

// function to clear the storedValues and display
let clear = document.querySelector('#clear')  // clear button 
clear.addEventListener('click', () => {
    display.textContent = ''
    storedValues = []
    stringOfValues = ''
})



















// const ids = ['+', '1', '4', '7', '0', 'x', '2', '5', '8', '.', '-', '3', '6', '9', 'clear', '/', 'del', '+/-', '^', '=' ]
// let storedValues = []
// let allbuttons = document.querySelectorAll('button')
// allbuttons.forEach(button => {
//     button.addEventListener('click', () => {
//         storedValues.push(button.id)
//         console.log(storedValues)
//         const display = document.querySelector('#numbers-field')
//         display.textContent = storedValues
//     })
// })


// ids.forEach(id => {
//     btn = document.getElementById(`#${id}`)
//     btn.addEventListener('click', () => {
//         storedValues.push(btn.id)
//     })
// })





// allColumns.forEach((column) => {
//     let cl = document.querySelector(`#c${allColumns.indexOf(column)}`)
//     column.forEach((button) => {
//         let btn = document.createElement('button')
//         btn.textContent = `${button}`  
//         btn.setAttribute('id', `${button}`)
//         cl.appendChild(btn)

//     })
// })



// buttons.forEach((button) => {
//     let btn = document.createElement('button')
//     btn.textContent = button
//     btn.setAttribute('id', `${button}`)
//    buttonsdiv.appendChild(btn)
// })
