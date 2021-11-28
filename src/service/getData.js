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
            console.log(res.data)
            setData(res.data.sort((a, b) => ('' + a.RouteName.Zh_tw).localeCompare(b.RouteName.Zh_tw)))
        }).catch(err => console.log(err))
}

// export function getBusRouteByCity(setData, city) {
//     getPromise(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${city}?$format=JSON`)
//         .then(res => {
//             setData(res.data.sort((a, b) => ('' + a.RouteName.Zh_tw).localeCompare(b.RouteName.Zh_tw)))
//         }).catch(err => console.log(err))
// }