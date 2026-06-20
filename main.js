const readline = require("readline");
const add = require("./addition");
const sub = require("./substraction");
const product = require("./multiplication");
const division = require("./division");
const quad = require("./quadratic");
const multitable = require("./multitable");
const pwr = require ("./power");
const sqrt = require ("./sqrt");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function menu()
{
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Quadratic Equation");
console.log("6.Multiplication table");
console.log("7.Power");
console.log("8. Square root");

r1.question("Enter the choice",(choice) =>{
 if(choice == 5)
 {
    r1.question("enter the coefficient of a",(a)=>{
    r1.question("Enter the coefficient of b",(b)=>{
    r1.question("Enter the coefficient of c",(c)=>{
    console.log(quad(Number(a),Number(b),Number(c)));
    r1.question("Do you want to continue? (y/n): ", (ans) => {
    if (ans.toLowerCase() === "y")
    {
        menu();
    } 
    else
    {
        r1.close();
    }
});
})
})
})
 }
 else if(choice==6)
 {
    r1.question("Enter the number ",(num)=>{
    r1.question("Enter the size of table",(size)=>{
    multitable(Number(num),Number(size));
    r1.question("Do you want to continue? (y/n): ", (ans) => {
    if (ans.toLowerCase() === "y")
    {
        menu();
    } 
    else
    {
        r1.close();
    }
   });
    })
    })
 }
 else if (choice==7)
{
    r1.question("Enter the number to find power of :",(number)=>{
    r1.question("Enter the power",(power)=>{
     let result=pwr(Number(number),Number(power));
     console.log(+number+ " to the power " +power+ "=" +result);
    r1.question("Do you want to continue? (y/n): ", (ans) => {
    if (ans.toLowerCase() === "y")
    {
        menu();
    } 
    else
    {
        r1.close();
    }
    });
    })
    })
}
else if(choice==8)
{
    r1.question("Enter the number to find square root of",(nbr)=>{
    nbr=Number(nbr);
    console.log("Square root of "+nbr+"=",sqrt(nbr));
    r1.question("Do you want to continue? (y/n): ", (ans) => {
    if (ans.toLowerCase() === "y")
    {
        menu();
    } 
    else
    {
        r1.close();
    }
   });
    })
}
 else
 {
   r1.question("Enter the first number",(num1)=>{
   r1.question("Enter the second number",(num2)=>{
   num1=Number(num1);
   num2=Number(num2);
   switch(choice)
   {
    case "1":
        console.log("Addition= ",add(num1,num2));
        break;
     case "2":
        console.log("Substraction= ",sub(num1,num2));
        break;
    case "3":
        console.log("Multiplication= ",product(num1,num2));
        break;
    case "4":
        console.log("Division=",division(num1,num2));
        break; 
    case "6":
        console.log("Multiplication Table=",multitable(num));
        break; 
    default :
    console.log("Invalid choice");      
    
   }
   r1.question("Do you want to continue? (y/n): ", (ans) => {
    if (ans.toLowerCase() === "y")
    {
        menu();
    } 
    else
    {
        r1.close();
    }
   });
   })});
 }
});
}
menu();
