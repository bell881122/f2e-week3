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

export function getBusRouteByCity(setData, city) {
    getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${city}?$format=JSON`)
        .then(res => {
            setData(res.data.sort((a, b) => ('' + a.RouteName.Zh_tw).localeCompare(b.RouteName.Zh_tw)))
        }).catch(err => console.log(err))
}

export function getStopOfRoute(city, routeName, routeUID) {
    console.log(city, routeName, routeUID);
    getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/${city}/${routeName}?$filter=RouteUID%20eq%20'${routeUID}'&$top=30&$format=JSON`)
        .then(res => {
            if (res.data.length > 0)
                console.log("getStopOfRoute", res.data)
            // setdata(res.data)
        }).catch(err => console.log(err))
}

export function getEstimatedTime(city, routeName, routeUID) {
    getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}/${routeName}?$filter=RouteUID%20eq%20'${routeUID}'&$top=100&$format=JSON`)
        .then(res => {
            if (res.data.length > 0)
                console.log("getEstimatedTime", res.data)
            // setdata(res.data)
        }).catch(err => console.log(err))
}