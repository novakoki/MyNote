var model = require('../model')
var NoteEditView = require('./view')
var NoteContentView = require('../NoteContent/view')
var NoteListView = require('../NoteList/view')

var bindEvt = function () {
  NoteEditView.$saveButton.addEventListener('click', function () {
    if (NoteEditView.editMode) {
      model.updateNote(NoteEditView.$inputTitle.value, NoteEditView.$editArea.value)
    } else {
      model.addNote(NoteEditView.$inputTitle.value, NoteEditView.$editArea.value)
    }
    NoteEditView.clear()
    NoteContentView.render(model.getCurrentNote())
    NoteListView.render(model.getNotes(), model.getCurrentTag())
  })

  NoteEditView.$cancelButton.addEventListener('click', function () {
    NoteEditView.clear()
    NoteContentView.render()
  })
}

module.exports = {
  init: function () {
    bindEvt()
  }
}
