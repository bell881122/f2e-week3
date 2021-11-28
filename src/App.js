import React from 'react';
// MUI
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MapIcon from '@mui/icons-material/Map';
import 'src/_global.scss'
// Custom
import Selector from 'src/components/Selector';
import { getBusRouteByCity } from 'src/service/getData'
import Cities from 'src/service/cities.json'
//-------------------
function App() {
  const [city, setcity] = React.useState('');
  const [routes, setroutes] = React.useState('');
  const [route, setroute] = React.useState('');
  const [routeData, setrouteData] = React.useState('');

  React.useEffect(() => {
    if (city) {
      getBusRouteByCity(setroutes, city,);
      setroute("")
    }
  }, [setroutes, city]);

  React.useEffect(() => {
    if (route) {
      console.log(route)
    }
  }, [route]);
  React.useEffect(() => {
    if (routeData) {
      console.log(routeData)
    }
  }, [routeData]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <Box display="flex" mb={1}>
        <Selector label="縣市" options={Cities} data={city} setData={setcity} />
        {city && routes &&
          <>
            <Box mr={1} />
            <Selector label="路線" options={routes} data={route} setData={setroute} setData2={setrouteData} />
          </>
        }
      </Box>

      {routeData &&
        <Box borderRadius={2} boxShadow={3}>
          <Box borderRadius={2} display="flex" className="bg-primary300" style={{ color: '#fff', padding: '16px 32px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}>
            <h2 style={{ width: '100%' }}>{routeData.RouteName.Zh_tw}</h2>
            <a href={routeData.RouteMapImageUrl} target="_blank" rel="noreferrer" style={{ display: 'block', marginLeft: 'auto', color: '#fff' }} ><MapIcon /></a>
          </Box>
          <Box className="bg-primary200" display="flex" style={{ padding: '8px 0', textAlign: 'center' }}>
            <Box style={{ width: '50%', fontWeight: 'bold' }}>
              往 {routeData.DepartureStopNameZh}
            </Box>
            <Divider orientation="vertical" style={{ borderColor: '#fff' }} flexItem />
            <Box style={{ width: '50%', fontWeight: 'bold' }}>
              往 {routeData.DestinationStopNameZh}
            </Box>
          </Box>

          <Box style={{ padding: '8px 20px' }}>
            <Box display="flex" style={{ padding: '8px 0' }}>
              <Box borderRadius={2} display="flex" className="border-primary400">
                <p className="primary400" style={{ width: '52px', textAlign: 'center', margin: 'auto 0' }}>100分</p>
              </Box>
              <p style={{ margin: 'auto 0 auto 8px', fontWeight: 'bold' }}>中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口中正路口</p>
            </Box>

            <Divider light />
          </Box>
        </Box>
      }
    </div>
  );
}

export default App;