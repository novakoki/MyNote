module.exports = {
  init: function (notes, currentTag) {
    this.tagName = document.getElementById('note-tag');
    this.noteList = document.getElementById('note-list');
    this.new_note = document.getElementById('new-note');
    this.render(notes, currentTag);
  },
  render: function (notes, currentTag) {
    this.new_note.onclick = function () {
      this.onclick = 'null';
      NoteEditView.init();
      NoteEditView.addNote();
    };

    this.tagName.innerHTML = currentTag || '';
    this.noteList.innerHTML = '';
    // bad
    if (!currentTag) {
      this.new_note.style.display = 'none';
    } else {
      this.new_note.style.display = 'block';
    }
    if (notes) {
      for (var i = 0; i < notes.length; i++) {
        this.newNote(notes[i]);
      }
    }
  },
  newNote: function (note) {
    var elem = document.createElement('li');
    elem.innerHTML = '<div class="row"><h3 class="col-5">'
      + note.name
      + '</h3>'
      + '<div class="col-1"><a href="#" class="button delete-note">x</a></div></div>';
    if (note.content.length > 100)
      elem.innerHTML += '<a href="#">' + note.content.substring(0, 80).replace(/[^A-Za-z0-9\ \,\;\.\?\u2E80-\uFE4F]/ig, '') + '...</a>';
    else
      elem.innerHTML += '<a href="#">' + note.content.replace(/[^A-Za-z0-9\ \,\;\.\?\u2E80-\uFE4F]/ig, '') + '</a>';
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
