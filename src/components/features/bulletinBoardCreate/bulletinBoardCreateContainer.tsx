import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Artists } from '../../../types'

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
  const [live_venues, setLiveVenues] = useState<string[]>([])
  const [artist_name, setArtistName] = useState('')
  const [artist_names, setArtistNames] = useState<string[]>([])

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const fileObject = e.target.files[0]
    setLiveImage(window.URL.createObjectURL(fileObject))
  }

  const getLiveVenues = async () => {
    const response = await axios.get<string[]>(
      `${import.meta.env.VITE_APP_API}/live-venue`,
      { withCredentials: true }
    )
    const live_venues = response.data
    setLiveVenues(live_venues)
  }

  const getArtistNames = async () => {
    const response = await axios.get<Artists[]>(
      `${import.meta.env.VITE_APP_API}/artist`,
      { withCredentials: true }
    )
    const artist_names = response.data
    setArtistNames(artist_names.map((artist) => artist.artist_name))
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
      artist_name: artist_name,
    })
  }
  return (
    <BulletinBoardCreatePresenter
      live_image={live_image}
      live_Date={live_Date}
      live_venue={live_venue}
      live_venues={live_venues}
      artist_name={artist_name}
      artist_names={artist_names}
      setLiveImage={setLiveImage}
      setLiveDate={setLiveDate}
      setLiveVenue={setLiveVenues}
      setArtistName={setArtistNames}
      submitHandler={submitHandler}
      onFileInputChange={onFileInputChange}
      getArtistName={getArtistNames}
      getLiveVenues={getLiveVenues}
    />
  )
}
