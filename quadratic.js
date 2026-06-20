function quad(a,b,c){
let d= b*b-4*a*c;
if(d>0)
{
    var root1=((-b+ Math.sqrt(d))/(2*a));
    var root2=((-b- Math.sqrt(d))/(2*a));
    return "Roots are" + root1 + "and" + root2;
}
else if(d==0)
{
    var root = (-b/(2*a));
    return "Equal root is" +root;
}
else
{
    return "Imaginary roots";
}
}
module.exports=quad;