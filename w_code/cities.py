


import os
import json

filename = "locations_base.json"

with open(str(filename)) as datafile:
  objects = json.load(datafile)


def count(my_list):
  new_list = []
  for element in my_list:
    name = element.get('city')
    if len(name) >= 30:
      new_list.append([len(name), name])
  return new_list

# print(count(objects))
    var myPositions = '{{ travels_list }}';
    console.log(myPositions[0]);
    map = L.map('location_map').setView([45.5, -73.5833], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([45.5, -73.5833]).addTo(map).bindPopup(
       'I\'m here!'
    ).openPopup();

    {% for place in travels_list %}

        console.log(travels_list.index({{place}}));
       console.log( {{ place.city.position.y }} );
        L.marker([ {{ place.city.position.y }} , {{ place.city.position.x }} ]).addTo(map).bindPopup('{{place.city.location_name}}');

    {% endfor %}




<!--
pk.eyJ1IjoibWFyY3VzYmV5IiwiYSI6ImNrYzFmYzNhdTFzeWIydW50ZHk2aHpocjYifQ.f4Q9uWawxc7vp2Mw28cVCQ


mapbox://styles/marcusbey/ckcthb4452sud1iqadzc3nzjh

pk.eyJ1IjoibWFyY3VzYmV5IiwiYSI6ImNrYzFmOGRoeTFzYTkyem54NmlzaWN5eXkifQ.0l0annt45UB2YYrWijtFZg

-->


  var pX = {{px}};
  var pY = {{py}};
  console.log(pX, pY)
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY3VzYmV5IiwiYSI6ImNrYzFmYzNhdTFzeWIydW50ZHk2aHpocjYifQ.f4Q9uWawxc7vp2Mw28cVCQ';
  var map = new mapboxgl.Map({
    container: 'travel_map',
    style: 'mapbox://styles/marcusbey/ckcthb4452sud1iqadzc3nzjh',
    center: [pY, pX],
    zoom: 3,
    attributionControl: false
    });
  map.addControl();


    <script>
    (function () {

        function loadmap() {
            var djoptions = {"srid": null, "extent": [[-90, -180], [90, 180]], "fitextent": true, "center": [0, 0], "zoom": 2, "precision": 6, "minzoom": 2, "maxzoom": 18, "layers": [["Background", "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", ""]], "overlays": [], "attributionprefix": null, "scale": "metric", "minimap": false, "resetview": true, "tilesextent": []},
                options = {djoptions: djoptions, initfunc: loadmap,
                           globals: false, callback: null},
                map = L.Map.djangoMap('location_map', options);

        }
        var loadevents = ["load"];
        if (loadevents.length === 0) loadmap();
        else if (window.addEventListener) for (var i=0; i<loadevents.length; i++) window.addEventListener(loadevents[i], loadmap, false);
        else if (window.jQuery) jQuery(window).on(loadevents.join(' '), loadmap);

    })();
    </script>
      <script>


      console.log(48.8667);
      L.marker([48.8667, 2.3333]).addTo(location_map).bindPopup('Paris');

      console.log(45.5);
      L.marker([45.5, -73.5833]).addTo(location_map).bindPopup('Montreal');

  </script>
