( function( $ ) { 

	$( window ).load( function() {

		var sheet = (function() {

			var style = document.createElement("style");

			style.appendChild(document.createTextNode(""));

			document.head.appendChild(style);

			return style.sheet;

		})();

		function Start() {

		    var oldCreateList = window.LayersModule.createList;

		    window.LayersModule.createList = function () {

			    var enhancedCreateList = oldCreateList.apply(this, arguments);

		    	var element = document.getElementsByClassName("fpd-list-row");

		     	for(var i = 0; i < element.length; i++){
			     	element[i].className = 'fpd-list-row';
		     	}

		     	sheet.insertRule(".fpd-cell-2 { visibility:hidden; }", 0);

		     	$('.fpd-list-row').on('mouseenter', function(){

		    		console.log("Waaaaaaaaaaaaaazzaaaaaaaaaaaaaaap!");
		    	})


		     	$('.fpd-list-row').on('mouseleave', function(){
		    		console.log("I'm outta here!");
		    	})

		    	return enhancedCreateList;

		    }

		}

		$(Start);

		function ViewStart(){

			var elements;
			var oldFancyProductDesignerView = window.FancyProductDesignerView._initialize;

			window.FancyProductDesignerView._initialize = function(){

			var stage = arguments[0];

			elements = arguments[1].elements;

				var extendedFancyProductDesignerView = oldFancyProductDesignerView.apply(this, arguments);

				console.log("this " + JSON.stringify(this));

				// var parameters = arguments[0];

				// if(!initialElementsLoaded){
				// 	parameters.evented = false;
				// } else {
				// 	parameters.evented = true;
				// }
				
				return extendedFancyProductDesignerView;
			}

		}

		$(ViewStart);

	});

})( jQuery );


