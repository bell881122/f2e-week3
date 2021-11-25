// MUI
import Paper from '@mui/material/Paper';
//--------------------
export default function BusList({ list, setbusInfo }) {
    return (
        <div style={{ height: '100%', overflowY: 'auto' }}>
            {list.map((item, index) =>
                <Paper
                    key={index}
                    style={{ padding: '8px', marginTop: index === 0 ? '0' : '10px' }}
                    onClick={() => setbusInfo(item)}
                ><h3>{item.RouteName}</h3></Paper >
            )}
        </div>
    )
}