"use client";

import Map, { Marker, NavigationControl } from "react-map-gl";
import { ENV_VARS } from "constants/envVariables";
import { COORDINATE_CENTRE_MAP, MARKERS_MAP } from "constants/markersMap";

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./map.module.scss";

export const MapComponent = () => {
    const mapBoxToken = ENV_VARS.MAPBOX_API_KEY;

    return (
        <div className={styles.mapContainer}>
            <Map
                mapboxAccessToken={mapBoxToken}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                maxZoom={20}
                minZoom={4}
                initialViewState={{
                    longitude: COORDINATE_CENTRE_MAP.lng,
                    latitude: COORDINATE_CENTRE_MAP.lat,
                }}>
                {MARKERS_MAP.map(({ id, lat, lng }) => (
                    <Marker key={id} latitude={lat} longitude={lng} anchor="center" color="red" />
                ))}
                <NavigationControl position="top-left" />
            </Map>
        </div>
    );
};
