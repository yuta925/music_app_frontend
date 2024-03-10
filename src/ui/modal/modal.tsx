import { FC } from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import { artistOptions } from '../../assets/Options/artistOptions'
import { veneuOptions } from '../../assets/Options/venueOptions'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

type ModalPorops = {
  live_date: Date
  artistid: number
  locationid: number
  selectLiveDate: (selectDate: Date) => void
  selectArtist: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectLocation: (event: React.ChangeEvent<HTMLSelectElement>) => void
  submitHandler: () => Promise<void>
}

export const NestedModal: FC<ModalPorops> = ({
  live_date,
  artistid,
  locationid,
  selectLiveDate,
  selectArtist,
  selectLocation,
  submitHandler,
}) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setEditModalIsOpen(true)
        }}
      >
        モーダル開く
      </Button>
      <Modal isOpen={editModalIsOpen}>
        <Button onClick={() => setEditModalIsOpen(false)}>閉じる</Button>
        <div className="text-center <div mt-8 mb-8 text-2xl flex justify-center items-center">
          <DatePicker
            selected={live_date}
            onChange={selectLiveDate}
            dateFormat="yyyy/MM/dd"
          />
        </div>
        <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
          <select value={locationid} onChange={selectLocation}>
            <option value="">会場</option>
            {veneuOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.Name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
          <select value={artistid} onChange={selectArtist}>
            <option value="">アーティスト</option>
            {artistOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.Name}
              </option>
            ))}
          </select>
        </div>
        <Button variant="contained" color="primary" onClick={submitHandler}>
          この条件で検索する
        </Button>
      </Modal>
    </div>
  )
}
