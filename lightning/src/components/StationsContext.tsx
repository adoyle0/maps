import { createSignal, createContext, createResource, useContext } from "solid-js";

type ChargingStation = {
    Name: string
    PhoneNumer: string
    IntersectionDirections: string
    AccessTime: string
    Connectors: string[]
    Network: string
    Pricing: string
    RestrictedAccess: boolean
    CntLevel2Chargers: number
    CntLevel3Chargers: number
};

type Location = {
    StreetAddress: string
    City: string
    State: string
    Country: string
    Zip: string
    GeocodeStatus: string
    Coordinates: string
    CoordinateString: string
    Stations: ChargingStation[]
};

type StationRequest = {
    Latitude: number
    Longitude: number
    Distance: number
    CountLimit: number
};

type StationResponse = {
    Dist: number
    Loc: Location
};


export const StationsContext = createContext();

export function StationsProvider(props: any) {
    const [stationsRequest, setStationsRequest] = createSignal<StationRequest>()

    async function fetchStations() {
        const response = await fetch('https://kevinfwu.com/getnearest', {
            method: 'POST',
            cache: 'default',
            body: JSON.stringify(stationsRequest()),
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json() as StationResponse[];
    };

    const [stations] = createResource(stationsRequest, fetchStations);

    return (
        <StationsContext.Provider value={[stations, { setStationsRequest }]}>
            {props.children}
        </StationsContext.Provider>
    );
};


export const useStationsContext = () => useContext(StationsContext);
