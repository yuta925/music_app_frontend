import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

type BulletinCreate = {
  live_image: string
  live_Date: string
  live_venue: string
  artist_name: string
}

export const BulletinBoardCreateContainer = () => {
  const [live_image, setLiveImage] = useState('')
  const [live_Date, setLiveDate] = useState('')
  const [live_venue, setLiveVenue] = useState('')
  const [artist_name, setArtistName] = useState('')

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    // React.ChangeEvent<HTMLInputElement>よりファイルを取得
    const fileObject = e.target.files[0]
    // オブジェクトURLを生成し、useState()を更新
    setLiveImage(window.URL.createObjectURL(fileObject))
  }

  const createBulletin = useMutation({
    mutationFn: async (bulletin: BulletinCreate) =>
      await axios.post(
        `${import.meta.env.VITE_APP_API}/bulletin-board`,
        bulletin
      ),
    onSuccess() {
      {
        /* アラートを出す関数を呼び出す */
      }
    },
  })

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    createBulletin.mutateAsync({
      live_image: live_image,
      live_Date: live_Date,
      live_venue: live_venue,
      artist_name: 'artist_name',
    })
  }
  return (
    <BulletinBoardCreatePresenter
      live_image={live_image}
      live_Date={live_Date}
      live_venue={live_venue}
      artist_name={artist_name}
      setLiveImage={setLiveImage}
      setLiveDate={setLiveDate}
      setLiveVenue={setLiveVenue}
      setArtistName={setArtistName}
      submitHandler={submitHandler}
      onFileInputChange={onFileInputChange}
    />
  )
}
