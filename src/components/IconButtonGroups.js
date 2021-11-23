// MUI
import IconButton from '@mui/material/IconButton';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
//--------------------
export default function IconButtonTool({ setshowCurrentLocation }) {
  const list = [
    { icon: <GpsFixedIcon />, onClick: setshowCurrentLocation },
  ]
  return (
    <div style={{ position: 'absolute', top: 84, left: 10, zIndex: 401 }}>
      {list.map((item, index) =>
        <div key={index} style={{ backgroundColor: '#fff', borderRadius: '50%' }} >
          <IconButton color="primary" size="small" aria-label="Icon"
            onClick={() => item.onClick([])}
          >{item.icon}</IconButton>
        </div>
      )}
    </div>
  )
}