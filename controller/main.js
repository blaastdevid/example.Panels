// By convention the utility methods in common/util are imported to variable _
var _ = require('common/util');

// Panels is accessed from ui/panels
var Panels = require('ui/panels').Panels;

// Catch the client application object to variable app
var app = this;

// Extend the exports object. This is essentially same as:
// exports[':load'] = function() {};
// This syntax avoids repeating the exports keyword.

_.extend(exports, {
	// Catch keypresses, and pass them to the Panels control.
	':keypress': function(key) {
		console.log('Keypress: ' + key);

		// Use View.get to get a control by name. 'panels' is defined
		// in the main.json view definition.
		var m = this.get('panels');
		if (m) {
			// Use Control.emit() to pass the keypress event.
			m.emit('keypress', key);
		}
	}
});

// Create a customized version of Panels using extend().
// This custom version simply adds three pages, using the three view definitions.
var MainPanels = Panels.extend({
	initialize: function(cdef) {
		// When adding an initialize() method to a custom control, remember
		// to call the original control's initialize() method through __super__:
		MainPanels.__super__.initialize.call(this);

		// Use Panels.add to add three pages. First argument is the page title,
		// second is name of the view used for that page.
		this.add('First', 'first');
		this.add('Second', 'second');
		this.add('Third', 'third');
	}
});

// Use app.defineControl() to declare a custom component - 'MainPanels' is now a valid
// control type in the json definition.
app.defineControl('MainPanels', MainPanels);
