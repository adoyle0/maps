import { createSignal, createContext, createResource, useContext } from "solid-js";

import type { Viewport } from "solid-map-gl";

export const MapContext = createContext();


export function MapContextProvider(props: any) {
    const [viewport, setViewport] = createSignal<Viewport>({
        center: { lng: -71.05625, lat: 42.36, },
        zoom: 15.5,
        bearing: 160,
        pitch: 60,
    });

    return (
        <MapContext.Provider value={[viewport, { setViewport }]}>
            {props.children}
        </MapContext.Provider>
    );
};


export const useMapContext = () => useContext(MapContext);
