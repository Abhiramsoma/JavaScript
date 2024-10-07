const accountId = 144553
let accountEmail = "abhi@google.com"
var accountPassword = "12345"
accountCity = "Hyd"
let accountState;

// accountId = 2 // not allowed


accountEmail = "abhi@abhi.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])