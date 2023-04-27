import MapGL, { Camera, Viewport } from 'solid-map-gl';
import * as maplibre from 'maplibre-gl';
import MapControls from './MapControls';
import MapMarkerLayer from './MapMarkerLayer.tsx';

import type { MapOptions } from 'maplibre-gl';
import { createEffect, createSignal, JSX } from 'solid-js';

// deck.gl
import { unstable_clientOnly } from 'solid-start';
const MapScatLayer = unstable_clientOnly(() => import('~/components/map/MapScatLayer'));
const MapArcLayer = unstable_clientOnly(() => import('~/components/map/MapArcLayer'));

import 'maplibre-gl/dist/maplibre-gl.css';
import StyleJson from '~/style/style.json';


export const [mapRotate, setMapRotate] = createSignal(false);
createEffect(() => console.log('Rotate:', mapRotate()));

export const [viewport, setViewport] = createSignal<Viewport>({
    center: { lng: -90, lat: 38, },
    zoom: 4,
    bearing: 0,
    pitch: 0,
});

export default function BadassMap(props: any) {
    return (
        <MapGL
            mapLib={maplibre}
            options={{
                container: 'solid-map-gl will override me',
                style: StyleJson,
                maxPitch: 85,
                antialias: true,
                interactive: true,
                renderWorldCopies: false,
            } as MapOptions}
            viewport={viewport()}
            onViewportChange={(evt: Viewport) => setViewport(evt)}
            transitionType="flyTo"
        >

            <Camera
                rotateViewport={mapRotate()}
                reverse={true}
            />
            <MapScatLayer />
            <MapArcLayer />
            <MapControls />

        </MapGL >
    ) as JSX.Element;
};
