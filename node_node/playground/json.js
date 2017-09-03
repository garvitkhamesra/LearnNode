// var obj = {
//     name:'Garvit',
//     age:20
// };
// var str = JSON.stringify(obj);
// console.log(str);
// console.log(obj);

// Opposite of JSON.stringify
// var obj = '{"name" : "garvit"}';
// var jobj = JSON.parse(obj);
// console.log(jobj.name);

const fs = require('fs');

var originalNote = {
    title : "Some Title",
    body : "Some Body"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('note.json',originalNoteString);
var noteString = fs.readFileSync('note.json');

var note = JSON.parse(noteString);
