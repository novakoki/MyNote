var $tagName = document.querySelector('.note-list h1')
var $noteList = document.querySelector('.note-list ul')
var $newNoteButton = document.querySelector('.new-note')

module.exports = {
  $tagName: $tagName,
  $noteList: $noteList,
  $newNoteButton: $newNoteButton,
  render: function (notes, currentTag) {
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
    elem.innerHTML = '<a href="#" class="note-name"><h3>' + note.name + '</h3><i class="delete-note">x</i><p>' + note.content + '</p></a>'
    $noteList.appendChild(elem)
    return elem
  }
}
