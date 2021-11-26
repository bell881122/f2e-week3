import React from 'react';
import { useMap } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
// Custom
import Markers from 'src/components/Map/Markers';
import { getBusNearbyStation } from 'src/service/getData'
import { actions, selectData } from 'src/reducer/mapReducer';
//--------------------
export function CurrentLocationMarker() {
    const map = useMap();
    const dispatch = useDispatch();
    const { showCurrentLocation, currentLocation } = useSelector(selectData);

    React.useEffect(() => {
        if (map && showCurrentLocation && dispatch) {
            map.locate().on("locationfound", function (e) {
                dispatch(actions.setCurrentLocation(e.latlng))
                map.flyTo(e.latlng, map.getZoom());
            });
        }
    }, [map, showCurrentLocation, dispatch]);

    return currentLocation === undefined ? null :
        <Markers color="red"
            positions={[{
                name: "現在位置",
                position: [currentLocation.lat, currentLocation.lng]
            }]} />;
}

export function BusStationMarkers({ setbusList, setbusInfo }) {
    const map = useMap();
    const { showBusStations } = useSelector(selectData);
    const [positionList, setpositionList] = React.useState(null);

    React.useEffect(() => {
        if (map && showBusStations) {
            const mapCenter = map.getCenter();
            getBusNearbyStation(setpositionList, mapCenter.lat, mapCenter.lng)
        }
    }, [map, showBusStations, setbusInfo]);

    return positionList === null ? null :
        <Markers positions={positionList.map((item, index) => {
            return {
                name: item.StationName.Zh_tw,
                position: [item.StationPosition.PositionLat, item.StationPosition.PositionLon],
                onClick: () => {
                    let list = item.Stops.map(item => {
                        return {
                            RouteID: item.RouteID,
                            RouteUID: item.RouteUID,
                            RouteName: item.RouteName.Zh_tw,
                        }
                    })
                    setbusList(list);
                    setbusInfo(undefined);
                },
            }
        })} />;
}