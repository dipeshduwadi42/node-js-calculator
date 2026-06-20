
function multitable(num,size)
{
    let i;
    for(i=1;i<=size;i++)
    {
        console.log(num + "x" + i +"=" +(num*i));
    }

}
module.exports = multitable;