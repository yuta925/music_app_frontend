// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import './selectbox.css'
// import SearchIcon from '@mui/icons-material/Search';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <div className='selectbox'>
//     <Box sx={{ minWidth: 120 }} style={{ marginLeft: 'auto' }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//     </div>
//   );
// }
import React, { useState } from 'react';

function BasicSelect() {
  const [selectedValue, setSelectedValue] = useState('');
  const options = [
        {value:"1",ArtistId: "1", Name: "The beatls"},
        {value:"2",ArtistId: "2", Name: "SuperBeaver"},
        {value:"3",ArtistId: "3", Name: "ive"},
        {value:"4",ArtistId: "4", Name: "BTS"},
        {value:"5",ArtistId: "5", Name: "嵐"},
        {value:"6",ArtistId: "6", Name: "伊藤史人"},
        {value:"7",ArtistId: "7", Name: "かなぶん"},
        {value:"8",ArtistId: "8", Name: "あいこ"},
        {value:"9",ArtistId: "9", Name: "queen"},
        {value:"10",ArtistId: "10", Name: "radwimps"},
        {value:"11",ArtistId: "11", Name: "The Fuhii"},
        {value:"12",ArtistId: "12", Name: "いとう"},
        {value:"13",ArtistId: "13", Name: "ふひいいい"},
        {value:"14",ArtistId: "14", Name: "バレーボール"},
        {value:"15",ArtistId: "15", Name: "プリン"},
  ];

  // セレクトボックスの値が変更されたときに呼ばれる関数
  const handleChange = (event: any) => {
    // 選択された値をステートに設定
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">アーティスト</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.Name}
          </option>
        ))}
      </select>

      {selectedValue && <p>選択されたアーティスト: {selectedValue}</p>}
    </div>
  );
}

export default BasicSelect;