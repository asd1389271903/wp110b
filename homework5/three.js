var test;
function f(x)
{ 
    if(x==2) 
        {
            test=1;
        }
    else
    {
        for(let i=2;i<x;i++)
        {
            if(x%i==0) 
            {
                test=0;
                break;
            }
            else test=1;
        }    
    }
}

f(17)

if(test==1) console.log('true')
else console.log('false')