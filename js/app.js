requirejs.config({

	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});


require(
	[
		'jquery',
		'model',
		'view',
		'controller'	
	],
	function($, Model, View, Controller) {
		$(function() {
			var firstToDoList = [];
			var model = new Model(firstToDoList);
			var view = new View(model);
			var controller = new Controller(model, view);
		});
	}
);
