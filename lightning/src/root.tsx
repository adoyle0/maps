// @refresh reload
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";

import type { JSX } from "solid-js";

import { StationsProvider } from "./components/StationsContext";
import { MapContextProvider } from "./components/MapContext.tsx";
import BadassMap from './components/map/BadassMap';

import "./root.css";


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
                    <MapContextProvider>
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
                    </MapContextProvider>
                </ErrorBoundary>
                <Scripts />
            </Body>

        </Html>
    ) as JSX.Element;
};
