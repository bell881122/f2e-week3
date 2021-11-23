// MUI
import IconButton from '@mui/material/IconButton';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
//--------------------
export default function IconButtonTool({ setshowCurrentLocation, setshowBusStations }) {
  const list = [
    { icon: <GpsFixedIcon />, onClick: setshowCurrentLocation },
    { icon: <DirectionsBusIcon />, onClick: setshowBusStations },
  ]
  return (
    <div style={{ position: 'absolute', top: 80, left: 10, zIndex: 401 }}>
      {list.map((item, index) =>
        <div key={index} style={{ backgroundColor: '#fff', borderRadius: '50%', marginTop: '8px' }} >
          <IconButton color="primary" size="small" aria-label="Icon"
            onClick={() => item.onClick([])}
          >{item.icon}</IconButton>
        </div>
      )}
    </div>
  )
}