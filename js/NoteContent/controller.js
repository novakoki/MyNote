var model = require('../model')
var NoteContentView = require('./view')
var NoteEditView = require('../NoteEdit/view')

var bindEvt = function () {
  NoteContentView.$editNote.addEventListener('click', function () {
    NoteContentView.clear()
    NoteEditView.render(model.getCurrentNote())
  })
}

module.exports = {
  init: function () {
    bindEvt()
  }
}
