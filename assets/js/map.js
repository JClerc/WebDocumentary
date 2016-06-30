
$(window).on('load', function () {

      
    $('.map').each(function (i, elem) {
      var $elem = $(elem);
      $elem.css({
        width: $elem.width(),
        height: $elem.height()
      });
      console.log($elem.width(), $elem.height());
    });


  function initMap() {
    var QG = {lat:  5.8863, lng: -74.6425};
    var barrio = {lat: 6.1866031, lng: -75.5929752};
    var hopital = {lat: 6.2150977, lng: -75.5715678};
    var stade = {lat: 6.2575888, lng: -75.5845507};
    
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  // map pour le côté gentil, Medellin 
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map-medellin-left'), {
      center: QG,
      scrollwheel: false,
      zoom: 10
    }); 
    // Create a marker and set its position.
    var marker1 = new google.maps.Marker({
      map: map,
      position: QG,
      title: 'Hacienda Napoles', 
      icon: iconBase + 'schools_maps.png'
    }); 
    var marker2 = new google.maps.Marker({
      map: map,
      position: barrio,
      title: 'Barrio Pablo Escobar'
    }); 
    var marker3 = new google.maps.Marker({
      map: map,
      position: hopital,
      title: 'Hopital pour Enfants'
    }); 
    var marker4 = new google.maps.Marker({
      map: map,
      position: stade,
      title: 'Stade'
    });
  }

  //map pour le côté méchant, Medellin
  function initMap2(){

    var explosion = {lat:  4.5754006, lng: -74.2136921};
    var assassinats = {lat:  6.2549791, lng: -75.5518103};
    var mort_bonilla = {lat:  4.7267785, lng: -74.0986798};
    var mort_tulio = {lat:  4.6715723, lng: -74.0925297};

    var map2 = new google.maps.Map(document.getElementById('map-medellin-right'), {
        center: explosion,
        scrollwheel: false,
        zoom: 10
      });

      var marker5 = new google.maps.Marker({
        map: map2,
        position: explosion,
        title: 'Explosion de l\'avion'
      });

      var marker6 = new google.maps.Marker({
        map: map2,
        position: assassinats,
        title: '500 officiers de police assassinés'
      });

      var marker7 = new google.maps.Marker({
        map: map2,
        position: mort_bonilla,
        title: 'Meurtre de Rodrigo Lara Bonilla, Ministre de la Justice'
      });

    var marker8 = new google.maps.Marker({
        map: map2,
        position: mort_tulio,
        title: 'Meurtre de Tulio Manuel Castro Gil'
      });

  }

  //carte traffic de drogues
  function initMap3(){

    var medellin = {lat:  6.268844, lng: -75.6664325};
    var normanscay = {lat:  24.618841, lng: -76.828809};
    var miami = {lat:  25.7824618, lng: -80.3011204};

    var map3 = new google.maps.Map(document.getElementById('map-world'), {
        center: normanscay,
        scrollwheel: false,
        zoom: 5
      });

      var marker9 = new google.maps.Marker({
        map: map3,
        position: medellin,
        title: 'Medellin'
      });

      var marker10 = new google.maps.Marker({
        map: map3,
        position: normanscay,
        title: 'Medellin'
      });

      var marker11 = new google.maps.Marker({
        map: map3,
        position: miami,
        title: 'Miami'
      });
  }

  setTimeout(function () {
    initMap();
    initMap2();
    initMap3();    
  }, 50);

});


