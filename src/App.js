import React from 'react';
// MUI
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';
// Custom
import 'src/_global.scss'
import Selector from 'src/components/Selector';
import Cities from 'src/service/cities.json'
import { getBusRouteByCity, getStopOfRoute, getEstimatedTime } from 'src/service/getData'
//-------------------
function App() {
  const [city, setcity] = React.useState("");
  const [routes, setroutes] = React.useState();
  const [route, setroute] = React.useState("");
  const [routeData, setrouteData] = React.useState();
  const [direction, setdirection] = React.useState(0);
  const [stopsData, setstopsData] = React.useState();
  const [estimatedTime, setestimatedTime] = React.useState();

  React.useEffect(() => {
    if (city) {
      getBusRouteByCity(setroutes, city);
    }
    if (city && routeData && routeData.RouteName.Zh_tw && routeData.RouteUID) {
      getStopOfRoute(setstopsData, city, routeData.RouteName.Zh_tw, routeData.RouteUID)
      getEstimatedTime(setestimatedTime, city, routeData.RouteName.Zh_tw, routeData.RouteUID)
    }
  }, [setroutes, city, routeData]);

  const directionButton = (str, dir) => (
    <a href="/"
      style={{
        display: 'block',
        textDecoration: 'none',
        width: '50%',
        color: dir === direction ? '#fff' : '#000',
        fontWeight: dir === direction ? 'bold' : 'normal'
      }}
      onClick={e => {
        e.preventDefault()
        setdirection(dir)
      }}
    > 往 {str}</a >
  )

  return (
    <div style={{ maxWidth: '400px', padding: '12px 20px' }}>
      <Box display="flex" mb={1}>
        <Selector label="縣市" options={Cities} data={city} setData={setcity} setData2={setroute} />
        {routes &&
          <>
            <Box mr={1} />
            <Selector label="路線" options={routes} data={route} setData={setroute} setData2={setrouteData} setdirection={setdirection} />
          </>
        }
      </Box>
      {routeData &&
        <Box borderRadius={2} boxShadow={3}>
          {/* Selector */}
          <Box borderRadius={2} display="flex" className="bg-primary300" style={{ color: '#fff', padding: '16px 32px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}>
            <h2 style={{ width: '100%' }}>{routeData.RouteName.Zh_tw}</h2>
            <a href={routeData.RouteMapImageUrl} target="_blank" rel="noreferrer" style={{ display: 'block', marginLeft: 'auto', color: '#fff' }} ><InfoIcon /></a>
          </Box>
          {/* Direction */}
          <Box className="bg-primary200" display="flex" style={{ padding: '8px 0', textAlign: 'center' }}>
            {directionButton(routeData.DepartureStopNameZh, 0)}
            <Divider orientation="vertical" style={{ borderColor: '#fff' }} flexItem />
            {directionButton(routeData.DestinationStopNameZh, 1)}
          </Box>
          {/* EstimatedTime */}
          <Box style={{ padding: '8px 20px' }}>
            {stopsData && stopsData.map((item, index) =>
              item.Direction === direction &&
              <Box key={index}>
                {item.Stops.map((stop, index) => (
                  <Box key={stop.StopUID}>
                    <Box display="flex" style={{ padding: '8px 0' }}>
                      <Box borderRadius={2} display="flex" className="border-primary400">
                        <p className="primary400" style={{ width: '60px', textAlign: 'center', margin: 'auto 0', padding: '4px 0' }}>
                          {estimatedTime && estimatedTime.some(x => x.StopUID === stop.StopUID) && estimatedTime
                            .filter(x => x.CurrentStop !== "-1" && x.PlateNumb !== "-1" && x.StopUID === stop.StopUID)
                            .sort((x, y) => x.EstimateTime - y.EstimateTime)
                            .map(item => (item && item.EstimateTime) ?
                              <span>{`${(item.EstimateTime / 60).toFixed(0)}分`}</span>
                              : <span style={{ fontSize: '10px' }}>尚未到站</span>
                            )
                          }
                        </p>
                      </Box>
                      <p style={{ margin: 'auto 0 auto 8px', fontWeight: 'bold' }}>{stop.StopName.Zh_tw}</p>
                    </Box>
                    <Divider light />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      }
    </div>
  );
}

export default App;