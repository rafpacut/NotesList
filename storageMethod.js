angular.module('notesList', [])
.factory('storageMethod', function() {

		alert('in storageMethod.js');
		return {

			init: function(){},
			store: function(notes) {
				localStorage.setItem('notes', JSON.stringify(notes));
			},
			retrieve: function() {
				var notes = localStorage.getItem('notes');
				if(  notes != null )
					return JSON.parse(notes);
				else
					return [];
			}
		};

});

