
$(window).on('load', function () {

  maps['map-medellin-left'] = function () {
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
      zoom: 8
    }); 

    // HACIENDA NAPOLES, QG DE PABLO ESCOBAR
    var marker1 = new google.maps.Marker({
      map: map,
      position: QG,
      title: 'Hacienda Napoles', 
      icon: iconBase + 'schools_maps.png'
    }); 

    var contentString11 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Hacienda Napoles</h1>'+
      '<div id="bodyContent">'+
      'L\'Hacienda Nápoles est une hacienda colombienne qui fut construite par le plus important trafiquant de drogue de tous les temps, Pablo Escobar.' +
      'Le site se compose d\'une maison coloniale espagnole et d\'un zoo complet qui comprenait toutes sortes d\'animaux des différents continents tels que des girafes, des autruches, des éléphants, des hippopotames, des poneys, des antilopes rares et des oiseaux exotiques. Le ranch possédait une vaste collection de voitures de luxe et de motos, un aéroport privé et même un circuit de karting.'+
      '</div>'+
      '</div>';

    var infowindow11 = new google.maps.InfoWindow({
      content: contentString11
    });
    marker1.addListener('click', function() {
      infowindow11.open(map, marker1);
    });

    // BARRIO PABLO ESCOBAR
    var marker2 = new google.maps.Marker({
      map: map,
      position: barrio,
      title: 'Barrio Pablo Escobar'
    }); 

    var contentString12 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Barrio Pablo Escobar</h1>'+
      '<div id="bodyContent">'+
      'Grand mécène, il dépense des millions dans les bidonvilles, construisant même un quartier entier sur l\'emplacement d\'une décharge publique, le "Barrio Pablo Escobar"' +
      '</div>'+
      '</div>';

    var infowindow12 = new google.maps.InfoWindow({
      content: contentString12
    });
    marker2.addListener('click', function() {
      infowindow12.open(map, marker2);
    });

    // HOPITAL POUR ENFANTS
    var marker3 = new google.maps.Marker({
      map: map,
      position: hopital,
      title: 'Hopital pour Enfants'
    }); 

    var contentString13 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">L\'Hopital Pour Enfants</h1>'+
      '<div id="bodyContent">'+
      'Il a aussi permis la construction et le financement de plusieurs hopitaux pour enfants comme celui de Medellin.' +
      '</div>'+
      '</div>';

    var infowindow13 = new google.maps.InfoWindow({
      content: contentString13
    });
    marker3.addListener('click', function() {
      infowindow13.open(map, marker3);
    });

    // STADE
    var marker4 = new google.maps.Marker({
      map: map,
      position: stade,
      title: 'Stade'
    });

    var contentString14 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Atlético Nacional</h1>'+
      '<div id="bodyContent">'+
      'Le club de football reçevait beaucoup d\'aide financière de la part de Pablo Escobar. Il était largement lié au cartel de la ville. C\'était un fan de football qui a mis beaucoup d\'argent dans le club.' +
      '</div>'+
      '</div>';

    var infowindow14 = new google.maps.InfoWindow({
      content: contentString14
    });
    marker4.addListener('click', function() {
      infowindow14.open(map, marker4);
    });
  };

  //map pour le côté méchant, Medellin
  maps['map-medellin-right'] = function () {

    var explosion = {lat:  4.5754006, lng: -74.2136921};
    var assassinats = {lat:  6.2549791, lng: -75.5518103};
    var mort_bonilla = {lat:  4.7267785, lng: -74.0986798};
    var mort_tulio = {lat:  4.6715723, lng: -74.0925297};

    var map2 = new google.maps.Map(document.getElementById('map-medellin-right'), {
        center: explosion,
        scrollwheel: false,
        zoom: 7
      });

    // ATTENTAT AVION 

      var marker5 = new google.maps.Marker({
        map: map2,
        position: explosion,
        title: 'Explosion de l\'avion'
      });

      var contentString15 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">L\'Explosion du Boeing 727</h1>'+
      '<div id="bodyContent">'+
      'Le  27 novembre 1989 au matin, un avion commercial de la compagnie colombienne reliant Bogota à Cali est détruit en plein vol. L\'attentat commandité par le baron de la drogue Pablo Escobar, reste intacte dans les mémoires. Surtout celles des proches des 107 victimes qui continuent de réclamer justice.' +
      '</div>'+
      '</div>';

      var infowindow15 = new google.maps.InfoWindow({
        content: contentString15
      });
      marker5.addListener('click', function() {
        infowindow15.open(map2, marker5);
      });

    // 500 POLICIERS ASSASSINÉS

      var marker6 = new google.maps.Marker({
        map: map2,
        position: assassinats,
        title: '500 officiers de police assassinés'
      });

      var contentString16 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">500 policiés assassinés</h1>'+
      '<div id="bodyContent">'+
      'Le cartel de Medellin a mené une campagne de violence contre la police au point de donner des primes à ceux qui assassinaient des agents. Les primes variaient de 100 à 2000 dollars selon la période.' +
      '</div>'+
      '</div>';

      var infowindow16 = new google.maps.InfoWindow({
        content: contentString16
      });
      marker6.addListener('click', function() {
        infowindow16.open(map2, marker6);
      });

      // ASSASSINAT DE BONILLA

      var marker7 = new google.maps.Marker({
        map: map2,
        position: mort_bonilla,
        title: 'Meurtre de Rodrigo Lara Bonilla, Ministre de la Justice'
      });

      var contentString17 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Meurtre de Rodrigo Lara Bonilla</h1>'+
      '<div id="bodyContent">'+
      'Son action a été caractérisée par la poursuite des trafiquants du Cartel de Medellín dirigé par Pablo Escobar. En 1984, il est tué à Bogota par des hommes d\'Escobar lors de son transport vers l\'aéroport'+ 
      'pour prendre un avion à destination de Prague où il devait assurer ses nouvelles fonctions'+ 
      'd\'ambassadeur de Colombie. Sa mort marque le début d\'une guerre entre l\'État et les trafiquants'+
       'de drogue, qui se prolongera pendant plus d\'une décennie' +
      '</div>'+
      '</div>';

      var infowindow17 = new google.maps.InfoWindow({
        content: contentString17
      });
      marker7.addListener('click', function() {
        infowindow17.open(map2, marker7);
      });

      // ASSASSINAT DE CASTRO
      var marker8 = new google.maps.Marker({
        map: map2,
        position: mort_tulio,
        title: 'Meurtre de Tulio Manuel Castro Gil'
      });

      var contentString18 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Meurtre de Tulio Manuel Castro Gil'+
      '<div id="bodyContent">'+
      'C\'était un juge assassiné par le cartel pour avoir condamné Pablo Escobar.' +
      '</div>'+
      '</div>';

      var infowindow18 = new google.maps.InfoWindow({
        content: contentString18
      });
      marker8.addListener('click', function() {
        infowindow18.open(map2, marker8);
      });

  };

  //carte traffic de drogues
  maps['map-world'] = function () {

    var medellin = {lat:  6.268844, lng: -75.6664325};
    var normanscay = {lat:  24.618841, lng: -76.828809};
    var miami = {lat:  25.7824618, lng: -80.3011204};
    var center = {lat: 18.4306677, lng: -77.8378884};

    var map3 = new google.maps.Map(document.getElementById('map-world'), {
        center: center,
        scrollwheel: false,
        zoom: 5
      });

      var marker9 = new google.maps.Marker({
        map: map3,
        position: medellin,
        title: 'Medellin'
      });

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Medellin</h1>'+
      '<div id="bodyContent">'+
      'La ville sur laquelle Pablo Escobar avait le plus d\'influence était évidemment Medellin. C\'était le' +
      'chef du cartel de cette ville. Il y fut même construire un quartier entier, appelé Barrio Pablo Escobar. '+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker9.addListener('click', function() {
    infowindow.open(map3, marker9);
  });

      var marker10 = new google.maps.Marker({
        map: map3,
        position: normanscay,
        title: 'Norman Cay'
      });

      var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Norman Cay</h1>'+
      '<div id="bodyContent">'+
      'L\'ile servait de territoire de transit pour le traffic de cocaïne de Pablo Escobar. Lui et Carlos Lehder avaient acheté' +
      'la plupart des terres de l\'île qui comprend une piste d’atterrissage de 400 mètres, un port, un hôtel, des maisons, des bateaux, des avions et ils font même construire un entrepôt réfrigéré pour stocker la cocaïne. '+
      '</div>'+
      '</div>';

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
  marker10.addListener('click', function() {
    infowindow2.open(map3, marker10);
  });

      var marker11 = new google.maps.Marker({
        map: map3,
        position: miami,
        title: 'Miami'
      });

      var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Miami</h1>'+
      '<div id="bodyContent">'+
      'Miami était le point d\'ancrage nord américain du traffic de cocaïne de Pablo Escobar. C\'est la qu\'arrivait' +
      'la marchandise colombienne pour l\'usage américain. '+
      '</div>'+
      '</div>';

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });
  marker11.addListener('click', function() {
    infowindow3.open(map3, marker10);
  });

      var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map3
      });

        // Set destination, origin and travel mode.
      var request = {
        destination: normanscay,
        origin: medellin,
        travelMode: google.maps.TravelMode.TRANSIT
      };

      // Pass the directions request to the directions service.
      var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
        directionsDisplay.setDirections(response);
      } 
      });
      };
});
  

  // $('.map').each(function (i, elem) {
  //   var $elem = $(elem);
  //   $elem.css({
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   });
  //   console.log($elem.width(), $elem.height());
  // });

  // setTimeout(function () {
  //   initMap();
  //   initMap2();
  //   initMap3();
  // }, 5);



