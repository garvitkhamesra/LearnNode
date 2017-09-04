
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
    var notes = fetchNotes();
    notes = notes.filter((note)=> note.title === title);
    return notes[0];
};

var remove = (title) => {
    var notes = fetchNotes();
    var x = notes.length;
    notes = notes.filter((note) => {
        return note.title !== title;
    });
    var y = notes.length;
    saveNotes(notes);
    
    if(y!==x){
        return true;
    }
    else{
        return false;
    }
};

var displayNotes = (notes) =>{
    console.log(`Title : ${notes.title} `);
    console.log("----");
    console.log(`Body : ${notes.body} `);
};

module.exports = {
    addNote,
    //identical to addNote:addNote
    getAll,
    getNote,
    remove,
    displayNotes
};
