import { Marker, Popup } from 'react-leaflet';
// Custom
import LocationIcon from 'src/components/Map/LocationIcon';
//--------------------
export default function Markers({ position }) {
    const icon = LocationIcon();
    return position === null ? null : (
        <Marker position={position} icon={icon}>
            <Popup>現在位置</Popup>
        </Marker>
    );
}