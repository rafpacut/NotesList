var app = angular.module('notesList', [] );

app.controller('notes_ctrl', ['$scope', function( $scope ) {

		$scope.notes = [];	

		$scope.addNote = function(note) {
			$scope.notes.push(note);
		};


}]);




