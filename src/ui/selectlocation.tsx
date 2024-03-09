// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// export default function SelectLocation() {
//   return (
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={location}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="会場名" />}
//     />
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const location = [
//     // 会場のデータほしい
//   { label: 'The Shawshank Redemption'},
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
// ];

import React, { useState } from 'react';

function SelectLocation() {
  const [selectedValue, setSelectedValue] = useState('');

  // セレクトボックスの選択肢
  const options = [
        {value:"1",LocationId: "1", Name: "東京ドーム"},
        {value:"2",LocationId: "2", Name: "武道館"},
        {value:"3",LocationId: "3", Name: "大阪城ホーム"},
        {value:"4",LocationId: "4", Name: "paypayドーム"},
        {value:"5",LocationId: "5", Name: "名古屋ドーム"},
        {value:"6",LocationId: "6", Name: "岡山ドーム"},
        {value:"7",LocationId: "7", Name: "俺の家"},
        {vaalue:"8",LocationId: "8", Name: "関西学院大学"},
        {vaalue:"9",LocationId: "9", Name: "サウナ"},
        {vaalue:"10",LocationId: "10", Name: "ガスト"},
  ];

  // セレクトボックスの値が変更されたときに呼ばれる関数
  const handleChange = (event: any) => {
    // 選択された値をステートに設定
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">会場</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.Name}
          </option>
        ))}
      </select>

      {selectedValue && <p>選択された会場: {selectedValue}</p>}
    </div>
  );
}

export default SelectLocation;