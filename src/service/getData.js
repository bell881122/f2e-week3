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

export function getEstimatedTime(setData, city, routeName, routeUID) {
    getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}/${routeName}?$filter=RouteUID%20eq%20'${routeUID}'&$top=100&$format=JSON`)
        .then(res => {
            let data = res.data;
            if (data.length > 0) {
                const set = new Set();
                let arr = [];
                data = data.filter(item => item.PlateNumb !== "-1");
                data = data.forEach(item => {
                    if (set.has(item.StopUID)) {
                        return true;
                    } else {
                        set.add(item.StopUID);
                        arr.push(item)
                    }
                });
                setData(arr);
            }
        }).catch(err => console.log(err))
}