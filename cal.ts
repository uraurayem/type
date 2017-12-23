class Cal { 
    private num1: number = 0 ; 
    private num2: number = 1 ;


    constructor(num1:number, num2:number) { 
        this.num1 = num1; 
        this.num2 = num2; 
    }
    private add():number{
        return this.num1 + this.num2; 
    }
    private minus():number { 
        return this.num1 - this.num2;
    }
    private multiple():number { 
        return this.num1 * this.num2; 
    }
    private divide():number {
        return this.num1/this.num2; 
    }
    public getCalResult(op:string):number {
        if ( op == "+") {
            return this.add();
        } else if (op == "-" ) {
            return this.minus();
        } else if (op == "*" ) {
            return this.multiple();
        }  else if (op == "/" ) {
            return this.divide();
        } 
        return NaN; 
    }
}

var c = new Cal(3,4);
console.log(c.getCalResult("k"));