import { FC } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { veneuOptions } from '../../../assets/Options/venueOptions'
import { artistOptions } from '../../../assets/Options/artistOptions'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Header2 } from '../../../ui/header/header2'
import Footer from '../../../ui/footer/footer'

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
    <div className="z-10">
      <Header2 />
      <form onSubmit={submitHandler}>
        <div className="flex flex-col justify-center items-center mt-40">
          <div className="flex flex-col justify-center items-center">
            <img src={live_image} className="h-40 w-40 rounded-lg " />
            <input
              type="file"
              accept="image/*"
              onChange={onFileInputChange}
              className="w-full px-2"
            />
          </div>
          <div className="text-center <div mb-8 text-2xl flex justify-center items-center mt-20">
            <DatePicker
              locale="ja"
              selected={live_date}
              onChange={selectDate}
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
            <select value={live_venue_id} onChange={selectVenue}>
              <option className=" text-center" value="">
                会場
              </option>
              {veneuOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.Name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
            <select value={live_artist_id} onChange={selectArtist}>
              <option className=" text-center" value="">
                アーティスト
              </option>
              {artistOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.Name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <IconButton type="submit">
              <AddCircleOutlineIcon sx={{ fontSize: 70, color: 'white' }} />
            </IconButton>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
