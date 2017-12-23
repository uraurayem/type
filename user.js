var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
user.userName = "홍길동";
user.userAge = 33;
var UserTest = /** @class */ (function () {
    function UserTest() {
        this.users = [];
    }
    UserTest.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserTest.prototype.printUsers = function () {
        console.log(JSON.stringify(this.users));
    };
    UserTest.prototype.getUser = function (idx) {
        return this.users[idx];
    };
    return UserTest;
}());
var ut = new UserTest();
ut.addUser(user);
user = new User();
user.userName = "test";
user.userAge = 22;
ut.addUser(user);
var user2 = ut.getUser(1);
console.log(user2);
ut.printUsers();
//# sourceMappingURL=user.js.map