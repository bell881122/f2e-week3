import { useDispatch } from 'react-redux';
// MUI
import IconButton from '@mui/material/IconButton';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
// Custom
import { setShowCurrentLocation } from 'src/reducer/mapReducer';
//--------------------
export default function IconButtonTool({ setshowBusStations }) {
  const dispatch = useDispatch();
  const list = [<GpsFixedIcon />, <DirectionsBusIcon />];

  return (
    <div style={{ position: 'absolute', top: 80, left: 10, zIndex: 401 }}>
      {list.map((icon, index) =>
        <div key={index} style={{ backgroundColor: '#fff', borderRadius: '50%', marginTop: '8px' }} >
          <IconButton color="primary" size="small" aria-label="Icon"
            onClick={() => index === 0 ? dispatch(setShowCurrentLocation()) : setshowBusStations([])}
          >{icon}</IconButton>
        </div>
      )}
    </div>
  )
}