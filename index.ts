import inquirer from "inquirer"

const questions:{numberOne: number, numberTwo: number, operator: string} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Please enter a first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Please enter a second number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "-", "+", "/"],
        message: "Please select an arithmetic operator"
    }
])

const {numberOne, numberTwo, operator} = questions
if(numberOne && numberTwo && operator){
    let res:number = 0
    switch(operator){
        case '+':
            res = numberOne + numberTwo
            break
        case '-':
            res = numberOne - numberTwo
            break
        case '*':
            res = numberOne * numberTwo
            break
        case '/':
            res = numberOne / numberTwo
            break
    }

    console.log("Your result is: " + res)
}