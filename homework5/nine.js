function f(x)
{   
    if(x==0 || x==1) return x;
    return f(x-1)+f(x-2);
}


console.log(f(7));