const myArray =[0,1,2,3,4,5,6]

const myNewArray =["Umar" , "saad"]

const my2Arry= new Array (11,22,33,44)

console.log(myArray[2]);

/////// Array method //////////////

myArray.push(7); // push method value add karna ka lai use hota haan yani arrray ma new value add up ho gai 
//console.log(myArray);
myArray.push(8);
//console.log(myArray);
myArray.pop(); //array ma joo last value ho gai ausa remove kara gaa jo b ho gai
//console.log(myArray);

myArray.unshift(9) // add a vale start of the string 
console.log(myArray);
myArray.shift() //
console.log(myArray.includes(9)); // ya value batai gaa exit hn ya nhi answer true false ma dai yani boolen ma 

console.log(myArray.indexOf(4)); // agar value ho gai batai gaa kis index par agar nhi -1 dai gaa ya value pass ki array ma 4 han 

const newArr =myArray.join();
//console.log(myArray);
//console.log(typeof newArr);

console.log("A" , myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B" ,myArray);

const myn2 =myArray.splice (1,3)

console.log("C" ,myArray);
console.log(myn2);


