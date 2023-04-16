import { createSignal, Show } from 'solid-js';
import MapGL, { Viewport, Light, Camera } from 'solid-map-gl';
import * as maplibre from 'maplibre-gl';

import type { JSX } from 'solid-js';
import type { MapOptions } from 'maplibre-gl';

import MapControls from './MapControls';
import 'maplibre-gl/dist/maplibre-gl.css';


function BadassMap(): JSX.Element {
    const TILES_URL: string = 'https://api.maptiler.com/maps/024da34e-fa66-4cb3-8f5f-0466b51e972e/style.json?key=Ukl2QNcQUCPAwuelQOvM'

    const options: MapOptions = {
        container: 'solid-map-gl will override me',
        style: TILES_URL,
        maxPitch: 85,
        antialias: true,
    }

    const INITIAL_VIEW_STATE: Viewport = {
        center: [-71.05625, 42.36],
        zoom: 15.5,
        bearing: 160,
        pitch: 60,

    }

    const [viewport, setViewport] = createSignal<Viewport>(INITIAL_VIEW_STATE);

    const [rotate, setRotate] = createSignal<boolean>(true)
    const toggleRotate = () => setRotate<boolean>(!rotate())

    return (
        <MapGL
            mapLib={maplibre}
            options={options}
            viewport={viewport()}
            onViewportChange={(evt: Viewport) => setViewport(evt)}
        >

            <Show
                when={rotate()}
                fallback={<button onClick={toggleRotate}> Rotation On </button>}
            >
                <button onClick={toggleRotate}> Rotation Off </button>
            </Show>

            <MapControls />

            <Light style={{
                anchor: 'viewport',
                color: 'white',
                intensity: 0.9,
            }} />

            <Camera
                rotateViewport={rotate()}
                reverse={true}
            />

        </MapGL>
    );
};

export default BadassMap;
