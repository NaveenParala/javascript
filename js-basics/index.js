//         //this 
//         console.log('hello world');
//         //variable name must not be the reserved key
//         //variable name should be understandable
//         //variable name cannot started with number
//         //variable name must not contain spaces and hypen(-) 
//         let name = "naveen";
//         console.log(name)

//         let firstName='naveen' ;
//         let  lastName='kumar';
//         console.log(firstName);
//         console.log(lastName);

//         // if variable type is const, we can't reassign
//         const interestRate=0.3;
//         //interestRate=1;
//         console.log(interestRate);
//           // //data types
//           let name1='navee';//String
//           let age1=28;// number
//           let isApproved=false//boolean
//           let last_Name=null;
//           let first_Name=undefined; 

//           //DYNAMIC TYPING

//           //primitive type 
//           //1.number(integer, floating)
//           //2.String
//           //3.boolean
//           //4.undefined
//           //5.null

//           //reference type
//           //1.object
//           //2.Array
//           //3.Function

//           let person={
//             person_Name:'naveen',
//             person_Age:28
//           };
//           //dot notation
//           person.person_Name='kumar';
//           //bracket notation
//           person['person_Name']='parala';
//           let selection='person_Name';
//           person[selection]='yamuna';
//           console.log(person.person_Name);

//           //ARRAYS
//           let selectcolor = ['red','blue'];
//           selectcolor[2]= 20;
//           console.log(selectcolor.length);


//           //functions in java script

//           // performing a task
//           function greet(name, lastName){
//             console.log('hello '+name+' '+lastName);
//           }
//           greet('yuvan','sai');
//           greet('raju','yadav');

//           //calculating value
//           function square(number){
//             return number*number;
//           }

//           console.log(square(4));


//           //java script operators

//           //1.Arithmatic operators

//           let x=10;
//           let y=20;
//          console.log(x+y);
//           console.log(x-y);
//           console.log(x*y);
//           console.log(x/y);
//           console.log(x%y);
//           console.log(y**x)  //y to the power of x times 20 power10

// console.log(x++) // x++ means x=x+1
// console.log(x);

// console.log(--x); //x-- means x=x-1
// console.log(x--);
// console.log(x);

// x=x+5;
// x+=5; // in this case x=x+5

// x=x*3;
// x*=3;
// //relational operators in javascript
// x=1;
// console.log(x>0);
// console.log(x>=1);
// console.log(x<0);
// console.log(x<=2);

// //equality operators
// console.log(x===1);
// console.log(x!==1);

// // strict equality it is ensure that (type and values)
// console.log(1===1);//true
// console.log('1'===1);//false 

// //loose equality operator it is ensure that only value
// // convert right side value into left side
// //console.log(true==1) like true==true
// console.log(1==1);//true
// console.log('1'==1);//true
// console.log(true==1);//true

// //conditional or ternary operators
// //a customer has more than points 100,
// // they are gold customer, otherwise silver customer
// let points=100;
// let type=points>=100 ? 'gold':'silver';
// console.log(type);

// //logical operators

// //logical AND indiactes(&&)
// //it returns true  if both operands is TRUE otherwise false

// //console.log(true&&true); 
// let highIncome=true;
// let goodCreditScore=true;
// let eligibleForLoan=highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// //logical  OR (||)
// //returns TRUE if one of the Opreands is TRUE
// // returns FALSE if both operands is FALSE 
// let eligibleForLoan1=highIncome || goodCreditScore;
// console.log(eligibleForLoan1);

// // Not operator (!)
// getLoan=!eligibleForLoan ;
// console.log('eligible for loann',getLoan);
 
// // logoical oprarators
// false|| true;//true
// false||'naveen';//naveen
// false||1;//1
// //falsy (false) values are followed
// //undefined
// //null
// //0
// //''
// //notnumber
// //anything that is not falsy that is--> truthy
// false || 1 || 2 //1 ans   // this is short-curcuiting

// let userColor=undefined;
// let defaultColor='blue';
// let color=userColor||defaultColor;
// console.log(color)

// //betwise Operation

// // 1--> 00000001
// // 2--> 00000010
// //R---> 00000011  //ans 3
// //R(1&2)--> 00000000
// console.log(1|2); //(|) is represents the bitwise OR
// console.log(1&2); // (&) is represents the bitwise AND


// let a= 'red';
// let b='blue';

// let c=a;
// a=b;
// b=c;

// console.log(a);
// console.log(b);

//conrol flows

//is and Else

let hour=19;
if(hour>=6 && hour<12){

  console.log('good morning');

}
else if(hour>=12 && hour<18){
  console.log('good afternoon');
}

  else{
    console.log('good evening');
  }

  //switch case

  let role='guest';
switch(role){
  case 'guest':
    console.log('guest user');
    break;

    case 'moderator':
      console.log('moderator user')
      break;
      default:
        console.log('unknown user');
}
if(role==='guest') console.log('guest user');
else if(role==='moderator') console.log('moderator user');
else console.log('unknown user');

//loops

// //for loop
// for(let i=5;i>0; i--){
//   if(i%2!==0)
//   console.log(i);
// }

// //while loop
// let i=0;
// while(i<=5){
//   if(i%2!==0)
//   console.log(i);
//   i++
// }
// 

