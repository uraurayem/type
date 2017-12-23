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
//console.log( h.str + " , " + h.str2 ); 
//# sourceMappingURL=hello.js.map