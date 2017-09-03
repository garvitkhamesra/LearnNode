console.log("Staring Application");

const os = require('os');
const fs = require('fs');

var user = os.userInfo();

//Template String
fs.appendFile('helloworld.txt',`Hello ${user.username} !`, function (err) {
    if(err){
        console.log("Sorry, Unable to write to the file");
    }    
});

// fs.appendFileSync('filename','txt');
// for synchronous