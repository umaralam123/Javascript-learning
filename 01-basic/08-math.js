const score = 400;
console.log(score);

const balance = new Number(200000)
console.log(balance);

console.log(balance.toString().length); // ya length batati han 
console.log(balance.toFixed(2));

const otherNumber =23.4948

console.log(otherNumber.toPrecision(2)); //decimal sa phala kithna chyai 
const hundard =1000000
console.log(hundard.toLocaleString());  // iin the number is 1,00,000 
//console.log(hundard.toLocaleString('en-PKR'));

// console.log(Math);
// console.log(Math.abs(-3)); //negtive vlaue ko posotive banata hn jasa -3 ko 3 
// console.log(Math.round(4.6)); // value ko round kar dai gaa jasa 4.6 ko 5 jasa 3.4 ko 3 point ka baad wali value riund kara gaa 
// console.log(Math.floor (3.5)); // VALUE   

// console.log(Math.ceil(4.3));  // 
// console.log(Math.floor(4.4)); //choti value find karti han 
// console.log(Math.sqrt (6)); //squreroot find karna ka lai 
// console.log(Math.min(4,5,6,7,8,9,2)); //minimum 
// console.log(Math.max(44,33,55,33,55,88,99,999)) //maximun value 

console.log(Math.random ()); //math.random value 0 aur 1 ka bach hoti han 
console.log(Math.random ()*10);
console.log(Math.random()*10 +1);
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min =10;
const max =20 ;

console.log(Math.floor(Math.random() * (max -min + 1)) + min);






