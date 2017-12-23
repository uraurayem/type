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

class String2 extends String {
    // str : string ; 
    
    // constructor (str : string ) {
    //     this.str = str; 
    // }
    constructor(str:string) {
        super();
    }
    equals(str:any):boolean { 
        return str.toString() == super.toString();
    }
}

String.prototype.equals = function (str) {
    if( typeof str == "object") { 
        return str.toString == this.toString();
    }
}

let str1 : string = "str" ;
let str2 : string = "str" ; 
let str3 : String = new String("str") ; 
let str4 : String = new String("str") ; 


console.log( str1 == str2 );
console.log( str1 === str2 );

console.log( str3.equals(str4) ) ;
console.log("h.str : " + h.str2 ) ;



enum Computer{ Desktop , Laptop, Netbook } ;

let pc: Computer  = Computer.Desktop ; 

class PcTest { 
    pc: Computer ; 
    constructor (pc: Computer ) { 
        this.pc = pc ; 
    }
    pringPcInfo():void{
        console.log("입력하신 pc 는 "+ this.pc  + " 입니다. ") ;
    }

}
let pt:PcTest = new PcTest(Computer.Laptop) ;
pt.pringPcInfo();

function returnExam():string { 
    console.log("전 test라는 스트링을 줍니다.");
    return "Test";
}
function voidExam():void { 
    console.log("전 아무것도 주지 않습니다.");
}
let str = returnExam ();


document.getElementById("result_div").innerHTML = str ;

interface Action {
    move():void ; 
    run():void ; 
    sleep():void ;
}

class Dog implements Action {
    move():void  {
        console.log("개가 걷습니다.");
    }
    run():void { 
        console.log("개가 뜁니다.");
    }
    sleep():void { 
        console.log("개가 잡니다.");
    }

}

class Husky extends Dog {
    name: String ; 
    
    constructor ( name :string ) {
        super(); 
        this.name  = name ; 
    }

    sleep():void {
        console.log(this.name +"이 잡니다.");
    }
}

let dog :Action = new Husky ("시베리안 허스키");
// dog.move();
// dog.run() ;
// dog.sleep() ;



class Person implements Action {
    move():void  {
        console.log("사람이 걷습니다.");
    }
    run():void { 
        console.log("사람이 뜁니다.");
    }
    sleep():void { 
        console.log("사람이 잡니다.");
    }

}

let p:Action = new Person();
class Factory {
    obj : Action ;
    constructor (obj: Action ) {
        this.obj = obj; 
    }
    printObjInfo():void { 
        this.obj.move();
        this.obj.run();
        this.obj.sleep();
    }
}
let f: Factory = new Factory (p ) ;
f.printObjInfo ();
f  = new Factory(dog );
f.printObjInfo ();