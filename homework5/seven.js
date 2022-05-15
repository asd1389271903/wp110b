var one=[[1,2,3],[3,2,1]],fin=[];
function f()
{
    for(let i=0;i<one[0].length;i++)
    {
        fin[i]=[]
        for(let j=0;j<one.length;j++) fin[i][j]=one[j][i];//11 12 13    11 12
    }                                                     //21 22 23    21 22 
}                                                                     //31 32
f()
console.log(fin);