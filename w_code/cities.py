
  <!--   <section id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div id = "app" class="travel_list">
      #{% include 'travel_list.html' %}
    </div>
    <div id = "now">
      {% include 'now.html' %}
    </div>
  </section>
-->







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
    map = L.map('location_map').setView([51.505, -0.09], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([51.5, -0.09]).addTo(map).bindPopup(
       'I\'m here!'
    ).openPopup();

    {% for place in travels_list %}

        console.log(travels_list.index({{place}}));
       console.log( {{ place.city.position.y }} );
        L.marker([ {{ place.city.position.y }} , {{ place.city.position.x }} ]).addTo(map).bindPopup('{{place.city.location_name}}');

    {% endfor %}




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
