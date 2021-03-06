'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_form_wizard', ['$scope', function($scope){
		/* ---------- FuelUX Wizard ---------- */
		$('#myWizard').wizard();
		
		/* ---------- Datapicker ---------- */
		$('.datepicker').datepicker();

		/* ---------- Choosen ---------- */
		$('[data-rel="chosen"],[rel="chosen"]').chosen();

		/* ---------- Placeholder Fix for IE ---------- */
		$('input, textarea').placeholder();

		/* ---------- Auto Height texarea ---------- */
		$('textarea').autosize();  
	}]);