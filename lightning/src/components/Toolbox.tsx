import type { JSX } from "solid-js"
import type { Viewport } from "solid-map-gl";
import { useMapContext } from "./MapContext";


export function Toolbox() {
    const [viewport, { setViewport }] = useMapContext();
    return (
        <ul>
            <h3>Toolbox</h3>
            <hr />
            <br />

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    center: { lng: -71.05625, lat: 42.36, },
                    zoom: 15.5,
                    bearing: 160,
                    pitch: 60,
                })} > Fly To Boston </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    center: { lng: -74.0112660425065, lat: 40.70689167578798 },
                    zoom: 15.5,
                    bearing: 10,
                    pitch: 60,
                })} > Fly To NYC </button>
            </li>
        </ul>
    ) as JSX.Element;
};
