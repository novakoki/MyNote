var model = require('../model')
var NoteListView = require('./view')
var NoteContentView = require('../NoteContent/view')
var NoteEditView = require('../NoteEdit/view')

var bindEvt = function () {
  NoteListView.$noteList.addEventListener('click', function (e) {
    var target = e.target
    var notes = model.getNotes()
    var index = 0
    var item = null
    if (target.className === 'delete-note') {
      var name = target.parentNode.firstChild.innerText
      for (index in notes) {
        item = notes[index]
        if (item.name === name) {
          if (model.isCurrentNote(item)) {
            NoteEditView.clear()
            NoteContentView.render()
          }
          model.removeNote(item)
          NoteListView.render(model.getNotes(), model.getCurrentTag())
          break
        }
      }
    } else if (target.className === 'note-name' || target.parentNode.className === 'note-name') {
      if (target.parentNode.className === 'note-name') {
        target = target.parentNode
      }
      for (index in notes) {
        item = notes[index]
        if (item.name === target.firstChild.innerText) {
          model.setCurrentNote(item)
          NoteEditView.clear()
          NoteContentView.render(item)
          break
        }
      }
    }
  })

  NoteListView.$newNoteButton.addEventListener('click', function (e) {
    NoteContentView.clear()
    NoteEditView.render()
  })
}

module.exports = {
  init: function () {
    bindEvt()
  }
}
