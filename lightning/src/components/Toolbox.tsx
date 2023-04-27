import type { JSX } from "solid-js"
import type { Viewport } from "solid-map-gl";
import { mapRotate, setMapRotate } from "./map/BadassMap";
import { useMapContext } from "./MapContext";


export function Toolbox() {
    const [viewport, { setViewport }] = useMapContext();
    return (
        <ul>
            <h3>Toolbox</h3>
            <hr />

            <li>
                <button onClick={() => console.log(viewport())} > Log Viewport </button>
            </li>

            <li>
                <button onClick={() => setMapRotate(!mapRotate())} > Rotate </button>
            </li>

            <br />
            <h3>Fly To:</h3>
            <hr />

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    center: { lng: -90, lat: 38, },
                    zoom: 4,
                    bearing: 0,
                    pitch: 0,
                })} > Default </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    center: { lng: -71.05625, lat: 42.36, },
                    zoom: 15.5,
                    bearing: 250,
                    pitch: 70,
                })} > Boston </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    center: { lng: -74.0112660425065, lat: 40.70689167578798 },
                    zoom: 15.5,
                    bearing: 20,
                    pitch: 70,
                })} > NYC </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    center: { lng: -75.163, lat: 39.957, },
                    zoom: 15,
                    bearing: 250,
                    pitch: 70,
                })} > Philly </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    center: { lng: -87.6258, lat: 41.8919, },
                    zoom: 15,
                    bearing: 220,
                    pitch: 70,
                })} > Chicago </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    bearing: -97.06431629164882,
                    center: { lng: -122.39541884849947, lat: 37.793003756473155 },
                    pitch: 74.51977970937546,
                    zoom: 15.036715935172564,
                })} > San Francisco </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    bearing: 12.7999999999995,
                    center: { lng: -104.98973825831042, lat: 39.74702865551694 },
                    pitch: 74.48927244878884,
                    zoom: 15.393803779018924,
                })} > Denver </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    bearing: 0,
                    center: { lng: -97.74208546273614, lat: 30.26285185584335 },
                    pitch: 67,
                    zoom: 15.497645818761502,
                })} > Austin </button>
            </li>

            <li>
                <button onClick={() => setViewport<Viewport>({
                    ...viewport(),
                    bearing: 24.144565060702007,
                    center: { lng: -118.25670462448103, lat: 34.04554832148695 },
                    pitch: 69.68139031089818,
                    zoom: 15.150714811079322,
                })} > Los Angeles </button>
            </li>

        </ul>
    ) as JSX.Element;
};
