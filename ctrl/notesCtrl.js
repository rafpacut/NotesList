var app = angular.module('notesList', [] );

app.controller('notes_ctrl', ['$scope', function( $scope ) {

		function detectImages(note) {
			
			var imgRegex = /https?:\/\/.*\.(?:png|jpg)/i;
			var imgSources = note.match(imgRegex);
			return imgSources;
		}

		$scope.notes = [];	

		$scope.addNote = function(noteText) {
			var note = { 
				text: noteText,
				imgSources: detectImages(noteText)
			}

			$scope.notes.push(note);
			console.log($scope.notes);
		};



}]);




