var array=[1,2,3,4,5]
var sum=0,average=0;
function f()
{
    for(let i=0;i<array.length;i++) sum=sum+array[i];
    average=sum/array.length;  
}

f()
console.log(average);
