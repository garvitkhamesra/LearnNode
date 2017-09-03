console.log('Starting Node.js');

var addNote = (title,body)=>{
    console.log('Node Added',title,body);
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
