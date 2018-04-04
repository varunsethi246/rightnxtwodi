import './vendorLoginForm.html';

Template.vendorLoginForm.events({
	'submit form.loginForm' : function(){
		event.preventDefault();

		FlowRouter.go('/claim');
	},
});