
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const note = require('./note.js');

//To access the command line arguments
//console.log(process.argv);

var command = process.argv[2];
//argv._[0]; same as process.argv[2] but using yargs
const argv = yargs.argv;

if(command === 'add'){
    var notes = note.addNote(argv.title,argv.body);
    if(notes){
        console.log("Node added successfully");
        console.log(`Title : ${notes.title} `);
        console.log("----");
        console.log(`Body : ${notes.body} `);
    }
    else{
        console.log("Unsuccessfull");
    }
}
else if(command === 'list'){
    console.log("Listing Notes");
    note.getAll();
}
else if(command === 'read'){
    console.log("Reading Note");
    note.getNote(argv.title);
}
else if(command === 'remove'){
    var flag = note.remove(argv.title);
    if(flag){
        console.log("Note is Removed");
    }
    else{
        console.log("Sorry, Something went wrong");
    }
}
else{
    console.log("Command not recognised");
}