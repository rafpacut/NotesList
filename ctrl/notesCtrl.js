angular.module('notesList')

.controller('notes_ctrl', ['$scope', 'storageMethod', function( $scope, storageMethod ) {


	storageMethod.init();

	function detectImages(note) {
	
		var imgRegex = /https?:\/\/.*\.(?:png|jpg)/i;
		var imgSources = note.match(imgRegex);
		return imgSources;
	}

	$scope.notes = storageMethod.retrieve();


	$scope.editNote = function(noteText, index) {
		$scope.notes[index] = {
			text:	noteText,
			imgSources: detectImages(noteText)
		};
	};

	$scope.deleteNote = function(index) {
		$scope.notes.splice(index, 1);
	}

	$scope.addNote = function(noteText) {

		var note = { 
			text: noteText,
			imgSources: detectImages(noteText)
		}

		$scope.notes.push(note);
		storageMethod.store($scope.notes);
	};



}]);
