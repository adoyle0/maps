import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { MapboxLayer } from '@deck.gl/mapbox/typed';
import { Layer } from 'solid-map-gl';

import type { JSX } from 'solid-js';

import { allStations } from '~/root';


type ScatData = {
    coordinates: number[]
}


export default function MapScatLayer(props: any) {
    return (
        <Layer customLayer={
            new MapboxLayer({
                id: 'deckgl-scatterplot',
                type: ScatterplotLayer,
                data: allStations(),
                pickable: false,
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
    ) as JSX.Element;
};
