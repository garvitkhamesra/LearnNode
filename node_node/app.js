console.log("Staring Application");

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
    console.log("Adding Node");
    note.addNote(argv.title,argv.body);
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
    console.log("Removing Note");
    note.remove(argv.title);
}
else{
    console.log("Command not recognised");
}