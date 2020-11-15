var age = 31;
var is_subscribed = confirm("Do you subscribe? if yes, enter 'true'. if no, enter 'false'.");

if (age < 18 && is_subscribed == false) {
    console.log("Too young and not subscribed");
    
}
else if (age >=18 && is_subscribed == false) {
    console.log(age + "Older but not subscribed");

}
else if (age < 18 && is_subscribed == true) {
    console.log(age + "Too young but is subscribed");
}
else if (age >=18 && is_subscribed == true) {
    console.log(age + "Older and is subscribed");
}
else {
    console.log(age + "Are You a Robot");
}


// W9B

var age = [10, 14, 16, 18, 22];
var is_subscribed = [true, false,true, false, true];

for (var i = 0; i < age.length; i++) {
    if (age[i] < 18 && is_subscribed[i] == true) {
        console.log("You are younger than 18 and subscribed");
    }
    else if (age[i] >=18 && is_subscribed[i] == true) {
        console.log("You are 18 or olde and subscribed");
    }
    else if (age[i] >=18 && is_subscribed[i] == false) {
        console.log("You are 18 or older and not subscribed");
    }
    else if (age[i] <18 && is_subscribed[i] == false) {
        console.log("You are less than 18 and not subscribed")
    }
    else {
        console.log("block")
    }
}

