var filter357=[];
function f(i,j)
{
    for(i;i<=j;i++)
    {
        if(i%3!=0)
        {
            if(i%5!=0)
            {
                if(i%7!=0)
                {
                    filter357.push(i);
                }
            }
        }
    }
    console.log(filter357);
}

f(5,15)

