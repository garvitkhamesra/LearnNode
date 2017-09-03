
const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes_json.json');
        return JSON.parse(notesString);
    }
    catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes_json.json',JSON.stringify(notes));    
};

var addNote = (title,body)=>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var dupNotes = notes.filter((note)=>{
        return note.title === title;
    });

    if(dupNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};
var getAll = ()=>{

};
var getNote = (title) => {
    console.log("Reading : ",title);
};
var remove = (title) => {
    console.log("Removing : ",title);
};

module.exports = {
    addNote,
    //identical to addNote:addNote
    getAll,
    getNote,
    remove
};
