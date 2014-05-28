'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl_dashboard', ['$scope',  '$http', 'requestHTTP', function($scope, $http, requestHTTP) {

		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
				}).appendTo("body").fadeIn(200);
		}

		// use case : XHR
		function onStatsChart2Succ(data, status, headers, config) {
			var visits = data;
			var plot = $.plot($("#stats-chart2"),
				[ { data: visits, label: "Visits"},
				{ data: pageviews, label: "Pageviews"},
				{ data: visitors, label: "Visitors" }, 
				{ data: newVisitors, label: "New Visitors"} ], {
					series: {
						lines: { show: true,
								lineWidth: 2
						},
						points: { show: true, 
							lineWidth: 2 
						},
						shadowSize: 0
					},
					grid: { hoverable: true, 
						clickable: true, 
						tickColor: "#f9f9f9",
						borderWidth: 0
					},
					legend: {
						show: false
					},	
					colors: ["#bdea74", "#eae874", "#2FABE9", "#FA5833"],
					xaxis: {ticks:15, tickDecimals: 0},
					yaxis: {ticks:5, tickDecimals: 0}
				}
			);
		}

		function onStatsChart2Fail(data, status, headers, config) {
			alert("call error");
		}

		/* ---------- Main Chart ---------- */
		if($("#stats-chart2").length) {				
			// use case : Random Function
			//
			// var visits = [[1, randNum2()-10], [2, randNum2()-10], [3, randNum2()-10], [4, randNum2()],[5, randNum2()],[6, 4+randNum2()],[7, 5+randNum2()],[8, 6+randNum2()],[9, 6+randNum2()],[10, 8+randNum2()],[11, 9+randNum2()],[12, 10+randNum2()],[13,11+randNum2()],[14, 12+randNum2()],[15, 13+randNum2()],[16, 14+randNum2()],[17, 15+randNum2()],[18, 15+randNum2()],[19, 16+randNum2()],[20, 17+randNum2()],[21, 18+randNum2()],[22, 19+randNum2()],[23, 20+randNum2()],[24, 21+randNum2()],[25, 14+randNum2()],[26, 24+randNum2()],[27,25+randNum2()],[28, 26+randNum2()],[29, 27+randNum2()], [30, 31+randNum2()]];
			// var pageviews = [[1, 5+randNum()], [2, 10+randNum()], [3, 15+randNum()], [4, 20+randNum()],[5, 25+randNum()],[6, 30+randNum()],[7, 35+randNum()],[8, 40+randNum()],[9, 45+randNum()],[10, 50+randNum()],[11, 55+randNum()],[12, 60+randNum()],[13, 65+randNum()],[14, 70+randNum()],[15, 75+randNum()],[16, 80+randNum()],[17, 85+randNum()],[18, 90+randNum()],[19, 85+randNum()],[20, 80+randNum()],[21, 75+randNum()],[22, 80+randNum()],[23, 75+randNum()],[24, 70+randNum()],[25, 65+randNum()],[26, 75+randNum()],[27,80+randNum()],[28, 85+randNum()],[29, 90+randNum()], [30, 95+randNum()]];
			// var visitors = [[1, 5+randNum3()], [2, 10+randNum3()], [3, 15+randNum3()], [4, 20+randNum3()],[5, 25+randNum3()],[6, 30+randNum3()],[7, 35+randNum3()],[8, 40+randNum3()],[9, 45+randNum3()],[10, 50+randNum3()],[11, 55+randNum3()],[12, 60+randNum3()],[13, 65+randNum3()],[14, 70+randNum3()],[15, 75+randNum3()],[16, 80+randNum3()],[17, 85+randNum3()],[18, 90+randNum3()],[19, 85+randNum3()],[20, 80+randNum3()],[21, 75+randNum3()],[22, 80+randNum3()],[23, 75+randNum3()],[24, 70+randNum3()],[25, 65+randNum3()],[26, 75+randNum3()],[27,80+randNum3()],[28, 85+randNum3()],[29, 90+randNum3()], [30, 95+randNum3()]];
			// var newVisitors = [[1, randNum4()-10], [2, randNum4()-10], [3, randNum4()-10], [4, randNum4()],[5, randNum4()],[6, 4+randNum4()],[7, 5+randNum4()],[8, 6+randNum4()],[9, 6+randNum4()],[10, 8+randNum4()],[11, 9+randNum4()],[12, 10+randNum4()],[13,11+randNum4()],[14, 12+randNum4()],[15, 13+randNum4()],[16, 14+randNum4()],[17, 15+randNum4()],[18, 15+randNum4()],[19, 16+randNum4()],[20, 17+randNum4()],[21, 18+randNum4()],[22, 19+randNum4()],[23, 20+randNum4()],[24, 21+randNum4()],[25, 14+randNum4()],[26, 24+randNum4()],[27,25+randNum4()],[28, 26+randNum4()],[29, 27+randNum4()], [30, 31+randNum4()]];
			
			// var plot = $.plot($("#stats-chart2"),
			// 	[ { data: visits, label: "Visits"},
			// 	{ data: pageviews, label: "Pageviews"},
			// 	{ data: visitors, label: "Visitors" }, 
			// 	{ data: newVisitors, label: "New Visitors"} ], {
			// 		series: {
			// 			lines: { show: true,
			// 					lineWidth: 2
			// 			},
			// 			points: { show: true, 
			// 				lineWidth: 2 
			// 			},
			// 			shadowSize: 0
			// 		},
			// 		grid: { hoverable: true, 
			// 			clickable: true, 
			// 			tickColor: "#f9f9f9",
			// 			borderWidth: 0
			// 		},
			// 		legend: {
			// 			show: false
			// 		},	
			// 		colors: ["#bdea74", "#eae874", "#2FABE9", "#FA5833"],
			// 		xaxis: {ticks:15, tickDecimals: 0},
			// 		yaxis: {ticks:5, tickDecimals: 0},
			// 	}
			// );
			// --> onStatsChart2(visits, pageviews, visitors, newVisitors);

			// use case : XHR
			var visits = requestHTTP.getJsonCrossdomainCallback("http://59.12.238.193:8080/test.json", "", onStatsChart2Succ, onStatsChart2Fail);
			var pageviews = requestHTTP.getJsonCrossdomain("http://59.12.238.193:8080/test1.json", "");
			var visitors = requestHTTP.getJsonCrossdomain("http://59.12.238.193:8080/test2.json", "");
			var newVisitors = requestHTTP.getJsonCrossdomain("http://59.12.238.193:8080/test3.json", "");

			$scope.data = [[1, randNum4()-10], [2, randNum4()-10], [3, randNum4()-10], [4, randNum4()],[5, randNum4()],[6, 4+randNum4()],[7, 5+randNum4()],[8, 6+randNum4()],[9, 6+randNum4()],[10, 8+randNum4()],[11, 9+randNum4()],[12, 10+randNum4()],[13,11+randNum4()],[14, 12+randNum4()],[15, 13+randNum4()],[16, 14+randNum4()],[17, 15+randNum4()],[18, 15+randNum4()],[19, 16+randNum4()],[20, 17+randNum4()],[21, 18+randNum4()],[22, 19+randNum4()],[23, 20+randNum4()],[24, 21+randNum4()],[25, 14+randNum4()],[26, 24+randNum4()],[27,25+randNum4()],[28, 26+randNum4()],[29, 27+randNum4()], [30, 31+randNum4()]];
			
			var previousPoint = null;

			$("#stats-chart2").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;

						$("#tooltip").remove();
						var x = item.datapoint[0].toFixed(2),
						y = item.datapoint[1].toFixed(2);

						showTooltip(item.pageX, item.pageY,
						item.series.label + " of " + x + " = " + y);
					}
				}
				else {
					$("#tooltip").remove();
					previousPoint = null;
				}
			});
		}

		/* ---------- Facebook Chart ---------- */
		if($("#facebookChart").length) {	
			var likes = [[1, 5+randNumFB()], [2, 10+randNumFB()], [3, 15+randNumFB()], [4, 20+randNumFB()],[5, 25+randNumFB()],[6, 30+randNumFB()],[7, 35+randNumFB()],[8, 40+randNumFB()],[9, 45+randNumFB()],[10, 50+randNumFB()],[11, 55+randNumFB()],[12, 60+randNumFB()],[13, 65+randNumFB()],[14, 70+randNumFB()],[15, 75+randNumFB()],[16, 80+randNumFB()],[17, 85+randNumFB()],[18, 90+randNumFB()],[19, 85+randNumFB()],[20, 80+randNumFB()],[21, 75+randNumFB()],[22, 80+randNumFB()],[23, 75+randNumFB()],[24, 70+randNumFB()],[25, 65+randNumFB()],[26, 75+randNumFB()],[27,80+randNumFB()],[28, 85+randNumFB()],[29, 90+randNumFB()], [30, 95+randNumFB()]];

			var plot = $.plot($("#facebookChart"),
				   [ { data: likes, label: "Fans"} ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true, 
									 lineWidth: 2 
								 },
						   shadowSize: 0
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f9f9f9",
							   borderWidth: 0
							 },
					   colors: ["#3B5998"],
						xaxis: {ticks:6, tickDecimals: 0},
						yaxis: {ticks:3, tickDecimals: 0},
					 });

			var previousPoint = null;
			$("#facebookChart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
		
		}

		/* ---------- Twitter Chart ---------- */
		if($("#twitterChart").length) {	
			var followers = [[1, 5+randNumTW()], [2, 10+randNumTW()], [3, 15+randNumTW()], [4, 20+randNumTW()],[5, 25+randNumTW()],[6, 30+randNumTW()],[7, 35+randNumTW()],[8, 40+randNumTW()],[9, 45+randNumTW()],[10, 50+randNumTW()],[11, 55+randNumTW()],[12, 60+randNumTW()],[13, 65+randNumTW()],[14, 70+randNumTW()],[15, 75+randNumTW()],[16, 80+randNumTW()],[17, 85+randNumTW()],[18, 90+randNumTW()],[19, 85+randNumTW()],[20, 80+randNumTW()],[21, 75+randNumTW()],[22, 80+randNumTW()],[23, 75+randNumTW()],[24, 70+randNumTW()],[25, 65+randNumTW()],[26, 75+randNumTW()],[27,80+randNumTW()],[28, 85+randNumTW()],[29, 90+randNumTW()], [30, 95+randNumTW()]];

			var plot = $.plot($("#twitterChart"),
				   [ { data: followers, label: "Followers"} ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true, 
									 lineWidth: 2 
								 },
						   shadowSize: 0
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f9f9f9",
							   borderWidth: 0
							 },
					   colors: ["#1BB2E9"],
						xaxis: {ticks:6, tickDecimals: 0},
						yaxis: {ticks:3, tickDecimals: 0},
					 });

			var previousPoint = null;
			$("#twitterChart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
		
		}

		/* ---------- Demographics Bar Chart ---------- */
		if($('.verticalChart')) {
			
			$('.singleBar').each(function(){
				
				var percent = $(this).find('.value span').html();
				
				$(this).find('.value').animate({height:percent}, 2000, function() {
				    
					$(this).find('span').fadeIn();
				 
				});
				
			});
			
		}

		/* ---------- Sparkline Charts ---------- */
		//generate random number for charts
		randNum = function(){
			//return Math.floor(Math.random()*101);
			return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
		}

		var chartColours = ['#2FABE9', '#FA5833', '#b9e672', '#bbdce3', '#9a3b1b', '#5a8022', '#2c7282'];

		//sparklines (making loop with random data for all 7 sparkline)
		var i=1;
		for (i=1; i<9; i++) {
		 	var data = [[1, 3+randNum()], [2, 5+randNum()], [3, 8+randNum()], [4, 11+randNum()],[5, 14+randNum()],[6, 17+randNum()],[7, 20+randNum()], [8, 15+randNum()], [9, 18+randNum()], [10, 22+randNum()]];
		 	var placeholder = '.sparkLineStats' + i;

			if (retina()) {

				$(placeholder).sparkline(data, {
					width: 200,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 60,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: '#2FABE9',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: '#f2f7f9',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: '#467e8c',//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: '#b9e672',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: '#FA5833',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 1//In pixels (default: 1) - Integer
				});
				
				//only firefox sux in this case
				if (jQuery.browser.mozilla) {
					$(placeholder).css('MozTransform','scale(0.5,0.5)').css('margin-top','-10px');
					$(placeholder).css('height','30px').css('width','100px').css('margin-left','-20px').css('margin-right','40px');
				} else {
					$(placeholder).css('zoom',0.5);
				}

			} else {

				$(placeholder).sparkline(data, {
					width: 100,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 30,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: '#2FABE9',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: '#f2f7f9',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: '#467e8c',//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: '#b9e672',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: '#FA5833',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 1//In pixels (default: 1) - Integer
				});

			}

		}

	}])
	.controller('MyCtrl_ui_sliders_progress', ['$scope', function($scope){
		/* ---------- Progress  ---------- */
		$(".simpleProgress").progressbar({
			value: 89
		});

		$(".progressAnimate").progressbar({
			value: 1,
			create: function() {
				$(".progressAnimate .ui-progressbar-value").animate({"width":"100%"},{
					duration: 10000,
					step: function(now){
						$(".progressAnimateValue").html(parseInt(now)+"%");
					},
					easing: "linear"
				})
			}
		});

		$(".progressUploadAnimate").progressbar({
			value: 1,
			create: function() {
				$(".progressUploadAnimate .ui-progressbar-value").animate({"width":"100%"},{
					duration: 20000,
					easing: 'linear',
					step: function(now){
						$(".progressUploadAnimateValue").html(parseInt(now*40.96)+" Gb");
					},
					complete: function(){
						$(".progressUploadAnimate + .field_notice").html("<span class='must'>Upload Finished</span>");
					} 
				})
			}
		});

		if($(".progressBarValue")) {

			$(".progressBarValue").each(function(){

				var endValueHTML = $(this).find(".progressCustomValueVal").html();

				var endValue = parseInt(endValueHTML);

				$(this).find(".progressCustomValue").progressbar({

					value: 1,
					create: function() {
						$(this).find(".ui-progressbar-value").animate({"width": endValue + "%"},{
							duration: 5000,
							step: function(now){

								$(this).parent().parent().parent().find(".progressCustomValueVal").html(parseInt(now)+"%");
							},
							easing: "linear"
						})
					}
				});

			});

		}	

		/* ---------- Custom Slider ---------- */
		$(".sliderSimple").slider();

		$(".sliderMin").slider({
			range: "min",
			value: 180,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMinLabel" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-1").slider({
			range: "min",
			value: 50,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin1Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-2").slider({
			range: "min",
			value: 100,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin2Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-3").slider({
			range: "min",
			value: 150,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin3Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-4").slider({
			range: "min",
			value: 250,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin4Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-5").slider({
			range: "min",
			value: 350,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-6").slider({
			range: "min",
			value: 450,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-7").slider({
			range: "min",
			value: 550,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-8").slider({
			range: "min",
			value: 650,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});


		$(".sliderMax").slider({
			range: "max",
			value: 280,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMaxLabel" ).html( "$" + ui.value );
			}
		});

		$( ".sliderRange" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 192, 470 ],
			slide: function( event, ui ) {
				$( ".sliderRangeLabel" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});

		$("#sliderVertical-1, #sliderVertical-1s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
		});

		$("#sliderVertical-2, #sliderVertical-2s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$("#sliderVertical-3, #sliderVertical-3s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 30,
		});

		$("#sliderVertical-4, #sliderVertical-4s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 15,
		});

		$("#sliderVertical-5, #sliderVertical-5s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$("#sliderVertical-6, #sliderVertical-6s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 80,
		});

		$("#sliderVertical-7, #sliderVertical-7s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
		});

		$("#sliderVertical-8, #sliderVertical-8s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$("#sliderVertical-9, #sliderVertical-9s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 30,
		});

		$("#sliderVertical-10, #sliderVertical-10s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 15,
		});

		$("#sliderVertical-11, #sliderVertical-11s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$("#sliderVertical-12, #sliderVertical-12s").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 80,
		});
	}])
	.controller('MyCtrl_ui_nestable_list', ['$scope', function($scope){
	    // activate Nestable for list 1
	    $('#nestable').nestable({
	        group: 1
	    });

	    // activate Nestable for list 2
	    $('#nestable2').nestable({
	        group: 1
	    });

	    $('#nestable3').nestable();

		$('#nestable-menu').on('click', function(e) {
		        var target = $(e.target),
		            action = target.data('action');
		        if (action === 'expand-all') {
		            $('.dd').nestable('expandAll');
		        }
		        if (action === 'collapse-all') {
		            $('.dd').nestable('collapseAll');
		        }
		});
		
		$('#nestable4').nestable();
	}])
	.controller('MyCtrl_ui_elements', ['$scope', function($scope){
		/* ---------- Star Rating ---------- */
		$('.raty').raty({
			score : 4 //default stars
		});

		$('#add-sticky').click(function(){

			var unique_id = $.gritter.add({
				// (string | mandatory) the heading of the notification
				title: 'This is a sticky notice!',
				// (string | mandatory) the text inside the notification
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
				// (string | optional) the image to display on the left
				image: 'assets/img/avatar.jpg',
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky: true,
				// (int | optional) the time you want it to be alive for before fading out
				time: '',
				// (string | optional) the class name you want to apply to that specific message
				class_name: 'my-sticky-class'
			});

			// You can have it return a unique id, this can be used to manually remove it later using
			/* ----------
			setTimeout(function(){

				$.gritter.remove(unique_id, {
					fade: true,
					speed: 'slow'
				});

			}, 6000)
			*/

			return false;

		});

		$('#add-regular').click(function(){

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: 'This is a regular notice!',
				// (string | mandatory) the text inside the notification
				text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
				// (string | optional) the image to display on the left
				image: 'assets/img/avatar.jpg',
				// (bool | optional) if you want it to fade out on its own or just sit there
				sticky: false,
				// (int | optional) the time you want it to be alive for before fading out
				time: ''
			});

			return false;

		});

		$('#add-max').click(function(){

		    $.gritter.add({
		        // (string | mandatory) the heading of the notification
		        title: 'This is a notice with a max of 3 on screen at one time!',
		        // (string | mandatory) the text inside the notification
		        text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
		        // (string | optional) the image to display on the left
		        image: 'assets/img/avatar.jpg',
		        // (bool | optional) if you want it to fade out on its own or just sit there
		        sticky: false,
		        // (function) before the gritter notice is opened
		        before_open: function(){
		            if($('.gritter-item-wrapper').length == 3)
		            {
		                // Returning false prevents a new gritter from opening
		                return false;
		            }
		        }
		    });

		    return false;

		});

		$('#add-without-image').click(function(){

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: 'This is a notice without an image!',
				// (string | mandatory) the text inside the notification
				text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
			});

			return false;
		});

		$('#add-gritter-light').click(function(){

		    $.gritter.add({
		        // (string | mandatory) the heading of the notification
		        title: 'This is a light notification',
		        // (string | mandatory) the text inside the notification
		        text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
		        class_name: 'gritter-light'
		    });

		    return false;
		});

		$('#add-with-callbacks').click(function(){

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: 'This is a notice with callbacks!',
				// (string | mandatory) the text inside the notification
				text: 'The callback is...',
				// (function | optional) function called before it opens
				before_open: function(){
					alert('I am called before it opens');
				},
				// (function | optional) function called after it opens
				after_open: function(e){
					alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
				},
				// (function | optional) function called before it closes
				before_close: function(e, manual_close){
		            var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
					alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
				},
				// (function | optional) function called after it closes
				after_close: function(e, manual_close){
		            var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
					alert('I am called after it closes. ' + manually);
				}
			});

			return false;
		});

		$('#add-sticky-with-callbacks').click(function(){

			$.gritter.add({
				// (string | mandatory) the heading of the notification
				title: 'This is a sticky notice with callbacks!',
				// (string | mandatory) the text inside the notification
				text: 'Sticky sticky notice.. sticky sticky notice...',
				// Stickeh!
				sticky: true,
				// (function | optional) function called before it opens
				before_open: function(){
					alert('I am a sticky called before it opens');
				},
				// (function | optional) function called after it opens
				after_open: function(e){
					alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
				},
				// (function | optional) function called before it closes
				before_close: function(e){
					alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
				},
				// (function | optional) function called after it closes
				after_close: function(){
					alert('I am a sticky called after it closes');
				}
			});

			return false;

		});

		$("#remove-all").click(function(){

			$.gritter.removeAll();
			return false;

		});

		$("#remove-all-with-callbacks").click(function(){

			$.gritter.removeAll({
				before_close: function(e){
					alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
				},
				after_close: function(){
					alert('I am called after everything has been closed.');
				}
			});
			return false;

		});
	}])
	.controller('MyCtrl_calendar', ['$scope', function($scope){
		$('#external-events div.external-event').each(function() {

			// it doesn't need to have a start or end
			var eventObject = {
				title: $.trim($(this).text()) // use the element's text as the event title
			};
			
			// store the Event Object in the DOM element so we can get to it later
			$(this).data('eventObject', eventObject);
			
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
			
		});
		
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
			
		$('#calendar').fullCalendar({
			header: {
				left: 'title',
				right: 'prev,next today,month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function(date, allDay) { // this function is called when something is dropped
			
				// retrieve the dropped element's stored Event Object
				var originalEventObject = $(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = $.extend({}, originalEventObject);
				
				// assign it the date that was reported
				copiedEventObject.start = date;
				copiedEventObject.allDay = allDay;
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
				
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
				
			}
		});
	}])
	.controller('MyCtrl_charts_flot', ['$scope', function($scope){
		/* ---------- Chart with points ---------- */
		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}
		
		function randNumTW(){
			return ((Math.floor( Math.random()* (1+40-20) ) ) + 20);
		}

		if($("#facebookChart").length)
		{	
			var likes = [[1, 5+randNum()], [2, 10+randNum()], [3, 15+randNum()], [4, 20+randNum()],[5, 25+randNum()],[6, 30+randNum()],[7, 35+randNum()],[8, 40+randNum()],[9, 45+randNum()],[10, 50+randNum()],[11, 55+randNum()],[12, 60+randNum()],[13, 65+randNum()],[14, 70+randNum()],[15, 75+randNum()],[16, 80+randNum()],[17, 85+randNum()],[18, 90+randNum()],[19, 85+randNum()],[20, 80+randNum()],[21, 75+randNum()],[22, 80+randNum()],[23, 75+randNum()],[24, 70+randNum()],[25, 65+randNum()],[26, 75+randNum()],[27,80+randNum()],[28, 85+randNum()],[29, 90+randNum()], [30, 95+randNum()]];

			var plot = $.plot($("#facebookChart"),
				   [ { data: likes, label: "Fans"} ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true, 
									 lineWidth: 2 
								 },
						   shadowSize: 0
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f9f9f9",
							   borderWidth: 0
							 },
					   colors: ["#3B5998"],
						xaxis: {ticks:6, tickDecimals: 0},
						yaxis: {ticks:3, tickDecimals: 0},
					 });

			var previousPoint = null;
			$("#facebookChart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
		
		}
		
		/* ---------- Chart with points ---------- */
		if($("#twitterChart").length)
		{	
			var followers = [[1, 5+randNumTW()], [2, 10+randNumTW()], [3, 15+randNumTW()], [4, 20+randNumTW()],[5, 25+randNumTW()],[6, 30+randNumTW()],[7, 35+randNumTW()],[8, 40+randNumTW()],[9, 45+randNumTW()],[10, 50+randNumTW()],[11, 55+randNumTW()],[12, 60+randNumTW()],[13, 65+randNumTW()],[14, 70+randNumTW()],[15, 75+randNumTW()],[16, 80+randNumTW()],[17, 85+randNumTW()],[18, 90+randNumTW()],[19, 85+randNumTW()],[20, 80+randNumTW()],[21, 75+randNumTW()],[22, 80+randNumTW()],[23, 75+randNumTW()],[24, 70+randNumTW()],[25, 65+randNumTW()],[26, 75+randNumTW()],[27,80+randNumTW()],[28, 85+randNumTW()],[29, 90+randNumTW()], [30, 95+randNumTW()]];

			var plot = $.plot($("#twitterChart"),
				   [ { data: followers, label: "Followers"} ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true, 
									 lineWidth: 2 
								 },
						   shadowSize: 0
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#f9f9f9",
							   borderWidth: 0
							 },
					   colors: ["#1BB2E9"],
						xaxis: {ticks:6, tickDecimals: 0},
						yaxis: {ticks:3, tickDecimals: 0},
					 });

			var previousPoint = null;
			$("#twitterChart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
		
		}
		
		/* ---------- Chart with points ---------- */
		if($("#stats-chart").length)
		{
			var visitors = [[1, randNum()-10], [2, randNum()-10], [3, randNum()-10], [4, randNum()],[5, randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 6+randNum()],[9, 6+randNum()],[10, 8+randNum()],[11, 9+randNum()],[12, 10+randNum()],[13,11+randNum()],[14, 12+randNum()],[15, 13+randNum()],[16, 14+randNum()],[17, 15+randNum()],[18, 15+randNum()],[19, 16+randNum()],[20, 17+randNum()],[21, 18+randNum()],[22, 19+randNum()],[23, 20+randNum()],[24, 21+randNum()],[25, 14+randNum()],[26, 24+randNum()],[27,25+randNum()],[28, 26+randNum()],[29, 27+randNum()], [30, 31+randNum()]];

			var plot = $.plot($("#stats-chart"),
				   [ { data: visitors, label: "visitors" } ], {
					   series: {
						   lines: { show: true,
									lineWidth: 3,
									fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
								 },
						   points: { show: true },
						   shadowSize: 2
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#eee",
							   borderWidth: 0,
							 },
					   colors: ["#b1d3d4"],
						xaxis: {ticks:11, tickDecimals: 0},
						yaxis: {ticks:11, tickDecimals: 0},
					 });

			var previousPoint = null;
			$("#stats-chart").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
			


			$("#sincos").bind("plotclick", function (event, pos, item) {
				if (item) {
					$("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
					plot.highlight(item.series, item.datapoint);
				}
			});
		}
		
		
		
		/* ---------- Chart with points ---------- */
		if($("#sincos").length)
		{
			var sin = [], cos = [];

			for (var i = 0; i < 14; i += 0.5) {
				sin.push([i, Math.sin(i)/i]);
				cos.push([i, Math.cos(i)]);
			}

			var plot = $.plot($("#sincos"),
				   [ { data: sin, label: "sin(x)/x"}, { data: cos, label: "cos(x)" } ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
								 },
						   points: { show: true },
						   shadowSize: 2
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#dddddd",
							   borderWidth: 0 
							 },
					   yaxis: { min: -1.2, max: 1.2 },
					   colors: ["#FA5833", "#2FABE9"]
					 });

			var previousPoint = null;
			$("#sincos").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
			


			$("#sincos").bind("plotclick", function (event, pos, item) {
				if (item) {
					$("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
					plot.highlight(item.series, item.datapoint);
				}
			});
		}
		
		/* ---------- Flot chart ---------- */
		if($("#flotchart").length)
		{
			var d1 = [];
			for (var i = 0; i < Math.PI * 2; i += 0.25)
				d1.push([i, Math.sin(i)]);
			
			var d2 = [];
			for (var i = 0; i < Math.PI * 2; i += 0.25)
				d2.push([i, Math.cos(i)]);

			var d3 = [];
			for (var i = 0; i < Math.PI * 2; i += 0.1)
				d3.push([i, Math.tan(i)]);
			
			$.plot($("#flotchart"), [
				{ label: "sin(x)",  data: d1},
				{ label: "cos(x)",  data: d2},
				{ label: "tan(x)",  data: d3}
			], {
				series: {
					lines: { show: true },
					points: { show: true }
				},
				xaxis: {
					ticks: [0, [Math.PI/2, "\u03c0/2"], [Math.PI, "\u03c0"], [Math.PI * 3/2, "3\u03c0/2"], [Math.PI * 2, "2\u03c0"]]
				},
				yaxis: {
					ticks: 10,
					min: -2,
					max: 2
				},
				grid: {	tickColor: "#dddddd",
						borderWidth: 0 
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D"]
			});
		}
		
		/* ---------- Stack chart ---------- */
		function plotWithOptions() {
			$.plot($("#stackchart"), [ d1, d2, d3 ], {
				series: {
					stack: stack,
					lines: { show: lines, fill: true, steps: steps },
					bars: { show: bars, barWidth: 0.6 },
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D"]
			});
		}
		if($("#stackchart").length)
		{
			var d1 = [];
			for (var i = 0; i <= 10; i += 1)
			d1.push([i, parseInt(Math.random() * 30)]);

			var d2 = [];
			for (var i = 0; i <= 10; i += 1)
				d2.push([i, parseInt(Math.random() * 30)]);

			var d3 = [];
			for (var i = 0; i <= 10; i += 1)
				d3.push([i, parseInt(Math.random() * 30)]);

			var stack = 0, bars = true, lines = false, steps = false;

			plotWithOptions();

			$(".stackControls input").click(function (e) {
				e.preventDefault();
				stack = $(this).val() == "With stacking" ? true : null;
				plotWithOptions();
			});
			$(".graphControls input").click(function (e) {
				e.preventDefault();
				bars = $(this).val().indexOf("Bars") != -1;
				lines = $(this).val().indexOf("Lines") != -1;
				steps = $(this).val().indexOf("steps") != -1;
				plotWithOptions();
			});
		}
		
		/* ---------- Device chart ---------- */
		
		var data = [
		{ label: "Desktop",  data: 73},
		{ label: "Mobile",  data: 27}
		];
		
		/* ---------- Donut chart ---------- */
		if($("#deviceChart").length)
		{
			$.plot($("#deviceChart"), data,
			{
					series: {
							pie: {
									innerRadius: 0.6,
									show: true
							}
					},
					legend: {
						show: true
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});
		}
		
		var data = [
		{ label: "iOS",  data: 20},
		{ label: "Android",  data: 7},
		{ label: "Linux",  data: 11},
		{ label: "Mac OSX",  data: 14},
		{ label: "Windows",  data: 48}
		];
		
		/* ---------- Donut chart ---------- */
		if($("#osChart").length)
		{
			$.plot($("#osChart"), data,
			{
					series: {
							pie: {
									innerRadius: 0.6,
									show: true
							}
					},
					legend: {
						show: true
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});
		}

		/* ---------- Pie chart ---------- */
		var data = [
		{ label: "Internet Explorer",  data: 12},
		{ label: "Mobile",  data: 27},
		{ label: "Safari",  data: 85},
		{ label: "Opera",  data: 64},
		{ label: "Firefox",  data: 90},
		{ label: "Chrome",  data: 112}
		];
			
		function pieHover(event, pos, obj)
		{
			if (!obj)
					return;
			percent = parseFloat(obj.series.percent).toFixed(2);
			$("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
		}
		if($("#piechart").length)
		{
			$.plot($("#piechart"), data,
			{
				series: {
						pie: {
								show: true
						}
				},
				grid: {
						hoverable: true,
						clickable: true
				},
				legend: {
					show: false
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});

			$("#piechart").bind("plothover", pieHover);
		}
		
		/* ---------- Donut chart ---------- */
		if($("#donutchart").length)
		{
			$.plot($("#donutchart"), data,
			{
					series: {
							pie: {
									innerRadius: 0.5,
									show: true
							}
					},
					legend: {
						show: false
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
			});
		}




		 // we use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [], totalPoints = 300;
		function getRandomData() {
			if (data.length > 0)
				data = data.slice(1);

			// do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;
				if (y < 0)
					y = 0;
				if (y > 100)
					y = 100;
				data.push(y);
			}

			// zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i)
				res.push([i, data[i]])
			return res;
		}

		// setup control widget
		var updateInterval = 30;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1)
					updateInterval = 1;
				if (updateInterval > 2000)
					updateInterval = 2000;
				$(this).val("" + updateInterval);
			}
		});

		function update() {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}
		
		if($("#realtimechart").length)
		{
			var options = {
				series: { shadowSize: 1 },
				lines: { fill: true, fillColor: { colors: [ { opacity: 1 }, { opacity: 0.1 } ] }},
				yaxis: { min: 0, max: 100 },
				xaxis: { show: false },
				colors: ["#F4A506"],
				grid: {	tickColor: "#dddddd",
						borderWidth: 0 
				},
			};
			var plot = $.plot($("#realtimechart"), [ getRandomData() ], options);

			update();
		}
	}])
	.controller('MyCtrl_charts_others', ['$scope', function($scope){
		/* ---------- Sparkline Charts ---------- */
		//generate random number for charts
		randNum = function(){
			//return Math.floor(Math.random()*101);
			return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
		}

		var chartColours = ['#2FABE9', '#FA5833', '#b9e672', '#bbdce3', '#9a3b1b', '#5a8022', '#2c7282'];

		//sparklines (making loop with random data for all 7 sparkline)
		var i=1;
		for (i=1; i<9; i++) {
		 	var data = [[1, 3+randNum()], [2, 5+randNum()], [3, 8+randNum()], [4, 11+randNum()],[5, 14+randNum()],[6, 17+randNum()],[7, 20+randNum()], [8, 15+randNum()], [9, 18+randNum()], [10, 22+randNum()]];
		 	var placeholder = '.sparkLineStats' + i;

			if (retina()) {

				$(placeholder).sparkline(data, {
					width: 200,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 60,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: '#2FABE9',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: '#f2f7f9',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: '#467e8c',//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: '#b9e672',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: '#FA5833',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 1//In pixels (default: 1) - Integer
				});
				
				//only firefox sux in this case
				if (jQuery.browser.mozilla) {
					$(placeholder).css('MozTransform','scale(0.5,0.5)').css('margin-top','-10px');
					$(placeholder).css('height','30px').css('width','100px').css('margin-left','-20px').css('margin-right','40px');
				} else {
					$(placeholder).css('zoom',0.5);
				}

			} else {

				$(placeholder).sparkline(data, {
					width: 100,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 30,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: '#2FABE9',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: '#f2f7f9',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: '#467e8c',//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: '#b9e672',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: '#FA5833',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 1//In pixels (default: 1) - Integer
				});

			}

		}
		
		/* ---------- Init jQuery Knob - disbaled in IE8, IE7, IE6 ---------- */
		if(jQuery.browser.version.substring(0, 2) == "8.") {
			 
			//disable jQuery Knob
			
		} else {
			
			$('.circleChart').each(function(){

				var circleColor = $(this).parent().css('color');

				$(this).knob({
			        'min':0,
			        'max':100,
			        'readOnly': true,
			        'width': 120,
			        'height': 120,
			        'fgColor': circleColor,
			        'dynamicDraw': true,
			        'thickness': 0.2,
			        'tickColorizeValues': true,
					'skin':'tron'
			    });

			});
			
		}
		
		/*------- Just Gage Init -------*/
		var g1=new JustGage({id:"g1",value:67,min:0,max:100,title:"Visitors",label:"per minute"});
		var g1a=new JustGage({id:"g1a",value:45,min:0,max:100,title:"Errors",label:"average"});
		var g2=new JustGage({id:"g2",value:15,min:0,max:100,title:"Timers",label:""});
		var g2a=new JustGage({id:"g2a",value:7,min:0,max:100,title:"Alerts",label:""});
		var g2b=new JustGage({id:"g2b",value:22,min:0,max:100,title:"Events",label:""});
		
		setInterval(function(){
			g1.refresh(getRandomInt(50,100));
			g1a.refresh(getRandomInt(50,100));
			g2.refresh(getRandomInt(0,50));
			g2a.refresh(getRandomInt(0,50));
			g2b.refresh(getRandomInt(0,50))
			},2000
		);
		
		/*------- Easy Pie Chart Init -------*/
		$('.percentage').easyPieChart({
	        animate: 1000,
	        onStep: function(value) {
	            this.$el.find('span').text(~~value);
	        }
	    });
	    $('.percentage-light').easyPieChart({
	        barColor: function(percent) {
	            percent /= 100;
	            return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
	        },
	        trackColor: '#fafafa',
	        scaleColor: false,
	        lineCap: 'butt',
	        rotate: -90,
	        lineWidth: 15,
	        animate: 1000,
	        onStep: function(value) {
	            this.$el.find('span').text(~~value);
	        }
	    });

	    $('.updateEasyPieChart').on('click', function(e) {
	      e.preventDefault();
	      $('.percentage, .percentage-light').each(function() {
	        $(this).data('easyPieChart').update(Math.round(100*Math.random()));
	      });
	    });    
	}])
	.controller('MyCtrl_charts_xcharts', ['$scope', function($scope){
		(function () {
		var data = [{"xScale":"ordinal","comp":[],"main":[{"className":".main.l1","data":[{"y":15,"x":"2012-11-19T00:00:00"},{"y":11,"x":"2012-11-20T00:00:00"},{"y":8,"x":"2012-11-21T00:00:00"},{"y":10,"x":"2012-11-22T00:00:00"},{"y":1,"x":"2012-11-23T00:00:00"},{"y":6,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]},{"className":".main.l2","data":[{"y":29,"x":"2012-11-19T00:00:00"},{"y":33,"x":"2012-11-20T00:00:00"},{"y":13,"x":"2012-11-21T00:00:00"},{"y":16,"x":"2012-11-22T00:00:00"},{"y":7,"x":"2012-11-23T00:00:00"},{"y":18,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]}],"type":"line-dotted","yScale":"linear"},{"xScale":"ordinal","comp":[],"main":[{"className":".main.l1","data":[{"y":12,"x":"2012-11-19T00:00:00"},{"y":18,"x":"2012-11-20T00:00:00"},{"y":8,"x":"2012-11-21T00:00:00"},{"y":7,"x":"2012-11-22T00:00:00"},{"y":6,"x":"2012-11-23T00:00:00"},{"y":12,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]},{"className":".main.l2","data":[{"y":29,"x":"2012-11-19T00:00:00"},{"y":33,"x":"2012-11-20T00:00:00"},{"y":13,"x":"2012-11-21T00:00:00"},{"y":16,"x":"2012-11-22T00:00:00"},{"y":7,"x":"2012-11-23T00:00:00"},{"y":18,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]}],"type":"cumulative","yScale":"linear"},{"xScale":"ordinal","comp":[],"main":[{"className":".main.l1","data":[{"y":12,"x":"2012-11-19T00:00:00"},{"y":18,"x":"2012-11-20T00:00:00"},{"y":8,"x":"2012-11-21T00:00:00"},{"y":7,"x":"2012-11-22T00:00:00"},{"y":6,"x":"2012-11-23T00:00:00"},{"y":12,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]},{"className":".main.l2","data":[{"y":29,"x":"2012-11-19T00:00:00"},{"y":33,"x":"2012-11-20T00:00:00"},{"y":13,"x":"2012-11-21T00:00:00"},{"y":16,"x":"2012-11-22T00:00:00"},{"y":7,"x":"2012-11-23T00:00:00"},{"y":18,"x":"2012-11-24T00:00:00"},{"y":8,"x":"2012-11-25T00:00:00"}]}],"type":"bar","yScale":"linear"}];
		var order = [0, 1, 0, 2],
		  i = 0,
		  xFormat = d3.time.format('%A'),
		  chart = new xChart('line-dotted', data[order[i]], '#chart', {
		    axisPaddingTop: 5,
		    dataFormatX: function (x) {
		      return new Date(x);
		    },
		    tickFormatX: function (x) {
		      return xFormat(x);
		    },
		    timing: 1250
		  }),
		  rotateTimer,
		  toggles = d3.selectAll('.multi button'),
		  t = 3500;

		function updateChart(i) {
		  var d = data[i];
		  chart.setData(d);
		  toggles.classed('toggled', function () {
		    return (d3.select(this).attr('data-type') === d.type);
		  });
		  return d;
		}

		toggles.on('click', function (d, i) {
		  clearTimeout(rotateTimer);
		  updateChart(i);
		});

		function rotateChart() {
		  i += 1;
		  i = (i >= order.length) ? 0 : i;
		  var d = updateChart(order[i]);
		  rotateTimer = setTimeout(rotateChart, t);
		}
		rotateTimer = setTimeout(rotateChart, t);
		}());

		(function () {
		      
		      var data = {
		  "xScale": "ordinal",
		  "yScale": "linear",
		  "main": [
		    {
		      "className": ".pizza",
		      "data": [
		        {
		          "x": "Pepperoni",
		          "y": 4
		        },
		        {
		          "x": "Cheese",
		          "y": 8
		        }
		      ]
		    }
		  ]
		};
		      var myChart = new xChart('bar', data, '#example1');
		      
		    }());

		(function () {
		      
		      var data = {
		  "xScale": "ordinal",
		  "yScale": "linear",
		  "main": [
		    {
		      "className": ".pizza",
		      "data": [
		        {
		          "x": "Pepperoni",
		          "y": 4
		        },
		        {
		          "x": "Cheese",
		          "y": 8
		        }
		      ]
		    },
		    {
		      "className": ".pizza",
		      "data": [
		        {
		          "x": "Pepperoni",
		          "y": 6
		        },
		        {
		          "x": "Cheese",
		          "y": 5
		        }
		      ]
		    }
		  ]
		};
		      var myChart = new xChart('bar', data, '#example2');
		      
		    }());

		(function () {
		      
		      var data = {
		  "xScale": "time",
		  "yScale": "linear",
		  "type": "line",
		  "main": [
		    {
		      "className": ".pizza",
		      "data": [
		        {
		          "x": "2012-11-05",
		          "y": 1
		        },
		        {
		          "x": "2012-11-06",
		          "y": 6
		        },
		        {
		          "x": "2012-11-07",
		          "y": 13
		        },
		        {
		          "x": "2012-11-08",
		          "y": -3
		        },
		        {
		          "x": "2012-11-09",
		          "y": -4
		        },
		        {
		          "x": "2012-11-10",
		          "y": 9
		        },
		        {
		          "x": "2012-11-11",
		          "y": 6
		        }
		      ]
		    }
		  ]
		};
		      var opts = {
		  "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
		  "tickFormatX": function (x) { return d3.time.format('%A')(x); }
		};
		      
		      var myChart = new xChart('line', data, '#example3', opts);
		      
		    }());

		(function () {
		      var tt = document.createElement('div'),
		  leftOffset = -(~~$('html').css('padding-left').replace('px', '') + ~~$('body').css('margin-left').replace('px', '')),
		  topOffset = -32;
		tt.className = 'ex-tooltip';
		document.body.appendChild(tt);

		      var data = {
		  "xScale": "time",
		  "yScale": "linear",
		  "main": [
		    {
		      "className": ".pizza",
		      "data": [
		        {
		          "x": "2012-11-05",
		          "y": 6
		        },
		        {
		          "x": "2012-11-06",
		          "y": 6
		        },
		        {
		          "x": "2012-11-07",
		          "y": 8
		        },
		        {
		          "x": "2012-11-08",
		          "y": 3
		        },
		        {
		          "x": "2012-11-09",
		          "y": 4
		        },
		        {
		          "x": "2012-11-10",
		          "y": 9
		        },
		        {
		          "x": "2012-11-11",
		          "y": 6
		        }
		      ]
		    }
		  ]
		};
		      var opts = {
		  "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
		  "tickFormatX": function (x) { return d3.time.format('%A')(x); },
		  "mouseover": function (d, i) {
		    var pos = $(this).offset();
		    $(tt).text(d3.time.format('%A')(d.x) + ': ' + d.y)
		      .css({top: topOffset + pos.top, left: pos.left + leftOffset})
		      .show();
		  },
		  "mouseout": function (x) {
		    $(tt).hide();
		  }
		};
		      
		      var myChart = new xChart('line-dotted', data, '#example4', opts);
		      
		    }());

		(function () {
		      var errorBar = {
		        enter: function (self, storage, className, data, callbacks) {
		          var insertionPoint = xChart.visutils.getInsertionPoint(9),
		            container,
		            eData = data.map(function (d) {
		              d.data = d.data.map(function (d) {
		                return [{x: d.x, y: d.y - d.e}, {x: d.x, y: d.y}, {x: d.x, y: d.y + d.e}];
		              });
		              return d;
		            }),
		            paths;

		          container = self._g.selectAll('.errorLine' + className)
		            .data(eData, function (d) {
		              return d.className;
		            });

		          container.enter().insert('g', insertionPoint)
		            .attr('class', function (d, i) {
		              return 'errorLine' + className.replace(/\./g, ' ') + ' color' + i;
		            });

		          paths = container.selectAll('path')
		            .data(function (d) {
		              return d.data;
		            }, function (d) {
		              return d[0].x;
		            });

		          paths.enter().insert('path')
		            .style('opacity', 0)
		            .attr('d', d3.svg.line()
		              .x(function (d) {
		                return self.xScale(d.x) + self.xScale.rangeBand() / 2;
		              })
		              .y(function (d) { return self.yScale(d.y); })
		            );

		          storage.containers = container;
		          storage.paths = paths;
		        },
		        update: function (self, storage, timing) {
		          storage.paths.transition().duration(timing)
		            .style('opacity', 1)
		            .attr('d', d3.svg.line()
		              .x(function (d) {
		                return self.xScale(d.x) + self.xScale.rangeBand() / 2;
		              })
		              .y(function (d) { return self.yScale(d.y); })
		            );
		        },
		        exit: function (self, storage, timing) {
		          storage.paths.exit()
		            .transition().duration(timing)
		            .style('opacity', 0);
		        },
		        destroy: function (self, storage, timing) {
		          storage.paths.transition().duration(timing)
		            .style('opacity', 0)
		            .remove();
		        }
		      };

		      xChart.setVis('error', errorBar);

		      var data = [{
		          "xScale": "ordinal",
		          "yScale": "linear",
		          "main": [
		            {
		              "className": ".errorExample",
		              "data": [
		                {
		                  "x": "Ponies",
		                  "y": 12
		                },
		                {
		                  "x": "Unicorns",
		                  "y": 23
		                },
		                {
		                  "x": "Trolls",
		                  "y": 1
		                }
		              ]
		            }
		          ],
		          "comp": [
		            {
		              "type": "error",
		              "className": ".comp.errorBar",
		              "data": [
		                {
		                  "x": "Ponies",
		                  "y": 12,
		                  "e": 5
		                },
		                {
		                  "x": "Unicorns",
		                  "y": 23,
		                  "e": 2
		                },
		                {
		                  "x": "Trolls",
		                  "y": 1,
		                  "e": 1
		                }
		              ]
		            }
		          ]
		        },
		        {
		          "xScale": "ordinal",
		          "yScale": "linear",
		          "main": [
		            {
		              "className": ".errorExample",
		              "data": [
		                {
		                  "x": "Ponies",
		                  "y": 76
		                },
		                {
		                  "x": "Unicorns",
		                  "y": 45
		                },
		                {
		                  "x": "Trolls",
		                  "y": 82
		                }
		              ]
		            }
		          ],
		          "comp": [
		            {
		              "type": "error",
		              "className": ".comp.errorBar",
		              "data": [
		                {
		                  "x": "Ponies",
		                  "y": 76,
		                  "e": 12
		                },
		                {
		                  "x": "Unicorns",
		                  "y": 45,
		                  "e": 3
		                },
		                {
		                  "x": "Trolls",
		                  "y": 82,
		                  "e": 12
		                }
		              ]
		            }
		          ]
		        }
		      ];

		      var myChart = new xChart('bar', data[0], '#exampleVis'),
		        i = 0;

		      function timer() {
		        setTimeout(function () {
		          timer();
		          i += 1;
		          myChart.setData(data[i % 2]);
		        }, 3000);
		      }
		      timer();
		    }());
	}])
	.controller('MyCtrl_file_manager', ['$scope', function($scope){
		/* ---------- File Manager ---------- */
		var elf = $('.file-manager').elfinder({
			url : 'assets/misc/elfinder-connector/connector.php'  // connector URL (REQUIRED)
		}).elfinder('instance');
	}])
	.controller('MyCtrl_form_dropzone', ['$scope', function($scope){
		/*------ Dropzone Init ------*/
		$(".dropzone").dropzone();
	}])
	.controller('MyCtrl_form_elements', ['$scope', function($scope){
		/* ---------- Text editor ---------- */
		$('.cleditor').cleditor();

		/* ---------- Datapicker ---------- */
		$('.date-picker').datepicker();

		/* ---------- Choosen ---------- */
		$('[data-rel="chosen"],[rel="chosen"]').chosen();

		/* ---------- Placeholder Fix for IE ---------- */
		$('input, textarea').placeholder();

		/* ---------- Auto Height texarea ---------- */
		$('textarea').autosize();
		
		/* ---------- Masked Input ---------- */
		$("#date").mask("99/99/9999");
		$("#phone").mask("(999) 999-9999");
		$("#tin").mask("99-9999999");
		$("#ssn").mask("999-99-9999");
		
		$.mask.definitions['~']='[+-]';
		$("#eyescript").mask("~9.99 ~9.99 999");
		
		/* ---------- Textarea with limits ---------- */
		$('#limit').inputlimiter({
			limit: 10,
			limitBy: 'words',
			remText: 'You only have %n word%s remaining...',
			limitText: 'Field limited to %n word%s.'
		});
		
		/* ---------- Timepicker for Bootstrap ---------- */
		$('#timepicker1').timepicker();
		
		/* ---------- DateRangepicker for Bootstrap ---------- */
		$('#daterange').daterangepicker();
		
		/* ---------- Bootstrap Wysiwig ---------- */
		$('.editor').wysiwyg();
		
		/* ---------- Colorpicker for Bootstrap ---------- */
		$('#colorpicker1').colorpicker();
		
	}])
	.controller('MyCtrl_form_wizard', ['$scope', function($scope){
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
	}])
	.controller('MyCtrl_gallery', ['$scope', function($scope){

	}])
	.controller('MyCtrl_icons_filetypes', ['$scope', function($scope){

	}])
	.controller('MyCtrl_icons_font_awesome', ['$scope', function($scope){

	}])
	.controller('MyCtrl_icons_glyphicons_pro', ['$scope', function($scope){

	}])
	.controller('MyCtrl_icons_halflings', ['$scope', function($scope){

	}])
	.controller('MyCtrl_icons_social', ['$scope', function($scope){

	}])
	.controller('MyCtrl_login', ['$scope', function($scope){

	}])
	.controller('MyCtrl_page_inbox', ['$scope', function($scope){
		/* ---------- Check / Uncheck Stars ---------- */
		if($('.messagesList')) {
			
			$('.messagesList').on('click', '.star', function(){
				
				$(this).removeClass('star');
				
				$(this).addClass('dislikes');
				
				//here add your function
				
			});
			
			$('.messagesList').on('click', '.dislikes', function(){
				
				$(this).removeClass('dislikes');
				
				$(this).addClass('star');
				
				//here add your function
				
			});	
			
		}
		
		/* ---------- Placeholder Fix for IE ---------- */
		$('input, textarea').placeholder();

		/* ---------- Auto Height texarea ---------- */
		$('textarea').autosize();   
	}])
	.controller('MyCtrl_page_infrastructure', ['$scope', function($scope){
		/* ---------- Temp Stats ---------- */

		function tempStats(){

			if($('.tempStat')) {
				
				$('.tempStat').each(function(){
					
					var temp = Math.floor(Math.random()*(1+120));
					
					$(this).html(temp + '°');
								
					if (temp < 20) {
						
						$(this).animate({
						            borderColor: "#67c2ef"
						        }, 'fast');
						
					} else if (temp > 19 && temp < 40) {
						
						$(this).animate({
						            borderColor: "#CBE968"
						        }, 'slow');
						
					} else if (temp > 39 && temp < 60) {
						
						$(this).animate({
						            borderColor: "#eae874"
						        }, 'slow');

					} else if (temp > 59 && temp < 80) {
						
						$(this).animate({
						            borderColor: "#fabb3d"
						        }, 'slow');

					} else if (temp > 79 && temp < 100) {

						$(this).animate({
						            borderColor: "#fa603d"
						        }, 'slow');

					} else {
						
						$(this).animate({
						            borderColor: "#ff5454"
						        }, 'slow');
						
					}
					
				});
				
			}
			
		}

		setInterval(tempStats, 3000);

	    function plotWithOptions2(d1, stack, bars, lines, steps) {
					
	        $.plot($("#activeUsers"), [ d1 ], {
	            series: {
	                bars: { show: bars, 
							fill: true, 
							barWidth: 0.1, 
							align: "center",
							lineWidth: 5,
							fillColor: { colors: [ { opacity: 1 }, { opacity: 0.5 } ] }
						},
	            },
				grid: { hoverable: true, 
						   clickable: true, 
						   tickColor: "#f6f6f6",
						   borderWidth: 0,
						},
				colors: ["#CBE968"],
				xaxis: {ticks:0, tickDecimals: 0, tickFormatter: function(v, a) {return v }},
				yaxis: {ticks:5, tickDecimals: 0, tickFormatter: function (v) { return v }},
	
	        });
	    }

		function update(plot) {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}

		/* ---------- Init jQuery Knob - disbaled in IE8, IE7, IE6 ---------- */
		if(jQuery.browser.version.substring(0, 2) == "8.") {
			 
			//disable jQuery Knob
			
		} else {
		
			if (retina()) {

				$(".whiteCircle").knob({
			        'min':0,
			        'max':100,
			        'readOnly': true,
			        'width': 240,
			        'height': 240,
					'bgColor': 'rgba(255,255,255,0.5)',
			        'fgColor': 'rgba(255,255,255,0.9)',
			        'dynamicDraw': true,
			        'thickness': 0.2,
			        'tickColorizeValues': true
			    });

				//only firefox sux in this case
				if (jQuery.browser.mozilla) {
					$(".circleStat").css('MozTransform','scale(0.5,0.5)');
					$(".whiteCircle").css('MozTransform','scale(0.999,0.999)');
					$(".whiteCircle").css('margin-top','20px');
					$(".circleStat").css('margin-top','-60px').css('margin-left','-36px');
				} else {
					$(".circleStat").css('zoom',0.5);
					$(".whiteCircle").css('zoom',0.999);
				}			

			} else {

				$(".whiteCircle").knob({
			        'min':0,
			        'max':100,
			        'readOnly': true,
			        'width': 120,
			        'height': 120,
					'bgColor': 'rgba(255,255,255,0.5)',
			        'fgColor': 'rgba(255,255,255,0.9)',
			        'dynamicDraw': true,
			        'thickness': 0.2,
			        'tickColorizeValues': true
			    });

			}
			
			$(".circleStatsItemBox").each(function(){

				var value = $(this).find(".value > .number").html();
				var unit = $(this).find(".value > .unit").html();
				var percent = $(this).find("input").val()/100;

				var countSpeed = 2300*percent;

				var endValue = value*percent;

				$(this).find(".count > .unit").html(unit);
				$(this).find(".count > .number").countTo({

					from: 0,
				    to: endValue,
				    speed: countSpeed,
				    refreshInterval: 50,
				    onComplete: function(value) {
				    	console.debug(this);
				    }

				});

			});
		
		}
		
		/* ---------- Active Users Chart ---------- */
		
		if($("#activeUsers").length) {
		    var d1 = [];
		    
		    for (var i = 0; i <= 160; i += 1) {
		        d1.push([i, parseInt(Math.random() * 123123)]);
			}	

		    var stack = 0, bars = true, lines = false, steps = false;
		
		    plotWithOptions2(d1, stack, bars, lines, steps);

		}
		
		/* ---------- Realtime chart - Server Load Chart ---------- */
		var data = [], totalPoints = 300;
		function getRandomData() {
			if (data.length > 0)
				data = data.slice(1);

			// do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;
				if (y < 0)
					y = 0;
				if (y > 100)
					y = 100;
				data.push(y);
			}

			// zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i)
				res.push([i, data[i]])
			return res;
		}
		
		// setup control widget
		var updateInterval = 30;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1)
					updateInterval = 1;
				if (updateInterval > 2000)
					updateInterval = 2000;
				$(this).val("" + updateInterval);
			}
		});
		
		if($("#serverLoad").length)
		{	
			var options = {
				series: { shadowSize: 1 },
				lines: { show: true, lineWidth: 3, fill: true, fillColor: { colors: [ { opacity: 0.9 }, { opacity: 0.9 } ] }},
				yaxis: { min: 0, max: 100, tickFormatter: function (v) { return v + "%"; }},
				xaxis: { show: false },
				colors: ["#FA5833"],
				grid: {	tickColor: "#f9f9f9",
						borderWidth: 0, 
				},
			};
			var plot = $.plot($("#serverLoad"), [ getRandomData() ], options);

			update(plot);
		}
	}])
	.controller('MyCtrl_page_todo', ['$scope', function($scope){

	}])
	.controller('MyCtrl_table', ['$scope', function($scope){
		/* ---------- Datable ---------- */
		$('.datatable').dataTable({
			"sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-12'i><'col-lg-12 center'p>>",
			"sPaginationType": "bootstrap",
			"oLanguage": {
				"sLengthMenu": "_MENU_ records per page"
			}
		});
	}])
	.controller('MyCtrl_typography', ['$scope', function($scope){

	}])
	.controller('MyCtrl_widgets', ['$scope', function($scope){
		/* ---------- Placeholder Fix for IE ---------- */
		$('input, textarea').placeholder();

		/* ---------- Auto Height texarea ---------- */
		$('textarea').autosize();   
		
		/* ---------- Calendar Widget ---------- */
		$('#external-events div.external-event').each(function() {

			// it doesn't need to have a start or end
			var eventObject = {
				title: $.trim($(this).text()) // use the element's text as the event title
			};
			
			// store the Event Object in the DOM element so we can get to it later
			$(this).data('eventObject', eventObject);
			
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
			
		});
		
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$('#main_calendar_phone').fullCalendar({
			header: {
				left: 'title',
				right: 'prev,next'
			},
			defaultView: 'agendaDay',
			editable: true,
			events: [
				{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				},
				{
					title: 'Long Event',
					start: new Date(y, m, d-5),
					end: new Date(y, m, d-2)
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d-3, 16, 0),
					allDay: false
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d+4, 16, 0),
					allDay: false
				},
				{
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				},
				{
					title: 'Lunch',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false
				},
				{
					title: 'Birthday Party',
					start: new Date(y, m, d+1, 19, 0),
					end: new Date(y, m, d+1, 22, 30),
					allDay: false
				},
				{
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				}
			]
		});
	}])
	.controller('MyCtrl_n3_charts', ['$scope', function($scope){
		$scope.data = [{x: 0, value: 12}, {x: 1, value: 0}, {x: 2, value: 23}];

		// Column
		$scope.options = {
			lineMode: 'cardinal',
			tension: 0.2,
			series: [
				{y: 'value', type: 'column'},
				{y: 'x', type: 'column'},
				{y: 'value', label: 'Pouet'}
			]
		};
	}]);