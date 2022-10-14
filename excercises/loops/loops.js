
console.log("loops");

// numbers from 10 to 1
let arr=[];
for(let i=10;i>=1;i--)
{
    arr.push(i);
    
}
console.log(arr);

//odd  numbers from 1 to 9
let arr1 = [];
for(let i=1;i<10;i+=2)
{
    arr1.push(i);
}
console.log( arr1);


//multiples of 3 starting at 6 and ending at 60
let arr2 = [];
for(let i=2;i<=20;i++){
    arr2.push(i*3);
}
console.log( arr2);

let arr3 = [];
for(i=1;i<7;i++)
{
    arr3.push("*");
    console.log(arr3.join());
}

//forEach
const movies = ['Atla','Everything Everywhere','Spirited Away'];
movies.forEach(function(movie){
    console.log(movie);
})

movies.forEach(function(movie,idx)
{
    console.log(idx +':'+movie);
})





