export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNotesEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNotesEdit = onNotesEdit;
        this.onNoteDelete = onNoteDelete;

        this.root.innerHTML = `
            <div class="notes__sidebar">
                <div class=notes__add>
                    <button class="notes__add-btn" type="button">Add Notes</button>
                </div>
                <div class="notes__list"> </div>
            </div>
            <div class="notes__preview">
                <input type="text" class="notes__title" placeholder="New Note">
                <textarea class="notes__body">Take notes...</textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".notes__add-btn");
        const inputTitle = this.root.querySelector(".notes__title");
        const inputBody = this.root.querySelector(".notes__body");

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inputTitle, inputBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedNoteTitle = inputTitle.value.trim();
                const updateNoteBody = inputBody.value.trim();

                this.onNotesEdit(updatedNoteTitle, updateNoteBody);
            });
        });

        // TODO: hide the note preview by default
    }
} 
