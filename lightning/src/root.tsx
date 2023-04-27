// @refresh reload
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";

import { createSignal, JSX } from "solid-js";

import { StationsProvider } from "./components/StationsContext";
import BadassMap from './components/map/BadassMap';

import "./root.css";


async function fetchAllStations() {
    let buf: ScatData[] = [];
    const response = await fetch('https://kevinfwu.com/getall');
    for (const station of await response.json()) {
        buf.push({ coordinates: [station.Coordinates[1], station.Coordinates[0]] })
    };
    console.log('Rendering', buf.length, 'dots!');
    return (buf);
};

export const [allStations, setAllStations] = createSignal(fetchAllStations());

export default function Root() {

    return (
        <Html lang="en">
            <Head>
                <Title>Ride the Lightning</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Body>
                <ErrorBoundary>
                    <StationsProvider>
                        <BadassMap />
                        <A href="/">Map</A>
                        <A href="/stations">Stations</A>
                        <A href="/about">About</A>
                        <A href="/tools">Tools</A>
                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </StationsProvider>
                </ErrorBoundary>
                <Scripts />
            </Body>

        </Html>
    ) as JSX.Element;
};
