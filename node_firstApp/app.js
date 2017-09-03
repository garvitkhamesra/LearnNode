console.log("Staring Application");

const os = require('os');
const fs = require('fs');
const note = require('./note.js');

var user = os.userInfo();

//Template String
fs.appendFile('helloworld.txt',`Hello ${user.username}t! You are a young ${note.age} year old man.`, function (err) {
    if(err){
        console.log("Sorry, Unable to write to the file");
    }    
});

var res = note.addNote();
console.log(res);

var sum = note.Sum(5,6);
console.log('Sum: '+sum);

// fs.appendFileSync('filename','txt');
// for synchronous