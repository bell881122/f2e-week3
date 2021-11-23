import React from 'react';
import { useMap } from 'react-leaflet';
// Custom
import Markers from 'src/components/Map/Markers';
//--------------------
export function CurrentLocationMarker({ showCurrentLocation }) {
    const map = useMap();
    const [position, setPosition] = React.useState(null);

    React.useEffect(() => {
        if (map && showCurrentLocation) {
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
            });
        }
    }, [map, showCurrentLocation]);

    return position === null ? null : <Markers position={position} />;
}