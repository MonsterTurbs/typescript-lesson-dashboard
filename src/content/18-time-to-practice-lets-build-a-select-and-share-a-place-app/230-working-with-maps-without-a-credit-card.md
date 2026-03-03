# 230. Working with Maps without a Credit Card 💳❌

Kung di available ang Google billing setup, puwede kang gumamit ng OpenLayers.

## Basic idea

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" />
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
```

```ts
declare var ol: any;

new ol.Map({
  target: 'map',
  layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
  view: new ol.View({
    center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
    zoom: 16,
  }),
});
```

## Note

Pwede muna dummy coordinates habang wala pang geocoding API setup.

## Para sa non-developer 👇

Parang backup route ito: kung di available ang main map provider, may alternative para tuloy ang app demo.
