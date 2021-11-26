import React from 'react';
// Custom
import IconButtonGroups from 'src/components/IconButtonGroups';
import BusSection from 'src/components/BusSection';
import MapView from "src/components/Map/MapView";
import 'src/_global.scss'
import { store } from 'src/store/store';
import { Provider } from 'react-redux';
//--------------------
export default function App() {
  const [busList, setbusList] = React.useState();
  const [busInfo, setbusInfo] = React.useState();

  return (
    <Provider store={store}>
      <IconButtonGroups />
      <MapView
        setbusList={setbusList}
        setbusInfo={setbusInfo}
      />
      <BusSection
        busList={busList}
        busInfo={busInfo}
        setbusInfo={setbusInfo}
      />
    </Provider>
  );
}