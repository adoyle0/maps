import { Title, } from 'solid-start';

import type { JSX } from 'solid-js';

import AccordionTest from '~/components/AccordionTest';
import { useStationsContext } from '~/components/StationsContext';


const TEST_PACKET: StationRequest = {
    Latitude: 42.36,
    Longitude: -71.05625,
    Distance: 1000,
    CountLimit: 20000,
};

export default function Stations() {
    const [stations, {setStationsRequest}] = useStationsContext();

    setStationsRequest(TEST_PACKET);

    return (
        <>
            <Title>Ride the Lightning</Title>
            <AccordionTest />
        </>
    ) as JSX.Element;
};
