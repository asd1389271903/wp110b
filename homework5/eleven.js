class Ratio
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }

    tostring()
    {
        return this.a+"/"+this.b;
    }
}
var c=new Ratio(1,3);
console.log(c.tostring());