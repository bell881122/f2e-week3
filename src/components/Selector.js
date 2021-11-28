import React from 'react';
// MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//-------------------
export default function Selector({ label, options, data, setData, setData2 }) {
    const handleChange = e => {
        setData(e.target.value);
    };

    return (
        <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data}
                label="City"
                onChange={handleChange}
            >
                {options.map((item) => (
                    <MenuItem key={item.RouteUID || item.CityID} value={(item.RouteName && item.RouteName.Zh_tw) || item.City}
                        onClick={() => { if (setData2) setData2(item) }}
                    >{(item.RouteName && item.RouteName.Zh_tw) || item.CityName}</MenuItem>
                ))}
            </Select>
        </FormControl >
    );
}
