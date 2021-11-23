import React from 'react';
// Custom
import IconButtonGroups from 'src/components/IconButtonGroups';
import MapView from "src/components/Map/MapView";
import 'src/_global.scss'
//--------------------
export default function App() {
  const [showCurrentLocation, setshowCurrentLocation] = React.useState();
  const [showBusStations, setshowBusStations] = React.useState();

  return (
    <>
      <IconButtonGroups
        setshowCurrentLocation={setshowCurrentLocation}
        setshowBusStations={setshowBusStations}
      />
      <MapView
        showCurrentLocation={showCurrentLocation}
        showBusStations={showBusStations}
      />
    </>
  );
}