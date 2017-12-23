var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hello = /** @class */ (function () {
    function Hello() {
        this.str = '프라이빗';
        this.str2 = '퍼블릭';
    }
    Hello.prototype.test = function () {
        console.log("1234");
    };
    Hello.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Hello.prototype.hello = function () {
        var num1 = 3;
        var num2 = 5;
        var numArr = [1, 2, 3];
        var numArr2 = [1, 2, 3];
        var tp;
        tp = ["1", 2];
        var anyType;
        anyType = "3";
        anyType = 1;
        anyType = new Number(2);
        anyType = true;
        console.log("num1 + num2 = " + (num1 + num2));
    };
    return Hello;
}());
var h = new Hello();
h.hello();
h.str2 = " 나나나11112233";
var String2 = /** @class */ (function (_super) {
    __extends(String2, _super);
    // str : string ; 
    // constructor (str : string ) {
    //     this.str = str; 
    // }
    function String2(str) {
        return _super.call(this) || this;
    }
    String2.prototype.equals = function (str) {
        return str.toString() == _super.prototype.toString.call(this);
    };
    return String2;
}(String));
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString == this.toString();
    }
};
var str1 = "str";
var str2 = "str";
var str3 = new String("str");
var str4 = new String("str");
console.log(str1 == str2);
console.log(str1 === str2);
console.log(str3.equals(str4));
console.log("h.str : " + h.str2);
var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
;
var pc = Computer.Desktop;
var PcTest = /** @class */ (function () {
    function PcTest(pc) {
        this.pc = pc;
    }
    PcTest.prototype.pringPcInfo = function () {
        console.log("입력하신 pc 는 " + this.pc + " 입니다. ");
    };
    return PcTest;
}());
var pt = new PcTest(Computer.Laptop);
pt.pringPcInfo();
function returnExam() {
    console.log("전 test라는 스트링을 줍니다.");
    return "Test";
}
function voidExam() {
    console.log("전 아무것도 주지 않습니다.");
}
var str = returnExam();
document.getElementById("result_div").innerHTML = str;
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.move = function () {
        console.log("개가 걷습니다.");
    };
    Dog.prototype.run = function () {
        console.log("개가 뜁니다.");
    };
    Dog.prototype.sleep = function () {
        console.log("개가 잡니다.");
    };
    return Dog;
}());
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Husky.prototype.sleep = function () {
        console.log(this.name + "이 잡니다.");
    };
    return Husky;
}(Dog));
var dog = new Husky("시베리안 허스키");
// dog.move();
// dog.run() ;
// dog.sleep() ;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.move = function () {
        console.log("사람이 걷습니다.");
    };
    Person.prototype.run = function () {
        console.log("사람이 뜁니다.");
    };
    Person.prototype.sleep = function () {
        console.log("사람이 잡니다.");
    };
    return Person;
}());
var p = new Person();
var Factory = /** @class */ (function () {
    function Factory(obj) {
        this.obj = obj;
    }
    Factory.prototype.printObjInfo = function () {
        this.obj.move();
        this.obj.run();
        this.obj.sleep();
    };
    return Factory;
}());
var f = new Factory(p);
f.printObjInfo();
f = new Factory(dog);
f.printObjInfo();
var Worker2 = /** @class */ (function () {
    function Worker2() {
    }
    Worker2.prototype.goForWork = function () {
        console.log("출근합니다.");
    };
    Worker2.prototype.doWorking = function () {
        console.log("일하는 중입니다.");
    };
    Worker2.prototype.goOut = function () {
        console.log("퇴근합니다.");
    };
    Worker2.prototype.doTest = function () {
        console.log("학생이 테스트를 봅니다.");
    };
    return Worker2;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.goForWork = function () {
        console.log("등교 합니다.");
    };
    Student.prototype.doWorking = function () {
        console.log("공부하는 중입니다.");
    };
    Student.prototype.goOut = function () {
        console.log("하교합니다.");
    };
    return Student;
}(Worker2));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.doWorking = function () {
        console.log("가르치는 중입니다.");
    };
    Teacher.prototype.doTest = function () {
        console.log("학생들을 테스트 합니다.");
    };
    return Teacher;
}(Worker2));
var s = new Student();
var t = new Teacher();
var WorkFactory = /** @class */ (function () {
    function WorkFactory(obj) {
        this.obj = obj;
    }
    WorkFactory.prototype.printObjInfo = function () {
        this.obj.goForWork();
        this.obj.doWorking();
        this.obj.goOut();
    };
    return WorkFactory;
}());
console.log("------------------------------------------------work----------------------------------");
var f1 = new WorkFactory(s);
f1.printObjInfo();
f1 = new WorkFactory(t);
f1.printObjInfo();
