
let answer
let again
// https://teamtreehouse.com/community/add-a-dowhile-loop-that-keeps-displaying-the-prompt-dialog-until-the-user-types-sesame

do {
     answer = prompt(`What is the airspeed velocity of an unladen swallow? 
     Select
     1. I don't know
     2. African or European?
     3. Huh?`)
      
     if (answer != "2")
        again = prompt (`That is wrong! Would you like to try again? (y/n)`)
     if (again == "n") {
        break}
     

} while (answer != "2")
if (answer == "2") {alert("What? I don't know that?")}


// I sincearely hope that whoever is marking this gets the reference. Or I will look a proper fool :')