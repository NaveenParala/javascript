console.log('hello world');
1.//objecr oriented programming (OOP)

//creating object in JS
const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log('draw');
    }
};

circle.draw();//method calling through object

2.//factory function

function createCircle(radius) {
    return{
        radius,//radius:radius like this.radius=radius
        draw(){
            console.log('draw');
        }
         // above draw means same as   draw:function(){
       //console.log('draw');}
      };
}
const circle1=createCircle(1);
console.log(circle1);
const circle2=createCircle(2);
console.log(circle2);

//constructor function
//camel notation :oneTwoThree
//pascal notation :OneTwoThree

function Circle(radius) {
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}
const myCircle=new Circle(1);
console.log(myCircle);

//dynamic nature of objects

const circle3={
    radius:1
}
circle3.color='yellow';
circle3.draw=function(){
};
delete circle3.color;
delete circle3.draw;
console.log(circle3);

//Function are Object
function Circle1(radius) {
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}
Circle1.call({},1);//const crl=new Circle(1);
Circle1.apply({},[1,2,3,4]);const crl=new Circle(1,2,3);
console.log(Circle1.call({},1));

//valuetypes                reference type
//number,String             object ,function,arrays
//boolean,undefined
//null,symbol(added in ES 6)

let x=10;
let y=x;// y=10
x=20;  //x=20 i.e primitive or valuetype are store values
// but reference type store adrress of object 

let a={value:10}
let b=a; 

a.value=20;
//here we get a and b=20 bcz a and b referencing same object
//primitive are copied by their value
//object are copied by their reference


//enumerating properties of an object

const obj={
    radius:1,
    draw(){
        console.log('draw');
    }
};
for (let key in obj)
console.log(key,obj[key]);
for(let key of Object.keys(obj))
console.log(key, obj[key]);
for(let key of Object.entries(obj))
console.log(key);

if('radius' in obj ) console.log('wow');


const start = {
    radius:1,
    draw(){
        console.log('draw');
    }
};

// const another ={};
// for(let key in start)
// another[key]=start[key];

// console.log(another);
// another.draw();
//const another =Object.assign({},start);

const another={...start};
console.log(another);


//garbage collection

//math
const math=Math.random()
console.log(math);
console.log(Math.round(1.1));
console.log(Math.floor(1.9));


// String 

const message='this is my\n first message';

//temlpate literals

//object {}
//boolean true or false
//String '' ""
//te,
//template ` `
const name='sha'
const message1= 'hi'+ name +',\n';
const speed=
`hi ${3}${name},
thank u for joining my mailing list.
regards
naveen`;

//date
const now= new Date();
const date1= new Date('may 1 2020 9:00');
const date2=new Date(2018,4,12,9);
//now.setFullYear(2017);


//console.log(now.toDateString());
//console.log(now.toTimeString());
console.log(now.toISOString());

//exercise
const address={
 strret:'polumalla',
 city:'lingaiahpet',
 zipcode:'polumalla142'
};

function showAddress(address){
    for(let key in address)
    console.log(key,address[key]);
}

showAddress(address);
//creating factory function
function showFactoryAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    }
}
console.log(showFactoryAddress('a','b','c'));

//constructors
function Address(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}

const values1=new Address('polu','malla','polumalla')
const values2=new Address('polu','malla','polumalla')
const values3=values1;

console.log(values1);

function areEqual(values1,values2){
    return values1.street===values2.street&&
    values1.city===values2.city&&
    values1.zipcode===values2.zipcode;
}

function areSame(values1,values2){
    return values1===values2;
}
console.log(areEqual(values1,values2));
console.log(areSame(values1,values2));
console.log(areSame(values1,values3));


// let post ={
//     title:'a',
//     body:'b',
//     author:'c',
//     views:10,
//     comments:[
//         {author :'a',body:'b'},
//         {author:'c',body:'d'}
//     ],
//     isLive:true
// };
//console.log(post);

function Post(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}
 let post=new Post('a','b','c');
console.log(post)








