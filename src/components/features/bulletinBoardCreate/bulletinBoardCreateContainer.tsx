import { useState, createContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { BulletinBoardCreatePresenter } from './bulletinBoardCreatePresenter'

export type BulletinCreate = {
  live_image: string
  live_date: string
  locationid: string
  artistid: string
}

export const CreateContext = createContext<{
  live_image: string
  setLiveImage: React.Dispatch<React.SetStateAction<string>>
  live_date: string
  setLiveDate: React.Dispatch<React.SetStateAction<string>>
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  artistid: string
  setArtistId: React.Dispatch<React.SetStateAction<string>>
  locationid: string
  setLocationId: React.Dispatch<React.SetStateAction<string>>
}>(
  {} as {
    live_image: string
    setLiveImage: React.Dispatch<React.SetStateAction<string>>
    live_date: string
    setLiveDate: React.Dispatch<React.SetStateAction<string>>
    selectedDate: Date
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
    artistid: string
    setArtistId: React.Dispatch<React.SetStateAction<string>>
    locationid: string
    setLocationId: React.Dispatch<React.SetStateAction<string>>
  }
)

export const BulletinBoardCreateContainer = () => {
  // 掲示板作成のためのstate
  const [live_image, setLiveImage] = useState<string>('')
  const [live_date, setLiveDate] = useState<string>('')
  const date = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(date.toISOString())
  )
  const [artistid, setArtistId] = useState<string>('')
  const [locationid, setLocationId] = useState<string>('')

  // ページ遷移のための関数
  const navigate = useNavigate()

  // post処理のための関数
  const createBulletin = useMutation({
    mutationFn: async (bulletin: BulletinCreate) =>
      await axios.post(
        `${import.meta.env.VITE_APP_API}/bulletin-board`,
        bulletin
      ),
    onSuccess() {
      navigate('/home')
    },
  })

  // submitボタンを押した時の処理
  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    await createBulletin.mutateAsync({
      live_image: live_image,
      live_date: live_date,
      locationid: locationid,
      artistid: artistid,
    })
  }

  return (
    <CreateContext.Provider
      value={{
        live_image: live_image,
        setLiveImage: setLiveImage,
        live_date: live_date,
        setLiveDate: setLiveDate,
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
        artistid: artistid,
        setArtistId: setArtistId,
        locationid: locationid,
        setLocationId: setLocationId,
      }}
    >
      <BulletinBoardCreatePresenter submitHandler={submitHandler} />
    </CreateContext.Provider>
  )
}
