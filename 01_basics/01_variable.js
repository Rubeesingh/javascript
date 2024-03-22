const accountId = 144553
let accountEmail = "rubee@google.com"
var accountPassword = "12345" //dont use var because of issue in block scope and functional scope
accountCity = "Delhi"
let accountState;


// accountId = 2

accountEmail = "ru@sh.com"
accountPassword = "135"
accountCity = "patna"

console.log(accountId);
console.log(accountEmail);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