//do while
i=1
do{
  if(i%2!==0)
  console.log(i);
  i++;
  }while(i<5){
 if(i%2!==0)
  console.log(i);
}

//for-in
const person={
  name:'radhika',
  age:28
};

for(let key in person){
  console.log(key,person[key]);

}
console.log('  ')
const colors=['orange','purple','blue','grey'];
for(let index in colors){
  console.log(index,colors[index]);
}

//for-of

// for(let color of colors){
//   console.log(color);
// }
console.log('  ')

//break continue


// for(let l=1;l<10;l++){

//   if(l % 2 === 0){ 
//     continue; 
//   }
//   console.log(l);
// }

let l=1;
while(l<=10){
  if(l%2 === 0){
  l++;
  continue;}
  console.log(l);
  l++
}

//function addind two numbers;
// let a;
// let b;

function add( a, b){

  return a+b;
}

let c=add(10,20);
console.log(c);

function max(a,b){

  // if(a>b){
  //   console.log('max value' ,a);
  // }
  // else 
  // console.log(b);

//   if(a<b) return b;
//   return a;
// 
return (a>b) ? a:b

}
let d=max(3,2);
console.log(d);

function isLandScape(width,height){
  return (width<height);
}
console.log(isLandScape(100,600))
console.log('   ');

//input divisable by 3==fizz
//input divisable by 5==buzz
//input divisable by 3&5=fizzbuaa
//input not divisable by 3&5==input
//input not a number =='not a number' 



function fizzBuzz( input){
   if(typeof input!=='number') return NaN;
   if ((input%3===0)&&(input%5===0))
   return 'fizzbuzz';
   if(input%5===0) return 'buzz';
   if(input%3===0) return 'fizz';
   return input;
  
}
const output=fizzBuzz(false);
console.log(output);

//speed limit =70
//after 70 speed every 5 speed -->1 point
//math.floor(1.3) show 1
//after getting 12 points --->licence suspended

function checkSpeed(speed){
 const speedLimit=70;
 const kmperPoint=5
 if(speed<=speedLimit+kmperPoint){
   console.log('ok')
   return;
 }

 const point=Math.floor((speed-speedLimit)/kmperPoint);
 if(point>=12){
    console.log('licence is suspended');

  }
  else{console.log(point,'points');}
}


const outPutSpeed=checkSpeed(81);

function showNumber(limit){
  for(let x=0;x<=limit;x++){
    // if(x%2 !==0){
    //     console.log(x,'odd');
    //  }
    //  else{
    //    console.log(x,'even');
       
    //  }
    let message = (x%2 !==0) ? 'ODD':'EVEN';

    console.log(x,message); 
    
  }

}

showNumber(12);


//falsy values 
//undefine
//0
//null
// ''
//false
//NaN

const array=[0,1,2,3,4,'',null];
//console.log(array);

function countTruthy(array){
  let count=0;

  for(let value of array){
    if(value){
     count++; 
    }
  }
  return count;
}

console.log(countTruthy(array));

const movie={
  title:'a',
  releaseYear:2018,
  rating:4.5,
  director:'uma'
};
function showProperties(movie){
    for(let key in movie){
      if(typeof movie[key]==='string')
      console.log(key,movie[key]);
    }
 }

showProperties(movie);

//multiples of 3:3,6,9....
//multiples of 5: 5,10....
//sum of both multiples is 

function sum(limit){
   let c=0;
    for(let a=1;a<=limit;a++){
  // let b=0;
  //   if(a%3===0){
  //     b+=a;
  //     console.log(b);
  //   }
  //   if(a%5===0){
  //     c+=a;
  //     console.log(c);
  //   }
  // console.log(b+c);
  
  if(a%3===0||a%5===0){
    c+=a;
  
  }
  
}
console.log(c);

}
sum(10);
//    --------------------------//
const marks=[50,90,99];
//let count=0;
//let average=0;
// let sumOfMarks=0;
function caluclateGrade(marks){

// for(let i of marks){
//   sumOfMarks+=i;
//   //count++
// }
// let average=sumOfMarks/marks.length;
// console.log(average);
// if(average>1&&average<60)
// console.log('grade is "F"');
// else if(average>60&&average<70)
// console.log('grade is "D"');
// else if(average>70&&average<80)
// console.log('grade is "C"');
// else if(average>80&&average<90)
// console.log('grade is "B"');
// else if(average>90&&average<=100)
// console.log('grade is "A"');
let average=calculatingAverage(marks);

if(average<60) return 'F';
if(average<70) return 'D';
if(average<80) return 'C';
if(average<90) return 'B';
return 'A';
}

function calculatingAverage(marks){
  let sumOfMarks=0;
  for(let i of marks)
  sumOfMarks+=i;
  return sumOfMarks/marks.length;
}
console.log(caluclateGrade(marks));


function showStars(rows){
  for(let i=1;i<=rows;i++){
    let pattern='';
    for(let j=0;j<i;j++){
      pattern +='*';
    }
    console.log(pattern);
  }
}
showStars(7);

//--------------------------//
function showPrime(limit){

for(let number=2;number<=limit;number++)
  
  if(isPrime(number)) 
  console.log(number);

}
function isPrime(number){
 // let isPrime=true;
  for(let factor=2;factor<number;factor++)
    if(number%factor===0)
     // isPrime=false;
      return false;
    
  return number;
}
showPrime(7);