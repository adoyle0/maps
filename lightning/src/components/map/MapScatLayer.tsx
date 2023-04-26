import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { MapboxLayer } from '@deck.gl/mapbox/typed';
import { Layer } from 'solid-map-gl';
import { createEffect, createMemo, createSignal, Show } from 'solid-js';

import type { JSX } from 'solid-js';

import { StationsContext, useStationsContext } from '~/components/StationsContext';

type ScatData = {
    coordinates: number[]
}


export default function MapScatLayer(props: any) {
    const [stations] = useStationsContext();

    const [scats, setScats] = createSignal([]);

    async function getCoords(stations) {
        if (stations() === undefined) { 
            return
        } else if (stations.loading) {
            return stations.loading
        } else if (stations.error) {
            return stations.error
        } else {
            let buf: ScatData[] = [];
            for (const station of stations()) {
                // long lat
                buf.push({ coordinates: [station.Loc.Coordinates[1], station.Loc.Coordinates[0]] })
            };
            return buf;
        };
    };

    const pls = createMemo(() => setScats(getCoords(stations)));

    return (
        <Show when={stations()}>
            <Layer customLayer={
                new MapboxLayer({
                    id: 'deckgl-scatterplot',
                    type: ScatterplotLayer,
                    data: scats(),
                    pickable: true,
                    stroked: false,
                    lineWidthMaxPixels: 0,
                    radiusMinPixels: 1,
                    radiusMaxPixels: 100,
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
