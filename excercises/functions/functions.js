console.log("Functions Lessson");
//function declaration
/*function one()

{
    return "one";
}
console.log(one());

//function expression
const two=() =>{
    return 2;
}

console.log(two());

const saradaNookala={
    name: "Sarada",
    occupation:"student",
    age:44
}

const increaseAge = (person) => {
    person.age +=1;
    console.log(`Age : ${person.age}`); // Template literals uses back tick not single or double quotations
}
increaseAge(saradaNookala);*/

function areBothEven(n1,n2)
{
    return !(n1 % 2) && !(n1 % 2);
}
 console.log(areBothEven(3,7));

 


 /*let maria = getDevObject("Maria","HTML","CSS","JavaScript","JQuery");
 
 function getDevObject(name){
    let skills=[];
    for(let i=1; i<arguments.length; i++)
    {
        skills.push(arguments[i]);
    }
    return{
        devName: name,
        jobSkills: skills

    }
 }
 console.log(getDevObject(maria));*/

/* const sayName = (name) => {
    console.log('Hello my name is ' + name);
 
 }
 sayName("Nash");
 sayName("Ash");

 const calculateAreaOfSquare = (length, height)=>{
    
    let sqft =length*height;
    console.log(`Area is ${sqft} sqft`);
 }

 calculateAreaOfSquare(32,23);*/

 const areaOfTriangle = (width,height) =>{
    let area = 0.5 * width * height;
    console.log(`Area of Triangle with  width ${width} and height ${height} is ${area} sqft`);
 }

 areaOfTriangle(2,3);

 const areaOfCircle = (radius) =>{
    let area = 3.14 * radius *radius;
    console.log(`Area of Circle with radius ${radius} is ${area} sqft`);
 }

 areaOfCircle(2,3);

const planetHasWater = function(planet){
    if (planet.toLowerCase() ==="earth"|| planet.toLowerCase() ==="mars")
    console.log("true");
    else console.log("false");
    
} 
planetHasWater("Earth");
planetHasWater("Saturn");
