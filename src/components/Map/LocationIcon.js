import L from 'leaflet';
import redIcon from 'src/assets/mappin_red.svg'

const LocationIcon = () => L.icon({
    iconUrl: redIcon,
    iconRetinaUrl: redIcon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
});
export default LocationIcon;