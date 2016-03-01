angular.module('notesList', [])

.controller('notes_ctrl', ['$scope', function( $scope ) {

	function detectImages(note) {
	
		var imgRegex = /https?:\/\/.*\.(?:png|jpg)/i;
		var imgSources = note.match(imgRegex);
		return imgSources;
	}

	var init = function(){};
	var store = function(notes) {
		localStorage.setItem('notes', JSON.stringify(notes));
	};

	var retrieve = function() {
		var notes = localStorage.getItem('notes');
		if(  notes != null )
			return JSON.parse(notes);
		else
			return [];
	};

	var localStorageMethod = new storageMethod(init, store, retrieve);
	$scope.notes = localStorageMethod.retrieve();

	$scope.addNote = function(noteText) {

		var note = { 
			text: noteText,
			imgSources: detectImages(noteText)
		}

		$scope.notes.push(note);
		localStorageMethod.store($scope.notes);
	};



}]);
