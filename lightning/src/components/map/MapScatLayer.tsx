import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { MapboxLayer } from '@deck.gl/mapbox/typed';
import { Layer } from 'solid-map-gl';
import { Show } from 'solid-js';

import type { JSX } from 'solid-js';

import { allStations } from '~/root';


type ScatData = {
    coordinates: number[]
}

export default function MapScatLayer(props: any) {

    function onHover(info, event) {
        // console.log('hover info:',info, 'hover event:', event);
    };

    function onClick(info, event) {
        console.log('click info:', info, 'click event:', event);
    };

    return (
        <Show when={allStations()}>
            <Layer customLayer={
                new MapboxLayer({
                    id: 'deckgl-scatterplot',
                    type: ScatterplotLayer,
                    data: allStations(),
                    pickable: true,
                    onHover: onHover,
                    onClick: onClick,
                    highlightColor: [255, 255, 255, 1],
                    autoHighlight: true,
                    stroked: false,
                    lineWidthMaxPixels: 0,
                    radiusMinPixels: 1,
                    radiusMaxPixels: 50,
                    radiusUnits: 'meters',
                    getRadius: 1,
                    radiusScale: 10,
                    getPosition: (d: any) => d.coordinates,
                    antialiasing: false,
                    getFillColor: [255, 140, 0],
                } as any)} />
        </Show>
    ) as JSX.Element;
};
