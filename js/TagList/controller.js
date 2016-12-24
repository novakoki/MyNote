var model = require('../model')
var TagListView = require('./view')
var NoteListView = require('../NoteList/view')
var NoteContentView = require('../NoteContent/view')

var bindEvt = function () {
  TagListView.$tagList.addEventListener('click', function (e) {
    var target = e.target
    if (target.className === 'tag-name') {
      model.setCurrentTag(target.innerText)
      TagListView.render(model.getTags(), model.getCurrentTag())
      NoteListView.render(model.getNotes(), target.innerText)
      model.setCurrentNote(null)
      NoteContentView.render(null)
    } else if (target.className.indexOf('delete-tag') !== -1) {
      var tag = target.parentNode.parentNode.firstChild.firstChild.innerText
      model.removeTag(tag)
      TagListView.render(model.getTags(), model.getCurrentTag())
      NoteListView.render(model.getNotes(), model.getCurrentNote())
    }
  })

  TagListView.$tagList.addEventListener('dblclick', function (e) {
    var target = e.target
    if (target.className.indexOf('tag-name') !== -1) {
      var tag = target.innerText
      target.parentNode.innerHTML = '<input type="text" id="edit-tag" autofocus="autofocus" onfocus="this.select()" value="' + tag + '"/>'
      document.getElementById('edit-tag').onkeypress = function (e) {
        if (e.keyCode === 13) {
          if (this.value !== '') {
            model.updateTag(tag, this.value)
            TagListView.render(model.getTags(), model.getCurrentTag())
          } else {
            alert('Tag name can\'t be empty!')
          }
        }
      }
    }
  })

  TagListView.$newTagButton.addEventListener('click', function () {
    var elem = TagListView.newTag('')
    elem.innerHTML = '<input required="required" autofocus="autofocus" onfocus="this.select()" />'
    elem.firstChild.onkeypress = function (e) {
      if (e.keyCode === 13) {
        if (this.value !== '') {
          model.addTag(this.value)
          TagListView.render(model.getTags(), model.getCurrentTag())
        } else {
          alert('Tag name can\'t be empty!')
        }
      }
    }
  })
}

module.exports = {
  init: function () {
    TagListView.render(model.getTags(), model.getCurrentTag())
    bindEvt()
  }
}
