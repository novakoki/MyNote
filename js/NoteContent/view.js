var marked = require('marked')
var $this = document.querySelector('.note-content')
var $name = $this.querySelector('article')
var $content = $this.querySelector('h1')
var $editNote = $this.querySelector('.edit-note')

module.exports = {
  $editNote: $editNote,
  render: function (note) {
    if (note) {
      $name.innerHTML = note.name
      $content.innerHTML = marked(note.content)
      $this.style.display = 'block'
    } else {
      this.clear()
    }
  },
  clear: function () {
    $this.style.display = 'none'
    $name.innerHTML = ''
    $content.innerHTML = ''
  }
}
