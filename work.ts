interface Work{
    goForWork():void ; 
    doWorking():void ;
    goOut() :void ;
}


class Worker2 implements Work {
    goForWork():void {
        console.log("출근합니다.")
    }

    doWorking (): void { 
        console.log("일하는 중입니다.")
    }

    goOut (): void { 
        console.log("퇴근합니다.")
    }
    doTest(): void { 
        console.log("학생이 테스트를 봅니다.")
    }
}
class Student extends Worker2 {
    goForWork():void {
        console.log("등교 합니다.")
    }

    doWorking (): void { 
        console.log("공부하는 중입니다.")
    }

    goOut (): void { 
        console.log("하교합니다.")
    }
}
class Teacher extends Worker2 { 
    doWorking (): void { 
        console.log("가르치는 중입니다.")
    }

    doTest():void { 
        console.log("학생들을 테스트 합니다.");
    }
}

let s:Student = new Student();
let t:Teacher = new Teacher();

class WorkFactory {
    obj : Worker2 ;
    constructor (obj: Worker2 ) {
        this.obj = obj; 
    }
    printObjInfo():void { 
        this.obj.goForWork();
        this.obj.doWorking();
        this.obj.goOut();
    }
}
console.log("------------------------------------------------work----------------------------------");
let f1: WorkFactory = new WorkFactory ( s ) ;

f1.printObjInfo ();
f1 = new WorkFactory (t) 
f1.printObjInfo ();