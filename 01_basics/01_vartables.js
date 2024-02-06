const accountId = 144553
let accountEmail = "rehanejaz@google.com"
var accountPassword = "1234"
accountCity = "karachi"

//accountId = 2 //not allowed

accountEmail = "reh@a.com"
accountPassword = "12121212"
accountCity = "rehna"
console.log(accountId);
/*
Prefer not to use var 
because of issus in block scope and functional scope 
*/

console.table([accountEmail, accountId,accountPassword, accountCity])