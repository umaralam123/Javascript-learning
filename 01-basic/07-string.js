let str1 ="Umar"
let str2 = " Alam"

console.log(str1 +str2)

console.log('My name is ${str1} and my father name is 4{str2}')

const gameName =new String('Umaralam-ua-com')
// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);    // string ki lenght batai gaa kithni hn 
// console.log(gameName.toUpperCase());   //upper case mma likh gaa
// console.log(gameName.charAt(3));  //ya string index yani kithna number par kon sa 
// //number ya aplha hn jasa umar to woo mujh batai gaa mana 3 kiya yani wo zero sa start kara gaa 

// console.log(gameName. indexOf('a')); // ya batai kon aplabit kithnanumber par han 

// const newString = gameName.substring(0, 3)
// console.log(newString); 

const anotherString = gameName.slice(-1,2) // give opt end its means my string umar ya give me vaule  ra 
console.log(anotherString);

const newStringOne = "  khattana  "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove the space

const url = "https/umaralam.com/umar%30khattana"

console.log (url.replace('30', '-')) //add in url 
console.log(url.includes('Siraj'))

console.log(gameName.split('-')); //String ko array mein convert
