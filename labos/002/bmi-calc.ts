import * as readline from 'readline-sync'

let weight, height

do {
    weight = readline.questionFloat("Enter your weight: ")
} while (weight <=0)

do {
    height = readline.questionFloat("Enter your height: ")
} while (height <=0)
const bmi = weight / (height * height)
console.log(`Your BMI is: ${bmi}`)