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
    console.log(age + "true or false");
}

