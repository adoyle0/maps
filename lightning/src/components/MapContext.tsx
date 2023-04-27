import { createSignal, createContext, createResource, useContext } from "solid-js";

import type { Viewport } from "solid-map-gl";

export const MapContext = createContext();


export function MapContextProvider(props: any) {
    const [viewport, setViewport] = createSignal<Viewport>({
        center: { lng: -90, lat: 38, },
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });

    return (
        <MapContext.Provider value={[viewport, { setViewport }]}>
            {props.children}
        </MapContext.Provider>
    );
};


export const useMapContext = () => useContext(MapContext);
