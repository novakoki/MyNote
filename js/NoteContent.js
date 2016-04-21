module.exports = {
  init: function (note) {
    this.noteContent = document.getElementById('note-content');
    this.noteName = document.getElementById('note-name');
    this.editButton = document.getElementById('edit-button');
    this.render(note);
  },
  render: function (note) {
    // bad
    this.noteName.style['background-color'] = '#ee5c42';
    this.editButton.style['background-color'] = '#ee5c42';
    if (note) {
      this.noteName.innerHTML = note.name;
      this.noteContent.innerHTML = marked(note.content);
      this.editButton.innerHTML = '<a href="#" id="edit-note" class="button">Edit</a>';
      document.getElementById('edit-note').addEventListener('click', function () {
        NoteEditView.init();
        NoteEditView.editNote();
      });
    }
    else {
      this.clear();
    }
  },
  clear: function () {
    this.noteName.innerHTML = '';
    this.noteContent.innerHTML = '';
    this.editButton.innerHTML = '';
  }
};
