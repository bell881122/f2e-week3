import React from 'react';
// MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
//-------------------
export default function Selector({ label, options, data, setData, setData2 }) {
    const handleChange = e => {
        setData(e.target.value);
        if (label === "縣市") setData2("")
    };

    return (
        <FormControl size="small" fullWidth error={!options.length}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data}
                label="City"
                onChange={handleChange}
            >
                {options && options.map((item) => (
                    <MenuItem key={item.RouteUID || item.CityID} value={(item.RouteName && item.RouteName.Zh_tw) || item.City}
                        onClick={() => { if (label === "路線") setData2(item) }}
                    >{(item.RouteName && item.RouteName.Zh_tw) || item.CityName}</MenuItem>
                ))}
            </Select>
            {!options.length && <FormHelperText>請選擇縣市</FormHelperText>}
        </FormControl >
    );
}
