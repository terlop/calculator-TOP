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
    return a ** b
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
let clmn4 = ['/', 'del', '%', '^', '=' ]

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
const buttIDs = ['+', '1', '4', '7', '0', 'x', '2', '5', '8', '.', '-', '3', '6', '9', '/', '%', '^']
// const buttIDs = ['1', '4', '7', '0', '2', '5', '8','3', '6', '9']
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
        if (['+', '/', '-', 'x', '^', '%'].includes(val)){
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
    storedValues = []
    storedValues.push(retValue)
    // stringOfValues = '' + retValue
    console.log(retValue)
    // return retValue
    console.log([leftNums, sign, rightNums])
    // console.log(operate(leftNums, sign, rightNums))
    
}



// function to evaluate the expression 
let equals = document.getElementById("=")
equals.addEventListener('click', () => {
    // return storedValues.reduce((a, b) => {return a + b})
    whenAllInputed()
    operatorsCount = 1
})

// forcing equalization of expression when there are more than one operator in whole expression 
let operation_buttons = ['+', '/', '-', 'x', '^', '%']
let operatorsCount = 0
operation_buttons.forEach((button) => { 
    let oper = document.getElementById(button)
    oper.addEventListener('click', () => {
        operatorsCount++ 
        if (operatorsCount > 1) {
            whenAllInputed()
            // stringOfValues = stringOfValues + button
            // storedValues.push(button)
            display.textContent = stringOfValues
            operatorsCount = 1
        }
    })
})

// function to clear the storedValues and display
let clear = document.querySelector('#clear')  // clear button 
clear.addEventListener('click', () => {
    display.textContent = ''
    storedValues = []
    stringOfValues = ''
    operatorsCount = 0
})

 // function for a button del which will delete last element in this expression 
let del = document.querySelector('#del')
del.addEventListener('click', () => {
    storedValues.pop(storedValues.length-1)
    let poped = stringOfValues[stringOfValues.length-1]
    if (['+', '/', '-', 'x', '^'].includes(poped)) {
        operatorsCount--
    }
    stringOfValues = stringOfValues.slice(0, -1)
    display.textContent = stringOfValues
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
