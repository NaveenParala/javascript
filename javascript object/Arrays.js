
const number=[2,3,];

// add at end of the array

number.push(4,5);
//const last=number.pop();


//adding at start of the Array

//number.unshift(0,1);
//const first=number.shift();
//console.log(first);

//middle of


//number.splice(2,0,'a','b');
number.splice(2,0);
console.log(number);

const number1=[1,2,3,1,4];
console.log(number1.indexOf(1,1));
console.log(number1.lastIndexOf(2))
console.log(number1.indexOf(1) !==3);
console.log(number1.includes(1))

const courses=[
    {id:1,name:'a'},
    {id:2,name:'b'}
];

// const course=courses.find(function(course){
//     return course.name ===  'b';
// });
//applying arrow function
const course=courses.find(course => course.name ==='b');
console.log(course);

 //ways to an empty an array

let number2=[1,2,3,4];
let another=number2;

//solution 1
//number2=[];

//solution 2
number2.length=0;

//solution 3
//number2.splice(0,number2.length);
// while(number2.length>0)
// number2.pop();


const first=[1,2,3  ];
const second=[4,5,6];

//const combined=first.concat(second);
const combined=['c',...first,'b',...second, 'a'];//adding new elements in b/w
const combined1=[...first,...second];

//const slice=combined.slice();
const copy=[...combined];
console.log(combined);
console.log(copy);

const number3=[1,2,3,4];
for(let key of number3)
console.log(key);
number3.forEach((number,index) => console.log(index,number));

const number4=[1,2,3];
const join=number4.join();
console.log(join);
const message='this is my first message';
const parts=message.split(' ');
console.log(parts);
const joined=parts.join('-');
console.log(joined);

//sorrting Array
 const numbers=[3,1,2,4];
 numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

const courses1=[
    {id:1,name:'node.js'},
   {id:2,name:'JavaScript.js'} ];
courses1.sort(function(a,b){
    //a<b==>-1
    //a>b==>1
    //a===b==>0
    const nameA=a.name.toLocaleLowerCase();
    const nameB=b.name.toLocaleLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(courses1);

//testing the element ofan Array

const number6=[-2,1,-1,2,3];
//every() check every element in Array
const isPositive=number6.every(function(value){
    return value>=0;
});

console.log(isPositive);
//some() check up only  match the criteria
const atleastOnePositive=number6.some(function(value){
    return value>=0;
})
console.log(atleastOnePositive);


//filtering an array

const filterArray=[1,-1,2,3,];
//  const result=filterArray.filter(function(value){
//     return value>=0;
// });
const result=filterArray.filter(value=> value>=0);
console.log(result);

//mapping an array
const mapArray=[1,-1,2,3];

const items=mapArray.
filter(n => n>=0)
.map(n=> ({value:n}));
console.log(items);

//reducing an array
const sumArray=[1,-1,2,3];
//user defined logic
let sum=0;
for(let n of sumArray)
sum += n;
//predefib=ned method
const sum1=sumArray.reduce(
    (accumulaor,currenValue) => accumulaor+currenValue);
console.log(sum1);

//Array exercises
function arrayFromRange(min, max){
    let count=[];
    //     while(min<=max){
    //    count.push(min);
    //     min++;
    // }
    for(let i=min;i<=max;i++){
        count.push(i);

    }
    return count;
}

console.log(arrayFromRange(-7,-3));
//second exercise
const array=[1,2,3,4];
function includes(array,serchElement){
    for(let key of array){
        if(key===serchElement) return true;
    }
    return false;

}

console.log(includes(array,6));
const array1=[1,2,3,4,1,1,1];

function except(array,excluded){
    const result=[];
    for(let key of array){
        if(!excluded.includes(key))
        result.push(key);
    }
    return result;
}
   console.log(except(array1,[1,2,3,4]));

  
   function getMax(array){
       if(array.length===0) return undefined;
    //    let max=array[0];
    //    for(let i=1;i<array.length;i++)
    //    if(array[i]>max)
    //    max=array[i];
    //    return max;
    return array.reduce((a,b)=>( a > b )? a : b);
    
   }
   console.log(getMax(array));


   const movies=[
       {title:'a',year:2018,rating:4.5},
       {title:'b',year:2018,rating:4.7},
       {title:'c',year:2018,rating:3},
       {title:'d',year:2017,rating:4.5}
];

const title=movies.filter(m=>m.year===2018 && m.rating>=4)
.sort((a,b)=> a.rating-b.rating)
.reverse().map(m=>m.title)

console.log(title);