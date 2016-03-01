angular.module('notesList')

.directive('clickToEdit', function() {


		var editTemplate = '<div class="click-to-edit">' + 
					'<div ng-hide="view.editorEnabled">'+
						'{{note.text}}' +
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

			$scope.save = function() {
				$scope.value.text = $scope.view.editableValue;
				$scope.disableEditor();
			};
			}}});


















	//var editTemplate = '<textarea ng-show="isEditable" ng-dblclick="switchToText()" col=10 rows=10></textarea>';
	//var textTemplate = '<div ng-hide="isEditable" ng-dblclick="switchToEdit()">Preview</div>';

	//return {
	//	restrict: 'E',
	//	scope:	{},
	//	compile: function( tElement, tAttrs, transclude ) {
	//		console.log('inside compile function');
	//		var text = tElement.text();

	//		//tElement.append(editTemplate);

	//		var textElement = angular.element(textTemplate);
	//		tElement.append(textElement);

	//		return function( scope, element, attrs ) {
	//			scope.isEditable = true;
	//			scope.text = text;

	//			scope.switchToEdit = function() {
	//				console.log('switched to edit mode');
	//				textElement.html(scope.text);
	//				scope.isEditable = false;
	//			};

	//			scope.switchToText = function() {
	//				scope.isEditable = true;
	//			};
	//			





