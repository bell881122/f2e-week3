import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
// Custom
import 'src/components/Map/MapView.scss'
import { CurrentLocationMarker, BusStationMarkers } from 'src/components/Map/MapTools';
//--------------------
export default function MapView({
    showCurrentLocation,
    showBusStations,
    setbusList,
    setbusInfo,
}) {
    const center = [25.04795444238345, 121.51693473083246]; // 台北車站
    return (
        <MapContainer center={center} zoom={15}>
            <TileLayer
                attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}'
                accessToken="aqrTBfZJJcxOqGScNRrCI5ncIG4mqpmT0Pc8U5FpomZf35CeRwRLRdqd6GWCVbuH"
            />
            {showCurrentLocation && <CurrentLocationMarker showCurrentLocation={showCurrentLocation} />}
            {showBusStations &&
                <BusStationMarkers
                    showBusStations={showBusStations}
                    setbusList={setbusList}
                    setbusInfo={setbusInfo}
                />
            }
        </MapContainer >
    )
}