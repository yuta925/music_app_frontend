import { Autocomplete, TextField } from '@mui/material'
// import { FC } from 'react'
// import BasicDatePicker from '../../../ui/date/date'
import BasicSelect from '../../../ui/select/selectbox'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SelectLocation from '../../../ui/selectlocation'
// type BulletinBoardCreateProps = {
//   live_image: string
//   live_Date: string
//   live_venue: string
//   artist_name: string
//   setLiveImage: (value: string) => void
//   setLiveDate: (value: string) => void
//   setLiveVenue: (value: string) => void
//   setArtistName: (value: string) => void
//   submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
// }

const location = [
  // 会場のデータほしい
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
]

export const BulletinBoardPresenter = () =>
  // {
  //   live_image,
  //   live_Date,
  //   live_venue,
  //   artist_name,
  //   setLiveImage,
  //   setLiveDate,
  //   setLiveVenue,
  //   setArtistName,
  //   submitHandler,
  {
    const [icon, setIcon] = useState('')
    const Today = new Date()
    const [date, setDate] = useState(Today)

    const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return
      const fileObject = e.target.files[0]
      setIcon(window.URL.createObjectURL(fileObject))
    }
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <img src={icon} className="h-32 w-32" />
          <input
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
            className="w-full px-2"
          />
        </div>
        <div>
          {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={location}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="会場名" />}
        /> */}
          <SelectLocation />
          <div className="text-center">
            <DatePicker
              selected={date}
              onChange={(selectedDate) => setDate(selectedDate || Today)}
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <BasicSelect />
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>
    )
  }
