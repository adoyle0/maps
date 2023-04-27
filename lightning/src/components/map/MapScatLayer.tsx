import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { MapboxLayer } from '@deck.gl/mapbox/typed';
import { Layer } from 'solid-map-gl';

import type { JSX } from 'solid-js';



type ScatData = {
    coordinates: number[]
}


export default function MapScatLayer(props: any) {

    async function fetchAllStations() {
        let buf: ScatData[] = [];
        const response = await fetch('https://kevinfwu.com/getall');
        for (const station of await response.json()) {
            buf.push({ coordinates: [station.Coordinates[1], station.Coordinates[0]] })
        };
        console.log('Rendering', buf.length, 'dots!');
        return (buf);
    };

    return (
        <Layer customLayer={
            new MapboxLayer({
                id: 'deckgl-scatterplot',
                type: ScatterplotLayer,
                data: fetchAllStations(),
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
