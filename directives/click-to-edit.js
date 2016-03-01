angular.module('notesList')

.directive('clickToEdit', function() {


		var editTemplate = '<div class="click-to-edit">' + 
					'<div ng-hide="view.editorEnabled">'+
						'{{note.text}}' + '<br>' +
						'<button ng-click="enableEditor()">Edit</button>' +
						'<button ng-click="deleteNote($index)">Delete</button>' +
						'</div>' + 
							'<div ng-show="view.editorEnabled">' +
								'<input ng-model="note.text">' +
								'<button ng-click="editNote(note.text, $index);disableEditor()">Save</button>' +
								' or ' +
								'<button ng-click="disableEditor()">Cancel</button>' +
							'</div>' +
					'</div>';

		return {
			restrict: 'A',
			replace:  true,
			template: editTemplate,
			scope: true,
			controller: function($scope) {
				$scope.value = "=clickToEdit";
				$scope.view = {
					editableValue:	$scope.value.text,
					editorEnabled:	false
				};


			$scope.enableEditor = function() {
				$scope.view.editorEnabled = true;
				$scope.view.editableValue = $scope.value.text;
			};

			$scope.disableEditor = function() {
				$scope.view.editorEnabled = false;
			};

			}}});



