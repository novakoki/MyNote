/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(1);
	controller.init();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Todo: Bind event here
	var model = __webpack_require__(2);
	var TagListView = __webpack_require__(3);
	var NoteListView = __webpack_require__(4);
	var NoteContentView = __webpack_require__(5);

	module.exports = {
	  init: function () {
	    model.init();
	    TagListView.init(model.getTags());
	    NoteListView.init(model.getNotes(), model.getCurrentTag());
	    NoteContentView.init(model.getCurrentNote());
	  }
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	var currentTag = null;
	var currentNote = null;
	var notes = {};

	module.exports = {
	  init: function init() {
	    if (!localStorage.notes) {
	      notes = {
	        Example: [
	          {
	            name: 'Example',
	            content: 'Example'
	          }
	        ]
	      };
	      this.writeData();
	    } else {
	      this.readData();
	    }
	  },
	  readData: function () {
	    notes = JSON.parse(localStorage.notes);
	  },
	  writeData: function () {
	    localStorage.notes = JSON.stringify(notes);
	  },
	  // Get all notes of current tag
	  getNotes: function () {
	    if (currentTag) {
	      return notes[currentTag];
	    }
	    return null;
	  },
	  // Get all tags
	  getTags: function () {
	    return Object.keys(notes);
	  },
	  // Given name and content of a new note
	  addNote: function (name, content) {
	    var note = {
	      name: name,
	      content: content
	    };
	    notes[currentTag].push(note);
	    this.writeData();
	    this.setCurrentNote(note);
	  },
	  removeNote: function (note) {
	    var arr = notes[currentTag];
	    var flag = this.isCurrentNote(note);
	    arr.splice(arr.indexOf(note), 1);
	    if (flag) {
	      currentNote = null;
	    }
	    this.writeData();
	  },
	  updateNote: function (name, content) {
	    currentNote.name = name;
	    currentNote.content = content;
	    this.writeData();
	  },
	  // Given tag name of a new tag
	  addTag: function (tag) {
	    if (notes[tag]) {
	      alert('This tag exists!');
	    } else {
	      notes[tag] = [];
	    }
	    this.writeData();
	  },
	  removeTag: function (tag) {
	    var flag = this.isCurrentTag(tag);
	    delete notes[tag];
	    if (flag) {
	      currentTag = null;
	    }
	    this.writeData();
	  },
	  updateTag: function (tag, value) {
	    if (!value) {
	      alert("Can't be empty!");
	    } else if (tag === value) {
	      return;
	    } else if (notes[value]) {
	      alert('This tag exists!');
	    } else {
	      var flag = this.isCurrentTag(tag);
	      // Is this OK ?
	      notes[value] = notes[tag];
	      delete notes[tag];
	      if (flag) {
	        this.setCurrentTag(value);
	      }
	    }
	    this.writeData();
	  },
	  getCurrentTag: function () {
	    return currentTag;
	  },
	  getCurrentNote: function () {
	    return currentNote;
	  },
	  setCurrentTag: function (tag) {
	    currentTag = tag;
	  },
	  setCurrentNote: function (note) {
	    currentNote = note;
	  },
	  isCurrentTag: function (tag) {
	    return (tag === currentTag);
	  },
	  isCurrentNote: function (note) {
	    return (note === currentNote);
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  init: function (notes, currentTag) {
	    this.tagName = document.getElementById('note-tag');
	    this.noteList = document.getElementById('note-list');
	    this.new_note = document.getElementById('new-note');
	    this.render(notes, currentTag);
	  },
	  render: function (notes, currentTag) {
	    this.new_note.onclick = function () {
	      this.onclick = 'null';
	      NoteEditView.init();
	      NoteEditView.addNote();
	    };

	    this.tagName.innerHTML = currentTag || '';
	    this.noteList.innerHTML = '';
	    // bad
	    if (!currentTag) {
	      this.new_note.style.display = 'none';
	    } else {
	      this.new_note.style.display = 'block';
	    }
	    if (notes) {
	      for (var i = 0; i < notes.length; i++) {
	        this.newNote(notes[i]);
	      }
	    }
	  },
	  newNote: function (note) {
	    var elem = document.createElement('li');
	    elem.innerHTML = '<div class="row"><h3 class="col-5">'
	      + note.name
	      + '</h3>'
	      + '<div class="col-1"><a href="#" class="button delete-note">x</a></div></div>';
	    if (note.content.length > 100)
	      elem.innerHTML += '<a href="#">' + note.content.substring(0, 80).replace(/[^A-Za-z0-9\ \,\;\.\?\u2E80-\uFE4F]/ig, '') + '...</a>';
	    else
	      elem.innerHTML += '<a href="#">' + note.content.replace(/[^A-Za-z0-9\ \,\;\.\?\u2E80-\uFE4F]/ig, '') + '</a>';
	    // if (note == controller.getCurrentNote())
	    //   elem.className = 'active';
	    // elem.lastChild.addEventListener('click', (function (noteCopy) {
	    //   return function () {
	    //     controller.setCurrentNote(noteCopy);
	    //     NoteListView.render();
	    //     NoteContentView.render();
	    //   };
	    // })(note));
	    // elem.firstChild.lastChild.firstChild.addEventListener('click', (function (noteCopy) {
	    //   return function () {
	    //     controller.removeNote(noteCopy);
	    //     NoteListView.render();
	    //     NoteContentView.render();
	    //   };
	    // })(note));
	    this.noteList.appendChild(elem);
	    return elem;
	  }
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  init: function (note) {
	    this.noteContent = document.getElementById('note-content');
	    this.noteName = document.getElementById('note-name');
	    this.editButton = document.getElementById('edit-button');
	    this.render(note);
	  },
	  render: function (note) {
	    // bad
	    this.noteName.style['background-color'] = '#ee5c42';
	    this.editButton.style['background-color'] = '#ee5c42';
	    if (note) {
	      this.noteName.innerHTML = note.name;
	      this.noteContent.innerHTML = marked(note.content);
	      this.editButton.innerHTML = '<a href="#" id="edit-note" class="button">Edit</a>';
	      document.getElementById('edit-note').addEventListener('click', function () {
	        NoteEditView.init();
	        NoteEditView.editNote();
	      });
	    }
	    else {
	      this.clear();
	    }
	  },
	  clear: function () {
	    this.noteName.innerHTML = '';
	    this.noteContent.innerHTML = '';
	    this.editButton.innerHTML = '';
	  }
	};


/***/ }
/******/ ]);