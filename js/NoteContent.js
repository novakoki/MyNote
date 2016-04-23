module.exports = {
  init: function (note) {
    this.noteContent = document.querySelector('.note-content article');
    this.noteName = document.querySelector('.note-content h1');
    this.controlArea = document.querySelector('.control-area');
    this.render(note);
  },
  render: function (note) {
    if (note) {
      this.controlArea = '<a href="#" class="button edit-note">Edit</a>';
      this.noteName.innerHTML = note.name;
      this.noteContent.innerHTML = marked(note.content);
      // document.getElementById('edit-note').addEventListener('click', function () {
      //   NoteEditView.init();
      //   NoteEditView.editNote();
      // });
    } else {
      this.clear();
    }
  },
  clear: function () {
    this.noteName.innerHTML = '';
    this.noteContent.innerHTML = '';
    this.controlArea.innerHTML = '';
  }
};
