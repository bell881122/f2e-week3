import React from 'react';
// Custom
import IconButtonGroups from 'src/components/IconButtonGroups';
import BusSection from 'src/components/BusSection';
import MapView from "src/components/Map/MapView";
import 'src/_global.scss'
//--------------------
export default function App() {
  const [showCurrentLocation, setshowCurrentLocation] = React.useState();
  const [showBusStations, setshowBusStations] = React.useState();
  const [busList, setbusList] = React.useState();
  const [busInfo, setbusInfo] = React.useState();

  return (
    <>
      <IconButtonGroups
        setshowCurrentLocation={setshowCurrentLocation}
        setshowBusStations={setshowBusStations}
      />
      <MapView
        showCurrentLocation={showCurrentLocation}
        showBusStations={showBusStations}
        setbusList={setbusList}
        setbusInfo={setbusInfo}
      />
      <BusSection
        busList={busList}
        busInfo={busInfo}
        setbusInfo={setbusInfo}
      />
    </>
  );
}