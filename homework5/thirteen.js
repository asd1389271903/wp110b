class Ratio
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }

    add(x)
    {
        this.a=(r1.a*x.b)+(x.a*r1.b);
        this.b=r1.b*x.b;
        return r1.a+"/"+r1.b;//tostring的內容
    }
    sub(x)
    {
        this.a=(r1.a*x.b)-(x.a*r1.b);
        this.b=r1.b*x.b;
        return this.a+"/"+this.b;
    }
    mul(x)
    {
        this.a=r1.a*x.a;
        this.b=r1.b*x.b;
        return this.a+"/"+this.b;
    }
    div(x)
    {
        this.a=r1.a*x.b;
        this.b=r1.b*x.a;
        return this.a+"/"+this.b;
    }
}
var r1=new Ratio(1,3);
var r2=new Ratio(2,4);
var r3=r1.mul(r2);
console.log(r3);