'use client';

import * as React from 'react';
import Map, { Layer, LayerProps, Marker } from 'react-map-gl';
import { Building2 } from 'lucide-react';

import 'mapbox-gl/dist/mapbox-gl.css';

const layer: LayerProps = {
  id: 'add-3d-buildings',
  source: 'composite',
  'source-layer': 'building',
  filter: ['==', 'extrude', 'true'],
  type: 'fill-extrusion',
  minzoom: 15,
  paint: {
    'fill-extrusion-color': '#aaa',
    'fill-extrusion-height': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'height'],
    ],
  },
};

export default function WorldMap() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoic3Jpbmk0MSIsImEiOiJjbHpkb3FmMmkwcGRzMnJvYTkzaDBleHltIn0.xKlqzZg4eski9OSSnUATww"
      renderWorldCopies={true}
      initialViewState={{
        longitude: -73.865433,
        latitude: 40.837048,
        zoom: 18,
        pitch: 45,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        borderRadius: '1rem',
      }}
    >
      <Marker longitude={-73.865433} latitude={40.837048}>
        <Building2 />
      </Marker>
      <Layer {...layer} />
    </Map>
  );
}
