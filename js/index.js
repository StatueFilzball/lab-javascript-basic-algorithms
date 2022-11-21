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

//Bonus 1

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor, ipsum nec volutpat luctus, felis eros ullamcorper nibh, eget ultricies enim ipsum non sapien. Aliquam convallis, mi eu dignissim lobortis, purus nulla rhoncus purus, at pulvinar nisl massa ac dolor. Duis efficitur, magna et hendrerit dictum, mauris nisi interdum urna, vel porta neque est eget sapien. Nulla volutpat suscipit nibh at scelerisque. Donec ornare velit a magna posuere, in dapibus ante dapibus. Nulla eu fringilla nulla. Sed sit amet mi non dolor auctor molestie sit amet sed ipsum. Quisque in auctor neque.

Nulla et nisi finibus, ornare arcu ac, dignissim lacus. Cras sed faucibus justo. In vel rutrum dui. Integer at nunc erat. Etiam lobortis nisl et fringilla lobortis. In eleifend nisi nisl, ut vulputate urna cursus ac. Donec eu lacinia enim, viverra hendrerit ex. Proin in viverra sem. Fusce tincidunt tempor turpis, non ullamcorper odio sollicitudin nec. Nulla non urna sit amet tellus placerat convallis. Fusce lobortis lacus sed massa feugiat placerat. Vivamus malesuada leo est. Proin malesuada est dignissim tempor finibus. Nulla vehicula porttitor vulputate. Sed cursus turpis feugiat elit finibus, nec efficitur turpis tempus.

Vestibulum dictum libero vel libero egestas, gravida convallis augue laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at dignissim tortor. Suspendisse non pretium felis. Morbi nunc purus, maximus in tellus cursus, tempor euismod metus. Nulla interdum pulvinar mi nec accumsan. Morbi nec metus tortor. Aenean sollicitudin varius congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut sodales sapien.`

let wordCount = 1 // Im counting the amount of empty spaces but start from 1 as there is no space ahead of the first word
for(let k = 0; k < text.length; k++) {
    if(text[k] === " "){
        wordCount++
    }
}

console.log(wordCount)


//Bonus 2

let phraseToCheck = "race car"

let phraseToCheckNoSpaces = ""

for( let l = 0; l < phraseToCheck.length; l++){
    if(phraseToCheck[l] !== " ") {
        phraseToCheckNoSpaces += phraseToCheck[l]
    }
    else continue
}

let phraseToCheckReverse = ""

for(let m = phraseToCheckNoSpaces.length - 1; m >= 0; m--) {
    phraseToCheckReverse += phraseToCheckNoSpaces[m]
}

if (phraseToCheckNoSpaces === phraseToCheckReverse) {
    console.log(`${phraseToCheck} is a palindrome`)
} else {
    console.log(`${phraseToCheck} is not a palindrome`)
}