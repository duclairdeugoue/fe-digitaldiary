import NotesView from './NotesView.js'

const app = document.getElementById('app');
const view = new NotesView(app, {
    
    onNoteAdd() {
        console.log("Let add a new note");
    },
    onNotesEdit(updatedNoteTitle, updateNoteBody) {
        console.log(updatedNoteTitle);
        console.log(updateNoteBody);
    }
})
