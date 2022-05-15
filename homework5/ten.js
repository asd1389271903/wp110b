function f(x,a,b)
{
    var sum=0;
    for(let i=a;i<b;i+=0.001)
    {
        sum+=x(i)*0.001;
    }
    return sum;
}

console.log(f(x=>x*x,0,1));