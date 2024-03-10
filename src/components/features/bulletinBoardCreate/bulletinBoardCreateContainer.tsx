import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BulletinBoardCreatePresenter } from './bulletinBoardCreatePresenter'

export type BulletinCreate = {
  live_image: string
  live_date: Date
  live_venue_id: number
  artist_id: number
}

export const BulletinBoardCreateContainer = () => {
  // stateを定義
  const [live_image, setLiveImage] = useState('')
  const Today = new Date()
  const [live_date, setLiveDate] = useState(Today)
  const [live_venue_id, setLiveVenueId] = useState(0)
  const [artist_id, setArtistId] = useState(0)

  const navigate = useNavigate()

  // コンポーネント内の関数を定義
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const fileObject = e.target.files[0]
    setLiveImage(window.URL.createObjectURL(fileObject))
  }

  const selectDate = (selectDate: Date) => {
    setLiveDate(selectDate)
  }

  const selectVenue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLiveVenueId(Number(event.target.value))
  }

  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArtistId(Number(event.target.value))
  }

  // selectボタンからid取得
  // バックにartistのidとlocationのidを送る
  const createBulletin = useMutation({
    mutationFn: async (bulletin: BulletinCreate) =>
      await axios.post(
        `${import.meta.env.VITE_APP_API}/bulletin-board`,
        bulletin
      ),
    onSuccess() {
      {
        navigate('/home')
      }
    },
  })
  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    await createBulletin.mutateAsync({
      live_image: live_image,
      live_date: live_date,
      live_venue_id: live_venue_id,
      artist_id: artist_id,
    })
  }
  return (
    <BulletinBoardCreatePresenter
      live_image={live_image}
      live_date={live_date}
      live_venue_id={live_venue_id}
      live_artist_id={artist_id}
      onFileInputChange={onFileInputChange}
      selectDate={selectDate}
      selectVenue={selectVenue}
      selectArtist={selectArtist}
      submitHandler={submitHandler}
    />
  )
}
