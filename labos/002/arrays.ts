const fruits = ["banana", "apple", "orange"]

for (const fruit of fruits) {
    console.log(fruit)
}

//tuples:

let countries : [string, number, number][] = [
    ["Rotterdam", 32423, 32423],
    ["Amsterdam", 32,342],
    ["Utrecht", 56,674],
    ["Anterpen", 890, 894]
]

for (const country of countries) {
    console.log(`${country[0]} has 1st number: ${country[1]}`)
    
}