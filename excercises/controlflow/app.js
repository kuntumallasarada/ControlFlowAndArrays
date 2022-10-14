console.log("Hello World");
var num;
function test(num){
if(num>=0)
{
    console.log( "num is positive");
}
if(num<0)
{
    console.log("num is negative");
}
}
test(10);

var num1=20;
if(num1>0)
{
if(num1>100)
{
    console.log( "number is positive and greater than 100");
}
else if(num1<100)
{
    console.log("number is positive and less than 100");
}
}
else if(num1<0)
    {
    console.log( "number is negative");
    }

    var marks=7;
    if(marks>=90)
    console.log("Grade A");
    if(marks>=80 && marks<90)
    console.log("Grade B");
    if(marks>=70 && marks<80)
    console.log("Grade C");
    if(marks>=55 && marks<70)
    console.log("Grade D");
    if(marks<55)
    console.log("Grade F");
