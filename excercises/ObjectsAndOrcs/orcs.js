// const adventurer={
//      name:"Sarada",
//      hitpoints:10,
//      belongings: ["sword","potion","tums"] ,
//      companion :{
//                      name : "peanut",
//                      type: "corgi"  , 
                                                       
//                    companion :{
//                          name : "tick",
//                          type :"parasite",
//                          belongings :["scuba tank", "rogan josh","health insurance"]
//                      }
//                 }
//  }
//  console.log(adventurer.belongings[0]);

// for(let i=0;i<adventurer.belongings.length;i++){
// console.log(adventurer.belongings[i]);
// }
// console.log(adventurer.companion);
// console.log(adventurer.companion.name);//values inside{}
// console.log(adventurer.companion.type);

// console.log(adventurer.companion.companion.type);
// console.log(adventurer.companion.companion.belongings[2]);


// const movies = [
//        { title :"Toy Story"
//     },
//     {title :"Star Wars"},
//     {title : "Lala Land"},

// ];
// console.log(movies);
// console.log(movies[0]);
// console.log(movies[1].title);

// for(let i=0;i<movies.length;i++){
//     console.log(movies[i]);
//     console.log(movies[i].title);
// }


// const foo ={
//     someArray :[1,2,3],
//     someObject : {
//         someProp : "oh hai,mark"
//     },
//     someMethod : () =>{
//         console.log("inside of method");
//     }
// }
//  console.log(foo.someObject.someProp);
//  console.log(foo.someArray[0]);
//  foo.someMethod();

// const foo1 = [
//     [1,2,3,4],//0
//     [5,6,7,8],//1
//     [9,10,11,12]//2
// ]
// console.log(foo1[1][2]);

// const foo2 =[
//     1,
//     "hi",
//     ()=>{
//         console.log("fun");
//     }
//     ];
//     console.log(foo2[2]());

    
    // const player ={
    //     name: "Josh the Great",
    //     health :1000,
    //     power:1000,
    //     stamina:1000
    // }
    // const bigBadBoss ={
    //     name: " Magnardo the Merciless",
    //     health :100000,
    //     power:100000,
    //     stamina:'Infinity'
    // }

//     class Character{
//         constructor(name,age,eyes,hair,loveCats=false,loveDogs)
//         {
//             this.legs =2;
//             this.arms=2;
//             this.name=name;
//             this.age=age;
//             this.hair;
//             this.loveCats=loveCats;
//             this.loveDogs=loveDogs||false;


//         }
// greet(otherCharacter){
//     console.log('hi'+othetcharacter+'!');
//     }
//     setHair(hairColor){
//         this.hair=hairColor;
//     }
//     smite(){
//         console.log("I smite thee you vile person");

//     }
// }

//     const p1=new Character("Sarada",89,"black","black",true,false);
//       const enemy = new Character();
//       p1.setHair("pink");
//      console.log(p1);


// class Hobbit extends Character{
//     constructor(name,age,eyes,hair){
//         super(name,age,eyes,hair);
//         this.skills=["thievery","speed","willpower"];
//     }
//     steal(){
       
//         console.log("let's get away!");
//     }
//     greet(otherCharacter){
//         console.log(`Hobbit says hello to ${otherCharacter}`)
//     }
//     smite(){
//         super.smite();
//         this.steal();
//         console.log("another one");
//     }
// }
// const frodo = new Hobbit("Mr.BAggins",33,"blue","brown");
// console.log(frodo);
//  console.log(frodo.smite());
//  console.log(frodo.steal());
//  console.log(frodo.greet("Sam"));
 

class Car{
    constructor(maker,serialNumber){
        this.serialnNumber=serialNumber;
        this.maker=maker;
    }
    drive(){
        console.log('vroom vroom');
    }
}

//factory class
class Factory{
    constructor(company){
        this.company=company;
        this.cars=[];
    }

generateCar(){
    const newCar = new Car(this.company,this.cars.length);
    this.cars.push(newCar);
}
findCar(index){
    return this.cars[index];
}
}
const tesla = new Factory('Tesla');
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0));


const porche = new Factory('porche');
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(porche.findCar(1));
