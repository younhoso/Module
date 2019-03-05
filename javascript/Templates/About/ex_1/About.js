import $ from "jquery";

var data = [
  { "color": "#19f" },
  { "color": "#27ae60", "delay": 600 },
  { "color": "#9b59b6", "delay": 1200 },
]

$(document).ready(function(){
	"use strict";
	var $bars = $( ".bar" ),
		methods = {
			init: function(el) {
				this.el = $(el);
				this.bindEvents(); // Bind events
				return this
			},
			bindEvents: function() {
				// .bar 하나하나를 반복 합니다.
				$bars.each( function(index) {
					var $bar = $( this ),
							$pct = $bar.find( ".pct" )
							
					setTimeout( function() {
						$bar.css( "background-color", data[index].color )
							.animate({
								"width": $pct.html()
							}, 3000, function() {

              $pct.css({
                "color": data[index].color,
                "opacity": 1
              });
            });
					},data[index].delay);			
				});
			}
		};
	
	// Initialize on page load
	methods.init();	
});