
while (true) {
    
    let input = prompt (`Please enter a word`)
    let stoploop = false

    // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    // I actually found a way to write this exact program on google but wanted to do it myself. FYI its out there.
function reverseString(str) {
    return str.split("").reverse().join("");
}
let tupni = reverseString( `${input}` )
let palin = (tupni == input)

switch (palin) {
      case false:
        alert (`${input} is not a palindrome, try again`)

break

  
    case true:
        alert (`well done! ${input} is a palindrome`)
        stoploop = true
break }

if  (stoploop) {
break}

}
