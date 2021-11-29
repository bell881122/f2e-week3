import React from 'react';
// MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//-------------------
export default function Selector({ label, options, data, setData, setData2, setdirection }) {
    const handleChange = e => {
        const routeName = e.target.value
        setData(routeName);
        if (label === "縣市") {
            setData2("")
        }
        if (label === "路線") {
            setData2(options.filter(x => (x.RouteName && x.RouteName.Zh_tw) === routeName)[0])
            setdirection(0)
        }
    };

    return (
        <FormControl size="small" fullWidth error={false}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data}
                label="label"
                onChange={handleChange}
            >{options && options.map((item, index) => (
                <MenuItem key={index} value={(item.RouteName && item.RouteName.Zh_tw) || item.City}>{(item.RouteName && item.RouteName.Zh_tw) || item.CityName}</MenuItem>
            ))}</Select>
        </FormControl >
    );
}
