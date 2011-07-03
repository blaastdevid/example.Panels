var _ = require('common/util');

var app = this;

// When a view is used under Panels, events 'focus' and 'blur' are sent to indicate
// switching in and out of the page.

_.extend(exports, {
	':focus': function() {
		console.log('Switched INTO the third page.');
	},

	':blur': function() {
		console.log('Switched OUT OF the third page.');
	}
});
