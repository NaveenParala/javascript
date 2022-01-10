const _map=new WeakMap();
// in ES we use Export keyword as just before class
 export class Circle{
     constructor(radius){
        _map.set(this,radius);

     }
     draw(){
       console.log('Circle radius with '+_map.get(this));
     }
 }
 //before Es6 we use like below
//module.exports=Circle;