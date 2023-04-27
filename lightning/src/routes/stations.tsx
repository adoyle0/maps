import { Title, } from 'solid-start';

import type { JSX } from 'solid-js';

import AccordionTest from '~/components/AccordionTest';
import { useStationsContext } from '~/components/StationsContext';

import { viewport } from '~/components/map/BadassMap';

const TEST_PACKET: StationRequest = {
    Latitude: 42.36,
    Longitude: -71.05625,
    Distance: 10,
    CountLimit: 200,
};

export default function Stations() {
    const [stations, { setStationsRequest }] = useStationsContext();

    setStationsRequest({
        Latitude: viewport().center.lat,
        Longitude: viewport().center.lng,
        Distance: 10,
        CountLimit: 200,
    });

    return (
        <main>
            <Title>Ride the Lightning</Title>
            <AccordionTest />
        </main>
    ) as JSX.Element;
};
