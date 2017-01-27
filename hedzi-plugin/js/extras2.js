( function( $ ) { 

	$( window ).load( function() {

		var sheet = (function() {

			// Create the <style> tag
			var style = document.createElement("style");

			// Add a media (and/or media query) here if you'd like!
			// style.setAttribute("media", "screen")
			// style.setAttribute("media", "only screen and (max-width : 1024px)")

			// WebKit hack :(
			style.appendChild(document.createTextNode(""));

			// Add the <style> element to the page
			document.head.appendChild(style);

			return style.sheet;

		})();

		function Start() {

		    var oldCreateList = window.LayersModule.createList;

		    window.LayersModule.createList = function () {

		    	//console.log(arguments);

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

			// console.log("Before");
			// console.log(stage);


		// 	// 	console.log("------------>" + this);
				// console.log("---------> " + this.arguments);

				var extendedFancyProductDesignerView = oldFancyProductDesignerView.apply(this, arguments);

				console.log("this " + JSON.stringify(this));

				// alert("huh?");
				// var parameters = arguments[0];


				// if(!initialElementsLoaded){
				// 	parameters.evented = false;
				// } else {
				// 	parameters.evented = true;
				// }
				// console.log("After");
				// console.log(stage);


				return extendedFancyProductDesignerView;
			}

			// console.log(elements);

		}

		$(ViewStart);

	});



})( jQuery );


