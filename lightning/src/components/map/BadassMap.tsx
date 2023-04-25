import MapGL, { Viewport } from 'solid-map-gl';
import * as maplibre from 'maplibre-gl';
import MapControls from './MapControls';
import { createSignal } from 'solid-js';

import type { MapOptions } from 'maplibre-gl';
import type { JSX } from 'solid-js';

// deck.gl
import { unstable_clientOnly } from 'solid-start';
const MapScatLayer = unstable_clientOnly(() => import('~/components/map/MapScatLayer'));
const MapArcLayer = unstable_clientOnly(() => import('~/components/map/MapArcLayer'));

import 'maplibre-gl/dist/maplibre-gl.css';
import StyleJson from '~/style/style.json';


export const [viewport, setViewport] = createSignal<Viewport>({
    center: { lng: -71.05625, lat: 42.36, },
    zoom: 15.5,
    bearing: 160,
    pitch: 60,
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
                renderWorldCopies: false,
            } as MapOptions}
            viewport={viewport()}
            onViewportChange={(evt: Viewport) => setViewport(evt)}
            transitionType="flyTo"
        >

            <MapScatLayer />
            <MapArcLayer />
            <MapControls />

        </MapGL >
    ) as JSX.Element;
};
