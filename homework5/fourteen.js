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
        this.a=this.a*x.a;
        this.b=this.b*x.b;
        return this.a+"/"+this.b;
    }
    div(x)
    {
        this.a=r1.a*x.b;
        this.b=r1.b*x.a;
        return this.a+"/"+this.b;
    }
    reduce()
    {
        var min;
        if(this.a>this.b) {min=this.b;}
        else if(this.a<this.b) {min=this.a;}

        for(let i=2;i<=min;i++)
        {
            if(this.a%i==0 && this.b%i==0)
            {
                this.a/=i;
                this.b/=i;
                min/=i;
                i=2;
            }
        }
        return this.a+"/"+this.b;
    }
    tostring()
    {
        return this.a+"/"+this.b;
    }
}

var r1=new Ratio(6,9);
var r2=new Ratio(2,4);
//var r3=r1.mul(r2); //因為即使沒要輸出 他也會先算完因此此導致了原來的r1受到汙染 = =
console.log(r1.reduce());