import MapGL, { Camera, Viewport } from 'solid-map-gl';
import * as maplibre from 'maplibre-gl';
import MapControls from './MapControls';

import type { MapOptions } from 'maplibre-gl';
import { createEffect, createSignal, JSX } from 'solid-js';

// deck.gl
import { unstable_clientOnly } from 'solid-start';
const MapScatLayer = unstable_clientOnly(() => import('~/components/map/MapScatLayer'));
const MapArcLayer = unstable_clientOnly(() => import('~/components/map/MapArcLayer'));
const MapIconLayer = unstable_clientOnly(() => import('~/components/map/MapIconLayer'));

import 'maplibre-gl/dist/maplibre-gl.css';
import StyleJson from '~/style/style.json';


export const [mapRotate, setMapRotate] = createSignal(false);
createEffect(() => console.log('Rotate:', mapRotate()));

export const [viewport, setViewport] = createSignal<Viewport>({
    id: '0-0-0-0-0-0-0-0-0-1-0-0-0-1-0-0-0', // this is what it likes to be called or the map won't move...
    center: { lng: -96, lat: 38, },
    zoom: 4.25,
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
            <MapIconLayer />
            <MapControls />

        </MapGL >
    ) as JSX.Element;
};
