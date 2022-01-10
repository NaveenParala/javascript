// function declaration
function walk(){
    console.log('walk');
}
walk();
//normal function expression function let run =function walk(){};

//function expression(anonnymous)    
//run();   //here error function assign to variable bz variable using before initializing
let run=function(){                   
    console.log('run');     
};
let move=run;//move  and run pointing same function 
run();
move();

// hoisting is a proccess of moving function to top of the 
//file this done by js engine.

//Arguements
function sum(a,b){
    let total=0;
    for(let key of arguments)
    total += key ;
    console.log(total);
    // c=a+b;
    // console.log(c);
}
sum(1,2,3,4,5,15);

//the rest Operator means ...args

console.log(som(1,2,3,4,3,5));
function som(...args){
//    let total=0;
//     for(let key of args)
//     total += key;
//     console.log(total);
    return args.reduce((a,b) => a + b);
}
//uses of rest operator
function shoping(discount,...prices){
    let total=0;
   total= prices.reduce((a,b) => a+b);
    return total * (1-discount);
}

console.log(shoping(0.3, 20,30));

//defualt partametear

function interest(p,t,r=3.5){
    // t=t|| 3.5;
    // r=r||5;
    let interest=p*r*t/100;
    return interest;
}

console.log(interest(10000,5));

//getters and getters

const person={
    firstName:'Naveen',
    lastName:'kumar',
    //getters
    get fullName(){        
        return `${person.firstName} ${person.lastName}`;
    },
    //setters
    set fullName(value){
       const parts=value.split(' ');
       this.firstName=parts[0];
       this.lastName=parts[1];
    }
};
person.fullName='mahesh yadav'
console.log(person);

// try catch
const person1={
    firstName:'Naveen',
    lastName:'kumar',
    //setters
    set fullName(value){
        if(typeof value!=='string')
        throw new Error(' value is not a string ');

        const parts=value.split(' ');
        if(parts.length !==2)
            throw new Error('enter first and last name')

       this.firstName=parts[0];
       this.lastName=parts[1];
    }
};
try{
    person1.fullName='radhika kumari';
}
catch (e) {
    alert(e);
}
console.log(person1);

//local vs Global scope

//var vs let
//var ==> function scope variable
//let const ==> blocl scope variable

function start(){
    for(let i=0;i<5;i++){
        console.log(i);//out put 0,1,2,3,4
    }
    //console.log(i)//getting error bz block scope
    for(var i=0;i<5;i++){
        console.log(i);//0,1,2,3,4
    }
    console.log(i)//not getting error bz function scope 
    //out put 5 also get
}
start();

// this keyword
const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
       // const self=this;
        this.tags.forEach(tag => 

            console.log(this.title,tag));
    }
};

video.showTags();

//exercise are aof circle
const circle={
    radius:2,
 get area(){
      return Math.PI* this.radius* this.radius
    }
    
}


console.log(circle.area);























