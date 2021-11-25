import React from 'react';
// MUI
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// Custom
import { getStopOfRoute } from 'src/service/getData'
//--------------------
export default function BusInfo({ busInfo, setbusInfo }) {
    const [routeStops, setrouteStops] = React.useState();
    const [direction, setdirection] = React.useState(0);

    React.useEffect(() => {
        if (busInfo) {
            getStopOfRoute(setrouteStops, busInfo.RouteName, busInfo.RouteUID)
        }
    }, [busInfo]);

    return (
        <Paper style={{ height: '100%',width:'250px', overflowY: 'auto', boxSizing: 'border-box', padding: '8px' }} >
            <div style={{ display: 'flex', verticalAlign: 'middle' }}>
                <h2 style={{ margin: 'auto auto auto 0' }}>{busInfo.RouteName}</h2>
                <IconButton
                    size="small"
                    aria-label="upload picture"
                    component="p"
                    onClick={() => setbusInfo(undefined)}
                ><CloseIcon /></IconButton>
            </div>
            {routeStops &&
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
                        <p key={index}>{stop.StopName.Zh_tw}</p>
                    )}
                </>
            }
        </Paper >
    )
}