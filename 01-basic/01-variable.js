const accountId =2345
let accountEmail ="umar@google.com"
var accountpassword ="2345"
accountcity = "lahore"
let accountState;
// change the value of all variable 
//    accountId= 34545    consts ki valiue change nhi ho gai run time par error show ho gaa

accountEmail="abc@google.com"
accountpassword= "33333"
accountcity ="karachi"

console.table ([accountId ,accountEmail,accountpassword,accountcity,accountState])
console.log ()

/*
Please prefer to not use var
Because of issues in block scope and functional scope 
let accountState;
java ma value pass na kara to output udefined show ho gaa ka 
*/