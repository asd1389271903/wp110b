var array=[[1,2],[3,4]],sum=[],sum2=[];
function f()
{
    for(let i=0;i<array.length;i++)
    {
        if(i==array.length-array.length) sum=array[i];
        else if(i==array.length-array.length+1) sum2=array[i]; 
    }
    for(let i=0;i<sum.length;i++)
    {
       sum[i]=sum[i]+sum2[i];
    }
}
f()
console.log(sum);
