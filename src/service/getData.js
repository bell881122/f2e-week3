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

export function getCities() {
    getPromise("https://link.motc.gov.tw/v2/Basic/City?$format=JSON")
        .then(res => {
            debugger;
            console.log(res.data)
            // setdata(res.data);
        }).catch(err => console.log(err))
}