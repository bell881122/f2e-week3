import { Marker, Popup } from 'react-leaflet';
// Custom
import LocationIcon from 'src/components/Map/LocationIcon';
//--------------------
export default function Markers({ positions, color, onClick }) {
    const icon = LocationIcon(color);
    return positions.map((item, index) => (
        <Marker key={index} position={item.position} icon={icon}
            eventHandlers={{
                click: e => {
                    item.onClick()
                },
            }}
        >
            {item.name && <Popup>{item.name}</Popup>}
        </Marker>
    ));
}