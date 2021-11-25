import React from 'react';
// MUI
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// Custom
import { getStopOfRoute, getEstimatedTime } from 'src/service/getData'
//--------------------
export default function BusInfo({ busInfo, setbusInfo }) {
    const [routeStops, setrouteStops] = React.useState();
    const [estimatedTime, setestimatedTime] = React.useState();
    const [direction, setdirection] = React.useState(0);

    React.useEffect(() => {
        let intervalId;
        if (busInfo) {
            // 初始化資料
            getStopOfRoute(setrouteStops, busInfo.RouteName, busInfo.RouteUID);
            getEstimatedTime(setestimatedTime, busInfo.RouteName, busInfo.RouteUID);
            // 每 10 秒更新到站資訊
            intervalId = setInterval(() => {
                getEstimatedTime(setestimatedTime, busInfo.RouteName, busInfo.RouteUID);
            }, 1000)
        }

        return () => clearInterval(intervalId);
    }, [busInfo]);

    return (busInfo ?
        <Paper style={{ height: routeStops ? '100%' : 'auto', width: '250px', overflowY: 'auto', boxSizing: 'border-box', padding: '8px' }} >
            <div style={{ display: 'flex', verticalAlign: 'middle' }}>
                <h2 style={{ margin: 'auto auto auto 0' }}>{busInfo.RouteName}</h2>
                <IconButton
                    size="small"
                    aria-label="upload picture"
                    component="p"
                    onClick={() => setbusInfo(undefined)}
                ><CloseIcon /></IconButton>
            </div>
            {routeStops ?
                <>
                    <ButtonGroup style={{ width: '100%' }} size="small" aria-label="button group">
                        {[
                            { direction: 0, title: '去程' },
                            { direction: 1, title: '返程' },
                        ].map((item, index) => (
                            <Button
                                key={index}
                                style={{ width: '50%' }}
                                variant={direction === item.direction ? "contained" : "outlined"}
                                onClick={() => setdirection(item.direction)}
                            >{item.title}</Button>
                        ))}
                    </ButtonGroup>
                    {routeStops[direction].Stops && routeStops[direction].Stops.map((stop, index) =>
                        <div key={index}>
                            {index !== 0 && <hr />}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                                <p style={{ width: 'calc(100% - 60px)' }} >{stop.StopName.Zh_tw} </p>
                                {estimatedTime &&
                                    <p style={{ width: '56px', margin: 'auto 0', textAlign: 'center', backgroundColor: 'blue', color: '#fff' }}>
                                        {estimatedTime.filter(x => x.StopUID === stop.StopUID).length > 0 && estimatedTime.filter(x => x.StopUID === stop.StopUID)[0].EstimateTime ?
                                            <span>{(estimatedTime.filter(x => x.StopUID === stop.StopUID)[0].EstimateTime / 60).toFixed(0)}分</span>
                                            : <span style={{ fontSize: '10px', lineHeight: '24px' }}>尚未發車</span>
                                        }
                                    </p>
                                }
                            </div>
                        </div>
                    )}
                </> : <div style={{ padding: '8px', textAlign: 'center' }}>暫無資料</div>
            }
        </Paper >
        : null
    )
}