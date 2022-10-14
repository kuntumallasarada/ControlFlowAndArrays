console.log("Functions Lessson");
//function declaration
function one()

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
    console.log("Age : ${person.age}");
}
increaseAge(saradaNookala);
