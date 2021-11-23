import axios from 'axios'
import { getAuthorizationHeader } from 'src/service/_config'
//--------------------
export function getBusNearbyStation(setdata, lat, lng) {
    (async () => await axios({
        method: 'get',
        url: `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$spatialFilter=nearby(${lat}%2C%20${lng}%2C%201000)&$format=JSON`,
        headers: getAuthorizationHeader()
    }))().then(res => {
        setdata(res.data);
    }).catch(err => console.log(err))
}