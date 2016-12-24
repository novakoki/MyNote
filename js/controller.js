// TODO: Model.onchange = trigger(View.update)

var model = require('./model')
var TagListController = require('./TagList/controller')
var NoteListController = require('./NoteList/controller')
var NoteContentController = require('./NoteContent/controller')
var NoteEditController = require('./NoteEdit/controller')

module.exports = {
  init: function () {
    model.init()
    TagListController.init()
    NoteListController.init()
    NoteContentController.init()
    NoteEditController.init()
  }
}
