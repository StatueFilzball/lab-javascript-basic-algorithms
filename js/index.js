// Iteration 1: Names and Input
let hacker1 = "Iryna"
console.log(`The drivers name is ${hacker1}`)

let hacker2= "Jan"
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
     console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops 

//3.1
let driverNameBigSpaced = ""
for (let i = 0; i < hacker1.length; i++){
driverNameBigSpaced += hacker1[i].toUpperCase() + " "
}
console.log(driverNameBigSpaced)


//3.2
let navigatorNameReverse = ""
for (let i = hacker2.length - 1; i >= 0; i--){
    navigatorNameReverse += hacker2[i]
}
console.log(navigatorNameReverse)

//3.3
if(hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("You both have the same name?")
}

//Bonus Time!
