import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "select first number",
    },
    {
        name: "secondNumber",
        type:"number",
        message:"select second number",
    },
    {
        name: "operator",
        type: "list",
        message:"select your operator",
        choices:["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator === "Addition"){
    console.log(answer.firstNumber+answer.secondNumber)
}
else if (answer.operator==="Subtraction"){
    console.log(answer.firstNumber-answer.secondNumber)
}

    else if ( answer.operator==="Multiplication"){
        console.log(answer.firstNumber*answer.secondNumber)
    }
else if (answer.operator==="Division")
{
    console.log(answer.firstNumber/answer.secondNumber)
}
else{
    console.log("Invalid Input")
}