import L from 'leaflet';
import redIcon from 'src/assets/mappin_red.svg'
import blueIcon from 'src/assets/mappin_blue.svg'
//--------------------
export default function LocationIcon(color) {
    const icon = color === "red" ? redIcon : blueIcon;
    
    return L.icon({
        iconUrl: icon,
        iconRetinaUrl: icon,
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [35, 35],
        className: 'leaflet-venue-icon'
    })
};