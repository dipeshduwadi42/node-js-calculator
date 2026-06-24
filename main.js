const readline = require("readline");
const add = require("./addition");
const sub = require("./substraction");
const product = require("./multiplication");
const division = require("./division");
const quad = require("./quadratic");
const multitable = require("./multitable");
const pwr = require ("./power");
const sqrt = require ("./sqrt");
const time = require ("./timeconverter");
const lengthconvert = require("./lengthconverter");
const useLastResult = require("./lastresult");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const state = { lastresult: null };
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
console.log("9. Time converter");
console.log("10. Length Converter");
console.log("11. Arithmetic opertaion on Previous Result");

r1.question("Enter the choice",(choice) =>{
choice = Number(choice);
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
        state.lastresult = pwr(Number(number), Number(power));
     console.log(+number+ " to the power " +power+ "=" + state.lastresult);
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
    state.lastresult = sqrt(nbr);
    console.log("Square root of "+nbr+"=",state.lastresult);
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
else if(choice == 9)
{
    console.log("1. Seconds to Hours,Minutes,Seconds");
    console.log("2. Hours,Minutes,Seconds to Seconds");
    r1.question("Enter options: ", (o) => {
        if(Number(o) == 1)
        {
            r1.question("Enter the seconds: ", (sec) => {
                console.log(time(Number(sec)));
                r1.question("Do you want to continue? (y/n): ", (ans) => {
                    if (ans.toLowerCase() === "y") menu();
                    else r1.close();
                });
            });
        }
        else if(Number(o) == 2)
        {
            r1.question("Enter hours: ", (h) => {
            r1.question("Enter minutes: ", (m) => {
            r1.question("Enter seconds: ", (s) => {
                let result = (Number(h) * 3600) + (Number(m) * 60) + Number(s);
                console.log("Total seconds = " + result);
                r1.question("Do you want to continue? (y/n): ", (ans) => {
                    if (ans.toLowerCase() === "y") menu();
                    else r1.close();
                });
            })
            })
            });
        }
        else
        {
            console.log("Invalid choice");
            menu();
        }
    });
}
else if(choice == 10)
{
    console.log("1. Kilometers to Meters");
    console.log("2. Meters to Kilometers");
    r1.question("Enter choice: ", (c) => {
        r1.question("Enter the value: ", (val) => {
            console.log(lengthconvert(Number(val), Number(c)));
            r1.question("Do you want to continue? (y/n): ", (ans) => {
                if (ans.toLowerCase() === "y") menu();
                else r1.close();
            });
        });
    });
}
else if(choice==11)
{
    useLastResult(r1, state, menu);
}
 else
 {
   r1.question("Enter the first number",(num1)=>{
   r1.question("Enter the second number",(num2)=>{
   num1=Number(num1);
   num2=Number(num2);
   switch(choice)
   {
    case 1:
        state.lastresult = add(num1, num2);
        console.log("Addition= ",state.lastresult);
        break;
     case 2:
        state.lastresult = sub(num1, num2);
        console.log("Substraction= ",state.lastresult);
        break;
    case 3:
        state.lastresult = product(num1, num2);
        console.log("Multiplication= ",state.lastresult);
        break;
    case 4:
        state.lastresult = division(num1, num2);
        console.log("Division=",state.lastresult);
        break; 
    case 6:
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
