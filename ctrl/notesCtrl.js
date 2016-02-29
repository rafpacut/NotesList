var app = angular.module('notesList', [] );

app.controller('notes_ctrl', ['$scope', function( $scope ) {

		$scope.notes = [];	
		$scope.images_src = [];

		$scope.addNote = function(note) {
			detect_images(note);
			$scope.notes.push(note);
			console.log($scope.images_src);
		};

		function detect_images(note) {
			
			var imgRegex = /https?:\/\/.*\.(?:png|jpg)/i;
			var imgSources = note.match(imgRegex);
			$scope.images_src.push(imgSources);

		}


}]);




