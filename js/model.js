var currentTag = null
var currentNote = null
var notes = {}

module.exports = {
  init: function init () {
    if (!localStorage.notes) {
      notes = {
        Example: [
          {
            name: 'Example',
            content: 'Example'
          }
        ]
      }
      this.writeData()
    } else {
      this.readData()
    }
  },
  readData: function () {
    notes = JSON.parse(localStorage.notes)
  },
  writeData: function () {
    localStorage.notes = JSON.stringify(notes)
  },
  // Get all notes of current tag
  getNotes: function () {
    if (currentTag) {
      return notes[currentTag]
    }
    return null
  },
  // Get all tags
  getTags: function () {
    return Object.keys(notes)
  },
  // Given name and content of a new note
  addNote: function (name, content) {
    var note = {
      name: name,
      content: content
    }
    notes[currentTag].push(note)
    this.writeData()
    this.setCurrentNote(note)
  },
  removeNote: function (note) {
    var arr = notes[currentTag]
    var flag = this.isCurrentNote(note)
    arr.splice(arr.indexOf(note), 1)
    if (flag) {
      currentNote = null
    }
    this.writeData()
  },
  updateNote: function (name, content) {
    currentNote.name = name
    currentNote.content = content
    this.writeData()
  },
  // Given tag name of a new tag
  addTag: function (tag) {
    if (notes[tag]) {
      alert('This tag exists!')
    } else {
      notes[tag] = []
    }
    this.writeData()
  },
  removeTag: function (tag) {
    var flag = this.isCurrentTag(tag)
    delete notes[tag]
    if (flag) {
      currentTag = null
    }
    this.writeData()
  },
  updateTag: function (tag, value) {
    if (!value) {
      alert("Can't be empty!")
    } else if (tag === value) {
      return
    } else if (notes[value]) {
      alert('This tag exists!')
    } else {
      var flag = this.isCurrentTag(tag)
      // Is this OK ?
      notes[value] = notes[tag]
      delete notes[tag]
      if (flag) {
        this.setCurrentTag(value)
      }
    }
    this.writeData()
  },
  getCurrentTag: function () {
    return currentTag
  },
  getCurrentNote: function () {
    return currentNote
  },
  setCurrentTag: function (tag) {
    currentTag = tag
  },
  setCurrentNote: function (note) {
    currentNote = note
  },
  isCurrentTag: function (tag) {
    return (tag === currentTag)
  },
  isCurrentNote: function (note) {
    return (note === currentNote)
  }
}
