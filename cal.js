var Cal = /** @class */ (function () {
    function Cal(num1, num2) {
        this.num1 = 0;
        this.num2 = 1;
        this.num1 = num1;
        this.num2 = num2;
    }
    Cal.prototype.add = function () {
        return this.num1 + this.num2;
    };
    Cal.prototype.minus = function () {
        return this.num1 - this.num2;
    };
    Cal.prototype.multiple = function () {
        return this.num1 * this.num2;
    };
    Cal.prototype.divide = function () {
        return this.num1 / this.num2;
    };
    Cal.prototype.getCalResult = function (op) {
        if (op == "+") {
            return this.add();
        }
        else if (op == "-") {
            return this.minus();
        }
        else if (op == "*") {
            return this.multiple();
        }
        else if (op == "/") {
            return this.divide();
        }
        return NaN;
    };
    return Cal;
}());
var c = new Cal(3, 4);
console.log(c.getCalResult("k"));
//# sourceMappingURL=cal.js.map