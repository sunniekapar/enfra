"use client";

import Map, { Layer, LayerProps, MapRef, Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";
import BuildingIcon from "@/components/building-icon";
import { LngLat, MapMouseEvent } from "mapbox-gl";
import { useContext, useEffect, useRef } from "react";
import { BuildingContext } from "@/context/buildingContext";
import { MapPinHouse } from "lucide-react";

const layer: LayerProps = {
  id: "add-3d-buildings",
  source: "composite",
  "source-layer": "building",
  filter: ["==", "extrude", "true"],
  type: "fill-extrusion",
  minzoom: 15,
  paint: {
    "fill-extrusion-color": "#aaa",
    "fill-extrusion-height": [
      "interpolate",
      ["linear"],
      ["zoom"],
      15,
      0,
      15.05,
      ["get", "height"],
    ],
  },
};

export default function WorldMap({
  markers,
}: {
  markers: { lat: number; lon: number; type: string; id: number }[];
}) {
  const mapRef = useRef<MapRef>(null);
  const { setLon, setLat, lon, lat } = useContext(BuildingContext);

  useEffect(() => {
    mapRef.current?.flyTo({ center: [lon, lat], duration: 2000 });
  }, [lat, lon]);

  const handleClick = (lngLat: LngLat) => {
    setLon(lngLat.lng);
    setLat(lngLat.lat);
  };

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken="pk.eyJ1Ijoic3Jpbmk0MSIsImEiOiJjbHpkb3FmMmkwcGRzMnJvYTkzaDBleHltIn0.xKlqzZg4eski9OSSnUATww"
      renderWorldCopies={true}
      initialViewState={{
        longitude: -79.378129,
        latitude: 43.656992,
        zoom: 18,
        pitch: 45,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        borderRadius: "1rem",
      }}
      projection={{ name: "globe" }}
      attributionControl={false}
      onClick={(e: MapMouseEvent) => handleClick(e.lngLat)}
    >
      <Marker longitude={lon} latitude={lat}>
        <MapPinHouse className="size-10 text-violet-500" />
      </Marker>

      {markers.map((marker, index) => (
        <Link
          href={`/building/${marker.id}`}
          key={`${index},${marker.lat},${marker.lon}`}
        >
          <Marker longitude={marker.lon} latitude={marker.lat}>
            <BuildingIcon icon={marker.type} />
          </Marker>
        </Link>
      ))}
      <Layer {...layer} />
    </Map>
  );
}
