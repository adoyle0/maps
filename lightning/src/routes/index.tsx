import { Title, } from 'solid-start';

import type { JSX } from 'solid-js';
import { Toolbox } from '~/components/Toolbox';


export default function Home() {
    return (
        <>
            <Title>Ride the Lightning</Title>
            <Toolbox />
        </>
    ) as JSX.Element;
};
