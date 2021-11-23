// MUI
import Paper from '@mui/material/Paper';
//--------------------
export default function BusCardList({ list }) {
    return list === undefined ? null :
        <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 401 }}>
            {list.map((item, index) =>
                <Paper
                    key={index}
                    style={{ padding: '8px', marginTop: index === 0 ? '0' : '10px' }}
                    onClick={() => { console.log(item) }}
                >
                    <h3>{item.RouteName}</h3>
                </Paper >
            )}
        </div>
}