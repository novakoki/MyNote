var $this = document.querySelector('.note-edit')
var $inputTitle = document.getElementById('input-title')
var $saveButton = document.getElementById('save-button')
var $cancelButton = document.getElementById('cancel-button')
var $editArea = document.getElementById('edit-area')

module.exports = {
  //   this.edit_area.onpropertychange = function () {
  //     this.style.height = this.scrollHeight + 'px';
  //   };
  //   this.edit_area.oninput = function () {
  //     this.style.height = this.scrollHeight + 'px';
  //   };
  // },
  $saveButton: $saveButton,
  $cancelButton: $cancelButton,
  $inputTitle: $inputTitle,
  $editArea: $editArea,
  editMode: false,
  render: function (note) {
    if (note) {
      $inputTitle.value = note.name
      $editArea.value = note.content
      this.editMode = true
    } else {
      this.editMode = false
    }
    $this.style.display = 'block'
    $inputTitle.focus()
  },
  clear: function () {
    $this.style.display = 'none'
  }
  // addNote: function () {
  //   this.save_button.onclick = function () {
  //     controller.addNote(NoteEditView.input_title.value, NoteEditView.edit_area.value);
  //     NoteListView.render();
  //     NoteContentView.render();
  //   };
  //   this.cancel_button.onclick = function () {
  //     NoteContentView.clear();
  //     NoteListView.render();
  //   };
  // },
  // editNote: function () {
  //   var note = controller.getCurrentNote();
  //   this.input_title.value = note.name;
  //   this.edit_area.value = note.content;
  //   this.save_button.onclick = function () {
  //     controller.updateNote(NoteEditView.input_title.value, NoteEditView.edit_area.value);
  //     NoteListView.render();
  //     NoteContentView.render();
  //   };
  //   this.cancel_button.onclick = function () {
  //     NoteContentView.render();
  //   };
  // }
}
