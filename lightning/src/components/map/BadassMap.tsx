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
import { useMapContext } from '../MapContext';


export const [mapRotate, setMapRotate] = createSignal(false);

createEffect(() => console.log(mapRotate()));

export default function BadassMap(props: any) {
    const [viewport, { setViewport }] = useMapContext();
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
