import { Title, } from 'solid-start';

import type { JSX } from 'solid-js';

import { Toolbox } from '~/components/Toolbox';



export default function Stations() {

    return (
        <main>
            <Title>Ride the Lightning</Title>
            <Toolbox />
        </main>
    ) as JSX.Element;
};
