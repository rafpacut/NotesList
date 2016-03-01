angular.module('notesList')

.controller('notes_ctrl', ['$scope', 'storageMethod', function( $scope, storageMethod ) {


	storageMethod.init();

	/*
	 * urlRegex: Get urls from noteText
	 * imgRegex: Get img url from urls
	 */
	function detectImages(noteText) {
	
		var imgRegex = /https?:\/\/.*\.(?:png|jpg)/gi;
		var urlRegex = /(https?:\/\/[^\s]+)/g;

		var urls = noteText.match(urlRegex);
		var urls_string = urls.toString();

		var imgSources = urls_string.match(imgRegex);
		var imgSources = imgSources.toString();
		var imgSources2 = imgSources.split(",");

		if(imgSources2 != null)
			return imgSources2;
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
