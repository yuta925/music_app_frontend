import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import './selectbox.css'

export const BasicSelect = () => {
  const [artist, setArtist] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setArtist(event.target.value as string)
  }

  return (
    <div className="selectbox">
      <Box
        sx={{ maxWidth: 240, justifyItems: 'center', margin: 'auto' }}
        style={{
          marginLeft: 'auto',
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">artist</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={artist}
            label="Age"
            onChange={handleChange}
          >
            {<MenuItem value={10}>Ten</MenuItem> /* {}残しておいて */}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}
