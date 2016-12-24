var $tagName = document.querySelector('.note-list h1')
var $noteList = document.querySelector('.note-list ul')
var $newNoteButton = document.querySelector('.new-note')

module.exports = {
  $tagName: $tagName,
  $noteList: $noteList,
  $newNoteButton: $newNoteButton,
  render: function (notes, currentTag) {
    // this.new_note.onclick = function () {
    //   this.onclick = 'null'
    //   NoteEditView.init()
    //   NoteEditView.addNote()
    // }

    $tagName.innerHTML = currentTag || ''
    $noteList.innerHTML = ''
    // bad
    if (!currentTag) {
      $newNoteButton.style.display = 'none'
    } else {
      $newNoteButton.style.display = 'block'
    }
    if (notes) {
      for (var i = 0; i < notes.length; i++) {
        this.newNote(notes[i])
      }
    }
  },
  newNote: function (note) {
    var elem = document.createElement('li')
    elem.innerHTML = '<a href="#" class="note-name"><h3>' + note.name + '</h3><p>' + note.content + '</p></a>'
    // if (note == controller.getCurrentNote())
    //   elem.className = 'active'
    // elem.lastChild.addEventListener('click', (function (noteCopy) {
    //   return function () {
    //     controller.setCurrentNote(noteCopy)
    //     NoteListView.render()
    //     NoteContentView.render()
    //   }
    // })(note))
    // elem.firstChild.lastChild.firstChild.addEventListener('click', (function (noteCopy) {
    //   return function () {
    //     controller.removeNote(noteCopy)
    //     NoteListView.render()
    //     NoteContentView.render()
    //   }
    // })(note))
    $noteList.appendChild(elem)
    return elem
  }
}
