module.exports = {
  init: function (tags) {
    this.tagList = document.getElementById('tag-list');
    this.render(tags);
  },
  render: function (tags) {
    var i = 0;
    this.tagList.innerHTML = '';
    if (tags) {
      for (i = 0; i < tags.length; i++) {
        this.newTag(tags[i]);
      }
    }

    // document.getElementById('add-tag').onclick = function () {
    //   var elem = TagListView.newTag('');
    //   this.onclick = 'null';
    //   elem.firstChild.firstChild.innerHTML = '<input type="text" id="edit-tag" required="required" autofocus="autofocus" onfocus="this.select()" />';
    //   document.getElementById('edit-tag').addEventListener('keyup', function (e) {
    //     if (e.keyCode === 13) {
    //       controller.addTag(this.value);
    //       TagListView.render();
    //     }
    //   });
    // };
  },
  newTag: function (tag) {
    var elem = document.createElement('li');
    elem.innerHTML = '<div class="row"><div class="col-4"><a href="#" class="tag-name">'
      + tag
      + '</a></div><div class="col-1"><a href="#" class="edit-tag button">T</a></div><div class="col-1"><a href="#" class="delete-tag button">X</a></div></div>';
    // if (tag === controller.getCurrentTag()) {
    //   elem.className = 'active';
    // }
    // elem.firstChild.firstChild.firstChild.addEventListener('click', (function (tagCopy) {
    //   return function () {
    //     controller.setCurrentTag(tagCopy);
    //     TagListView.render();
    //     NoteListView.render();
    //     controller.setCurrentNote(null);
    //     NoteContentView.render();
    //   };
    // })(tag));
    // elem.firstChild.firstChild.nextSibling.firstChild.onclick = (function (tagCopy) {
    //   return function () {
    //     var editButton = document.getElementsByClassName('edit-tag button');
    //     console.debug(editButton);
    //     for (var i = 0; i < editButton.length; i++) {
    //       editButton[i].onclick = 'null';
    //       this.parentNode.previousSibling.innerHTML = '<input type="text" id="edit-tag" autofocus="autofocus" onfocus="this.select()" value="' + tagCopy + '"/>';
    //       document.getElementById('edit-tag').addEventListener('keyup', (function (tagCopy) {
    //         return function (e) {
    //           if (e.keyCode == 13) {
    //             controller.updateTag(tagCopy, this.value);
    //             TagListView.render();
    //             NoteListView.render();
    //           }
    //         };
    //         })(tagCopy));
    //   }
    // })(tag);
    // elem.firstChild.lastChild.addEventListener('click', (function (tagCopy) {
    //   return function () {
    //     controller.removeTag(tagCopy);
    //     TagListView.render();
    //     NoteListView.render();
    //   };
    // })(tag));
    this.tagList.appendChild(elem);
    return elem;
  }
};
