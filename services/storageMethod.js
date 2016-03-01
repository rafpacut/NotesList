angular.module('notesList', [])

/*
 * Implement different init, store and retrieve functions to change storage type
 */
.factory('storageMethod', function() {

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

