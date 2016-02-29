var app = angular.module('notes', [] );

app.controller('notes_ctrl', ['$scope', function( $scope ) {

		$scope.notes = [];	
		$scope.note = '';

		$scope.addNote = function(note) {
			$scope.notes.push(note);
		}

	]);




