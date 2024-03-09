import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectLocation() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={location}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="会場名" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const location = [
    // 会場のデータほしい
  { label: 'The Shawshank Redemption'},
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
];