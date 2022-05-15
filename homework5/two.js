function f(x)
{
  var r=1
  for(var i=1;i<=x;i++)
  {
    r=r * i;
  }
  return r;
}

console.log('f(5)=',f(5))