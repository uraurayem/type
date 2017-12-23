class User {
    userName: string ; 
    userAge : number ; 
     
}
var user:User = new User() ; 
user.userName = "홍길동";
user.userAge = 33; 

class UserTest{
    users:Array<User> = [] ; 
    public addUser(user:User):void { 
        this.users.push(user);
    }
    public printUsers():void { 
        console.log(JSON.stringify(this.users));
    }
    public getUser(idx:number):User { 
         return this.users[idx];

    }
}

var ut = new UserTest();
ut.addUser(user);
user = new User() ; 
user.userName = "test";
user.userAge = 22; 
ut.addUser(user);




var user2 = ut.getUser(1);
console.log(user2);

ut.printUsers();
