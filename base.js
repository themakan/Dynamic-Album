document.addEventListener("DOMContentLoaded", function() { 


	initialize();

});


		function initialize() {
		//  var myLatlng = new google.maps.LatLng(13.17373, -18.49961);
		  var mapOptions = {
		    zoom: 2,
		    center: new google.maps.LatLng(13.17373, -18.49961),
		    mapTypeId:google.maps.MapTypeId.HYBRID
		  }

		  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


		  setPlaces(map, myPlaces);

		}

		var myPlaces = [
			{title: 'My Home', lat: 37.78825, lng:-122.45144, zIndex: 1, loca: 'home.html'},
			{title: 'Kukio, Kona', lat: 19.81210, lng: -155.99413, zIndex: 2, loca: 'kona.html'},
			{title: 'Istanbul, Turkey', lat: 41.00527, lng: 28.97696, zIndex: 3, loca: 'istanbul.html'},
			{title: 'Greve, Italy', lat: 43.58306, lng: 11.31868, zIndex: 4, loca: 'greve.html'},
			{title: 'Lenasia', lat: -26.31749, lng: 27.85362 , zIndex: 5, loca: 'lenasia.html'}
		];


	function createListener (marker, place) {


		google.maps.event.addListener(marker, 'click', function(){
			console.log("MyPLace:",place.loca);
			location.assign(place.loca);

		});

	}

	function setPlaces(map, locations) {
		
		for (var i = 0; i < locations.length; i++) {
		    var place = locations[i];
		    var myLatLng = new google.maps.LatLng(place.lat, place.lng);
		    var marker = new google.maps.Marker({
		        position: myLatLng,
		        map: map,
		        title: place.title,
		        zIndex: place.zIndex
	    	});	

		    console.log("Marker Title:",marker.getTitle());
		    createListener(marker, place);

    	} //end for loop
  	

    } //end function


