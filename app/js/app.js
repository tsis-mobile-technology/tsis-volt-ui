'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'n3-charts.linechart'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'MyCtrl_dashboard'});
  $routeProvider.when('/ui-sliders-progress', {templateUrl: 'partials/ui-sliders-progress.html', controller: 'MyCtrl_ui_sliders_progress'});
  $routeProvider.when('/ui-nestable-list', {templateUrl: 'partials/ui-nestable-list.html', controller: 'MyCtrl_ui_nestable_list'});
  $routeProvider.when('/ui-elements', {templateUrl: 'partials/ui-elements.html', controller: 'MyCtrl_ui_elements'});
  $routeProvider.when('/calendar', {templateUrl: 'partials/calendar.html', controller: 'MyCtrl_calendar'});
  $routeProvider.when('/charts-flot', {templateUrl: 'partials/charts-flot.html', controller: 'MyCtrl_charts_flot'});
  $routeProvider.when('/charts-others', {templateUrl: 'partials/charts-others.html', controller: 'MyCtrl_charts_others'});
  $routeProvider.when('/charts-xcharts', {templateUrl: 'partials/charts-xcharts.html', controller: 'MyCtrl_charts_xcharts'});
  $routeProvider.when('/file-manager', {templateUrl: 'partials/file-manager.html', controller: 'MyCtrl_file_manager'});
  $routeProvider.when('/form-dropzone', {templateUrl: 'partials/form-dropzone.html', controller: 'MyCtrl_form_dropzone'});
  $routeProvider.when('/form-elements', {templateUrl: 'partials/form-elements.html', controller: 'MyCtrl_form_elements'});
  $routeProvider.when('/form-wizard', {templateUrl: 'partials/form-wizard.html', controller: 'MyCtrl_form_wizard'});
  $routeProvider.when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'MyCtrl_gallery'});
  $routeProvider.when('/icons-filetypes', {templateUrl: 'partials/icons-filetypes.html', controller: 'MyCtrl_icons_filetypes'});
  $routeProvider.when('/icons-font-awesome', {templateUrl: 'partials/icons-font-awesome.html', controller: 'MyCtrl_icons_font_awesome'});
  $routeProvider.when('/icons-glyphicons-pro', {templateUrl: 'partials/icons-glyphicons-pro.html', controller: 'MyCtrl_icons_glyphicons_pro'});
  $routeProvider.when('/icons-halflings', {templateUrl: 'partials/icons-halflings.html', controller: 'MyCtrl_icons_halflings'});
  $routeProvider.when('/icons-social', {templateUrl: 'partials/icons-social.html', controller: 'MyCtrl_icons_social'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'MyCtrl_login'});
  $routeProvider.when('/page-inbox', {templateUrl: 'partials/page-inbox.html', controller: 'MyCtrl_page_inbox'});
  $routeProvider.when('/page-infrastructure', {templateUrl: 'partials/page-infrastructure.html', controller: 'MyCtrl_page_infrastructure'});
  $routeProvider.when('/page-todo', {templateUrl: 'partials/page-todo.html', controller: 'MyCtrl_page_todo'});
  $routeProvider.when('/table', {templateUrl: 'partials/table.html', controller: 'MyCtrl_table'});
  $routeProvider.when('/typography', {templateUrl: 'partials/typography.html', controller: 'MyCtrltypography'});
  $routeProvider.when('/widgets', {templateUrl: 'partials/widgets.html', controller: 'MyCtrl_widgets'});
  $routeProvider.when('/n3-charts', {templateUrl: 'partials/n3-charts.html', controller: 'MyCtrl_n3_charts'});
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}])
.run(['$rootScope', function($rootScope) {
  console.log("myApp run.....");
}]);