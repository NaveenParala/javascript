function createCircle(radius){
  return{

      radius,
      draw : function(){
          console.log('draw');
      }
};
      
};
const circle=createCircle(2);
circle.draw();
console.log(circle.radius);

function Circle(radius){
 
this.radius=radius;
this.draw=function(){
    console.log('draw');
};
}
const another = new Circle(2);
const keys=Object.keys(circle);
console.log(keys);
if('radius' in circle)
console.log('vircle has a radius');


function StopWatch(){
    let startTime,endTime,running,duration=0
    this.start=function(){
        if(running)
        throw new Error('Stop watch already started.')
        running=true;
        startTime=new Date();
    };
    this.stop=function(){
        if(!running)
        throw new Error('stopwatch is not started.')
        running=false;
        endTime=new Date();
        const seconds=(endTime.getTime()-startTime.getTime())/1000;
        duration += seconds;
    };
    this.reset=function(){
        startTime=null;
        endTimen=null;
        running=false;
        duration=0;
    };
Object.defineProperty(this,'duration',{
    get : function(){
        return duration;
    }
}
   );
    console.log(endTime);

}
const ans=new StopWatch();

//prototypical inheritance
function Shape(color){
this.color=color;
}
Shape.prototype.duplicate=function(){
    console.log('duplicate');
}
//Circle1.prototype=Object.create(Shape.prototype)
//Circle1.prototype.constructor=Circle1;
function extend(Child,Parent){
     //inheriting 
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
}

function Circle1(radius ,color){
    //calling super constructor
    Shape.call(this,color);
    this.radius=radius;
};

extend(Circle1,Shape);

//method overriding
Circle1.prototype.duplicate=function(){
    //super method implementation
   // Shape.prototype.duplicate.call(this);
    console.log('duplicate cirlce');
}

Circle1.prototype.draw=function(){
    console.log('draw');
}

function Squre(size){
    this.size=size
}
extend(Squre,Shape);
const s=new Shape();
const c=new Circle1(1,'red');
const sq=new Squre(2);

//polymorphism

function PolyShape(){

}

PolyShape.prototype.duplicate=function(){
    console.log('duplicate');
}

function polyExtend(Child,Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
}
function PolyCircle(radius){
    this.radius=radius;
}
polyExtend(PolyShape,PolyShape);
PolyCircle.prototype.duplicate=function(){
    console.log('duplicate cirlce');
}
function PolySqure(size){
    this.size=size;
}
polyExtend(PolySqure,PolyShape);

PolySqure.prototype.duplicate=function(){
    console.log('duplicate Squre');
}

const pc=new PolyCircle(1);
const ps=new PolyShape();
const psq=new PolySqure(2);
const polyShape=[new PolyCircle(),
    new PolySqure()];
for(let pshape of polyShape)
  pshape.duplicate();


  //mixin
  function mixin(target, ...sources){
     Object.assign(target, ...sources);
  }
    //const person=Object.assign({},canEat,canWalk);
    //console.log(Person);
    //function Person(){
    //}
    //Object.assign(Person.prototype,canWalk,canEat)
    //const person=new Person();
  const canEat={
      eat:function(){
          this.hunger--;
          console.log('eating');
      }
  };
  const canWalk={
      walk:function(){
          console.log('walking');
      }
  };
  const canSwim={
    swim:function(){
        console.log('swimming');
    }
  };
function Person(){
}
  mixin(Person.prototype,canWalk,canEat);
  const person=new Person();
  console.log(person);
  function GoldFish(){
  }
  mixin(GoldFish.prototype,canEat,canSwim);
  const goldFish=new GoldFish();
  console.log(goldFish);

  //exercise
  function HtmlElement(){
      this.click=function(){
          console.log('clicked');
      }
  }
    HtmlElement.prototype.focus=function(){
        console.log('focused');
    }
function HtmlSelectElement(items=[]){
    this.items=items;
    this.addItems=function(item){
        this.items.push(item);
    }
    this.removeItems=function(item){
        this.items.splice(this.items.indexOf(item),1)
    }
    this.render=function(){
        return `<select>${this.items.map(item =>`<option>${item}</option>`).join('')}
        </select>`
    }
    

}

//HtmlSelectElement.prototype=Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype=new HtmlElement();
HtmlSelectElement.prototype.constructor=HtmlSelectElement;
const html=new HtmlSelectElement([1,2,3,4]);
console.log(html);
function HtmlImageSource(src){
 this.src=src;
 this. render=function(){
    return `<image "src=${this.src}" </image>`};
}

HtmlImageSource.prototype=new HtmlSelectElement();
const imageSrc=new HtmlImageSource(1);
console.log(imageSrc);
const ht=[new HtmlSelectElement([1,2,3,4]),new HtmlImageSource('http://')];
for(let htm of ht)
console.log(htm.render());