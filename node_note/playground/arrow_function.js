var user = {
    name: "Garvit",

    sayHi : ()=>{
        console.log(this.name);
    },
    sayHi2 () {
        console.log(this.name);
    }


}

user.sayHi();
user.sayHi2();