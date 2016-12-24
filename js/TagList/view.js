var $tagList = document.querySelector('.tag-list ul')
var $newTagButton = document.querySelector('.new-tag')

module.exports = {
  $tagList: $tagList,
  $newTagButton: $newTagButton,
  render: function (tags, currentTag) {
    var i = 0
    var elem = null
    $tagList.innerHTML = ''
    if (tags) {
      for (i = 0; i < tags.length; i++) {
        elem = this.newTag(tags[i])
        if (tags[i] === currentTag) {
          var $tagName = elem.querySelector('.tag-name')
          $tagName.className += ' active'
        }
      }
    }
  },
  newTag: function (tag) {
    var elem = document.createElement('li')
    // elem.innerHTML = '<a href="#" class="tag-name">' + tag + '</a>'
    elem.innerHTML = '<div class="row"><div class="col-5"><a href="#" class="tag-name">' + tag + '</a></div><div class="col-1"><a href="#" class="delete-tag button">X</a></div></div>'
    $tagList.appendChild(elem)
    return elem
  }
}
