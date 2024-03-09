import { FC } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { veneuOptions } from '../../../assets/Options/venueOptions'
import { artistOptions } from '../../../assets/Options/artistOptions'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

type BulletinBoardCreateProps = {
  live_image: string
  live_date: Date
  live_venue_id: number
  live_artist_id: number
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectDate: (selectDate: Date) => void
  selectVenue: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectArtist: (event: React.ChangeEvent<HTMLSelectElement>) => void
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const BulletinBoardCreatePresenter: FC<BulletinBoardCreateProps> = ({
  live_image,
  live_date,
  live_venue_id,
  live_artist_id,
  onFileInputChange,
  selectDate,
  selectVenue,
  selectArtist,
  submitHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div className='flex flex-col justify-center items-center mt-10'>
      
        <div className="flex flex-col justify-center items-center">
          <img src={live_image} className="h-32 w-32" />
          <input
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
            className="w-full px-2"
          />
        </div>
        <div className="text-center <div mt-8 mb-8 text-2xl flex justify-center items-center">
          <DatePicker
            selected={live_date}
            onChange={selectDate}
            dateFormat="yyyy/MM/dd"
          />
        </div>
        <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
          <select value={live_venue_id} onChange={selectVenue}>
            <option value="">会場</option>
            {veneuOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.Name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
          <select value={live_artist_id} onChange={selectArtist}>
            <option value="">アーティスト</option>
            {artistOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.Name}
              </option>
            ))}
          </select>
        </div>
        <IconButton type="submit">
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
    </form>
  )
}
