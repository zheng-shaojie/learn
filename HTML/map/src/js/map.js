window.onload = function() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiemhlbmdzaGFvamllIiwiYSI6ImNqdDVrM2k5cDA3ZW80NG83NHlweXpiNzYifQ.nUPEZf09-uWFw5cbzMWbBQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.0066, 40.7135], // starting position
        zoom: 15.5, // starting zoom
        pitch: 45,
        bearing: -17.6,
        antialias: true
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', function() {
// Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;

        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }

        map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',

// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
                'fill-extrusion-height': [
                    "interpolate", ["linear"], ["zoom"],
                    15, 0,
                    15.05, ["get", "height"]
                ],
                'fill-extrusion-base': [
                    "interpolate", ["linear"], ["zoom"],
                    15, 0,
                    15.05, ["get", "min_height"]
                ],
                'fill-extrusion-opacity': .6
            }
        }, labelLayerId);
    });
};
