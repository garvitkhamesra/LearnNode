
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
        note.displayNotes(notes);   
    }
    else{
        console.log("Unsuccessfull");
    }
}
else if(command === 'list'){
    var notes = note.getAll();
    console.log(`Printing ${notes.length} note(s). `);
    notes.forEach(function(notes) {
        note.displayNotes(notes);
    }, this);
}
else if(command === 'read'){
    var notes = note.getNote(argv.title);
    if(notes){
        note.displayNotes(notes);           
    }
    else{
        console.log("Note not Found");
    }
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