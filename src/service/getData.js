import axios from 'axios'
import { getAuthorizationHeader } from 'src/service/_config'
//--------------------
function getPromise(url) {
    return (async () => await axios({
        method: 'get',
        url: url,
        headers: getAuthorizationHeader()
    }))()
}

export function getBusNearbyStation(setdata, lat, lng) {
    getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$spatialFilter=nearby(${lat}%2C%20${lng}%2C%201000)&$format=JSON`)
        .then(res => {
            setdata(res.data);
        }).catch(err => console.log(err))
}

export function getStopOfRoute(setdata, RouteName, RouteUID) {
    getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/Taipei/${RouteName}?$filter=RouteUID%20eq%20'${RouteUID}'&$top=30&$format=JSON`)
        .then(res => {
            if (res.data.length > 0)
                setdata(res.data)
        }).catch(err => console.log(err))
}

export function getEstimatedTime(setdata, RouteName, RouteUID) {
    getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/${RouteName}?$filter=RouteUID%20eq%20'${RouteUID}'&$top=100&$format=JSON`)
        .then(res => {
            if (res.data.length > 0)
                setdata(res.data)
        }).catch(err => console.log(err))
}