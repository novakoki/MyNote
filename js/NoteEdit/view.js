var $this = document.querySelector('.note-edit')
var $inputTitle = document.getElementById('input-title')
var $saveButton = document.getElementById('save-button')
var $cancelButton = document.getElementById('cancel-button')
var $editArea = document.getElementById('edit-area')

module.exports = {
  //   this.edit_area.onpropertychange = function () {
  //     this.style.height = this.scrollHeight + 'px';
  //   };
  //   this.edit_area.oninput = function () {
  //     this.style.height = this.scrollHeight + 'px';
  //   };
  // },
  $saveButton: $saveButton,
  $cancelButton: $cancelButton,
  $inputTitle: $inputTitle,
  $editArea: $editArea,
  editMode: false,
  render: function (note) {
    if (note) {
      $inputTitle.value = note.name
      $editArea.value = note.content
      this.editMode = true
    } else {
      $inputTitle.value = ''
      $editArea.value = ''
      this.editMode = false
    }
    $this.style.display = 'block'
    $inputTitle.focus()
  },
  clear: function () {
    $this.style.display = 'none'
  }
}
