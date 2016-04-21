// module.exports = {
//   init: function () {
//     NoteContentView.clear();
//     // Bad style
//     NoteContentView.noteName.style['background-color'] = 'white';
//     NoteContentView.editButton.style['background-color'] = 'white';
//     NoteContentView.editButton.innerHTML = '<div class="row"><div class="col-3"><a href="#" class="button" id="save-button">Save</a></div><div class="col-3"><a href="#" class="button" id="cancel-button">Cancel</a></div>';
//     NoteContentView.noteName.innerHTML = '<input type="text" placeholder="Title:" id="input-title"/>';
//     NoteContentView.noteContent.innerHTML = '<textarea id = "edit-area" spellcheck="false" placeholder="Content:"></textarea>';
//     this.input_title = document.getElementById('input-title');
//     this.save_button = document.getElementById('save-button');
//     this.cancel_button = document.getElementById('cancel-button');
//     this.edit_area = document.getElementById('edit-area');
//     this.edit_area.onpropertychange = function () {
//       this.style.height = this.scrollHeight + 'px';
//     };
//     this.edit_area.oninput = function () {
//       this.style.height = this.scrollHeight + 'px';
//     };
//   },
//   render: function () {

//   },
//   addNote: function () {
//     this.save_button.onclick = function () {
//       controller.addNote(NoteEditView.input_title.value, NoteEditView.edit_area.value);
//       NoteListView.render();
//       NoteContentView.render();
//     };
//     this.cancel_button.onclick = function () {
//       NoteContentView.clear();
//       NoteListView.render();
//     };
//   },
//   editNote: function () {
//     var note = controller.getCurrentNote();
//     this.input_title.value = note.name;
//     this.edit_area.value = note.content;
//     this.save_button.onclick = function () {
//       controller.updateNote(NoteEditView.input_title.value, NoteEditView.edit_area.value);
//       NoteListView.render();
//       NoteContentView.render();
//     };
//     this.cancel_button.onclick = function () {
//       NoteContentView.render();
//     };
//   }
// };
