class Hello {
    public str:string = '프라이빗';
    public str2:string = '퍼블릭';
    private test():void { 
        console.log("1234");
    }
    private add(num1:number, num2 : number) :number { 
        return num1+num2;
    }
    public hello():void  {
        let num1: number = 3 ;
        let num2: number = 5;
        let numArr : number[] = [1,2,3];
        let numArr2 : Array<number> = [1,2,3];

        let tp : [string , number] ;
        tp = ["1", 2 ];

        let anyType : any ;
        anyType = "3";
        anyType = 1;
        anyType = new Number(2);
        anyType =  true; 

        console.log("num1 + num2 = " + (num1+num2 ));
    }
}

var h  = new Hello();
h.hello();
h.str2 =" 나나나11112233" ;
console.log("h.str : " + h.str2 ) ;
document.getElementById("result_div").innerHTML = h.str2 ;