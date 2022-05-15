var array=[],test=1;
function f(x)
{
    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
            x=x/i;
            array.push(i);
            i=2;
        }
        for(let j=2;j<x;j++)
        {
            if(x%j==0) 
            {
                test=0;
                break;
            }
            else test=1;
        }
    }
    array.push(x);
}

f(45)
console.log(array)