import { IconLayer } from "@deck.gl/layers/typed";
import { MapboxLayer } from "@deck.gl/mapbox/typed";
import { Layer } from "solid-map-gl";

import { createEffect, JSX, Show } from "solid-js";
import { useStationsContext } from "../StationsContext";
import { createMemo } from "solid-js";

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
};

export default function MapIconLayer(props: any) {
    const [stations] = useStationsContext();

    const pls = createMemo(() => stations());

    return (
        <Show when={stations()}>
            <Layer customLayer={
                new MapboxLayer({
                    id: 'deckgl-iconlayer',
                    type: IconLayer,
                    data: pls(),
                    pickable: true,
                    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
                    iconMapping: ICON_MAPPING,
                    getIcon: d => 'marker',
                    sizeScale: 15,
                    getPosition: d => [d.Loc.Coordinates[1],d.Loc.Coordinates[0]],
                    getSize: d => 2,
                    getColor: d => [d.Dist * 100, 140 - (d.Dist * 50), 0]
                } as any)} />
        </Show>
    ) as JSX.Element
};
