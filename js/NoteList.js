module.exports = {
  init: function (notes, currentTag) {
    this.tagName = document.querySelector('.note-list h1');
    this.noteList = document.querySelector('.note-list ul');
    this.newNoteButton = document.querySelector('.new-note');
    this.render(notes, currentTag);
  },
  render: function (notes, currentTag) {
    // this.new_note.onclick = function () {
    //   this.onclick = 'null';
    //   NoteEditView.init();
    //   NoteEditView.addNote();
    // };

    this.tagName.innerHTML = currentTag || '';
    this.noteList.innerHTML = '';
    // bad
    if (!currentTag) {
      this.newNoteButton.style.display = 'none';
    } else {
      this.newNoteButton.style.display = 'block';
    }
    if (notes) {
      for (var i = 0; i < notes.length; i++) {
        this.newNote(notes[i]);
      }
    }
  },
  newNote: function (note) {
    var elem = document.createElement('li');
    elem.innerHTML = '<a href="#"><h3>' + note.name + '</h3><p>' + note.content + '</p></a>';
    // if (note == controller.getCurrentNote())
    //   elem.className = 'active';
    // elem.lastChild.addEventListener('click', (function (noteCopy) {
    //   return function () {
    //     controller.setCurrentNote(noteCopy);
    //     NoteListView.render();
    //     NoteContentView.render();
    //   };
    // })(note));
    // elem.firstChild.lastChild.firstChild.addEventListener('click', (function (noteCopy) {
    //   return function () {
    //     controller.removeNote(noteCopy);
    //     NoteListView.render();
    //     NoteContentView.render();
    //   };
    // })(note));
    this.noteList.appendChild(elem);
    return elem;
  }
};
