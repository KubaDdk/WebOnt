import * as readline from 'readline-sync'

let choices : string[] = ["TyppeScript","Java", "Python", "C#", "JavaScript"]

let index : number = readline.keyInSelect(choices, "What's your favorite langugage?")