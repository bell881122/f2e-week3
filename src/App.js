import React from 'react';
// MUI
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MapIcon from '@mui/icons-material/Map';
import 'src/_global.scss'
// Custom
import Selector from 'src/components/Selector';
import { getBusRouteByCity, getEstimatedTime } from 'src/service/getData'
import Cities from 'src/service/cities.json'
//-------------------
function App() {
  const [city, setcity] = React.useState('');
  const [routes, setroutes] = React.useState('');
  const [route, setroute] = React.useState('');
  const [routeData, setrouteData] = React.useState();
  const [stopsData, setstopsData] = React.useState();
  const [direction, setdirection] = React.useState(0);

  React.useEffect(() => {
    if (city) {
      getBusRouteByCity(setroutes, city,);
    }
    if (city && routeData && routeData.RouteName.Zh_tw && routeData.RouteUID)
      getEstimatedTime(setstopsData, city, routeData.RouteName.Zh_tw, routeData.RouteUID)

  }, [setroutes, city, routeData]);

  const directionButton = (str, dir) => (
    <Box
      style={{ width: '50%', color: dir === direction ? '#fff' : '#000', fontWeight: dir === direction ? 'bold' : 'normal' }}
      onClick={() => setdirection(dir)}
    > 往 {str}</Box >
  )

  return (
    <div style={{ maxWidth: '500px', padding: '12px 20px' }}>
      <Box display="flex" mb={1}>
        <Selector label="縣市" options={Cities} data={city} setData={setcity} setData2={setroute} setdirection={setdirection} setstopsData={setstopsData} />
        {city && routes &&
          <>
            <Box mr={1} />
            <Selector label="路線" options={routes} data={route} setData={setroute} setData2={setrouteData} setdirection={setdirection} setstopsData={setstopsData} />
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
            {directionButton(routeData.DepartureStopNameZh, 0)}
            <Divider orientation="vertical" style={{ borderColor: '#fff' }} flexItem />
            {directionButton(routeData.DestinationStopNameZh, 1)}
          </Box>

          <Box style={{ padding: '8px 20px' }}>
            {stopsData ? stopsData.map((item, index) => (
              item.Direction === direction && (
                <>
                  <Box display="flex" style={{ padding: '8px 0' }}>
                    <Box borderRadius={2} display="flex" className="border-primary400">
                      <p className="primary400" style={{ width: '60px', textAlign: 'center', margin: 'auto 0' }}>
                        {item.EstimateTime ? <span>{(item.EstimateTime / 60).toFixed(0)}分</span> : <span style={{ fontSize: '10px' }}>尚未發車</span>}
                      </p>
                    </Box>
                    <p style={{ margin: 'auto 0 auto 8px', fontWeight: 'bold' }}>{item.StopName.Zh_tw}</p>
                  </Box>
                  <Divider light />
                </>)
            )) : <>暫無資料</>}
          </Box>
        </Box>
      }
    </div>
  );
}

export default App;