import { useState } from 'react'
import { BulletinBoardPresenter } from './bulletinBoardPresenter'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

export type BulletinBoards = {
  live_image: string
  live_venue_id: number
}

type getBulletins = {
  live_date: Date
  locationid: number
  artistid: number
  skip: number
  limit: number
}

export const BulletinBoardContainer = () => {
  const date = new Date()
  const [artistid, setArtistId] = useState<number>(0)
  const [locationid, setLocationId] = useState<number>(0)
  const [live_date, setLiveDate] = useState<Date>(new Date(date.toISOString()))
  const [bulletinBoards, setBulletinBoards] = useState<BulletinBoards[]>([])

  const useGetBulletins = useMutation({
    mutationFn: async (bulletin: getBulletins) =>
      await axios.get(`${import.meta.env.VITE_APP_API}/bulletin-board`, {
        params: bulletin,
      }),
    onSuccess: (data) => {
      console.log(data)
      setBulletinBoards(data.data)
    },
  })

  const fetchBulletins = async () => {
    console.log('button clicked')
    useGetBulletins.mutateAsync({
      live_date: live_date,
      artistid: artistid,
      locationid: locationid,
      skip: 20,
      limit: 10,
    })
  }

  const selectLiveDate = (selectDate: Date) => {
    setLiveDate(selectDate)
  }
  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArtistId(Number(event.target.value))
  }

  const selectLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationId(Number(event.target.value))
  }

  return (
    <BulletinBoardPresenter
      live_date={live_date || new Date()} // Provide a default value for live_date
      artistid={artistid}
      locationid={locationid}
      selectLiveDate={selectLiveDate}
      selectArtist={selectArtist}
      selectLocation={selectLocation}
      bulletinBoards={bulletinBoards}
      enterBulletinBoard={fetchBulletins}
    />
  )
}
