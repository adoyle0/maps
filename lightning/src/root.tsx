// @refresh reload
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";

import "./root.css";
import BadassMap from './components/map/BadassMap';
import { StationsProvider } from "./components/StationsContext";

import type { JSX } from "solid-js";


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
                        <A href="/">Map</A>
                        <A href="/stations">Stations</A>
                        <A href="/about">About</A>
                        <Routes>
                            <FileRoutes />
                        </Routes>
                        <BadassMap />
                    </StationsProvider>
                </ErrorBoundary>
                <Scripts />
            </Body>

        </Html>
    ) as JSX.Element;
};
