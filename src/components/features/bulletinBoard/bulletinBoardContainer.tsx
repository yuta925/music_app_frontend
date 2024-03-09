import { useEffect, useState } from 'react'
// import { BulletinBoardPresenter } from '../bulletinBoardCreate/bulletinBoardPresenter'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export type BulletinBoards = {
  live_image: string
  live_venue_id: number
}

export const BulletinBoardContainer = () => {
  const navigate = useNavigate()
  const Today = new Date()
  const [live_date, setLiveDate] = useState<Date>(Today)
  const [artist_id, setArtistId] = useState<number>(0)
  const [bulletinBoards, setBulletinBoards] = useState<BulletinBoards[]>([])

  useEffect(() => {
    // Your existing code inside the useEffect callback
    const getBulletins = async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_APP_API
        }/bulletin-board/${live_date}/${artist_id}`
      )
      setBulletinBoards(res.data)
    }
    getBulletins().then()
  }, [live_date, artist_id])

  const selectLiveDate = (date: Date) => {
    setLiveDate(date)
  }

  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArtistId(Number(event.target.value))
  }

  const enterBulletinBoard = () => {
    navigate(`/bulletin-board/${live_date}/${artist_id}`)
  }

  return (
    <BulletinBoardPresenter
      live_date={live_date}
      artist_id={artist_id}
      selectLiveDate={selectLiveDate}
      selectArtist={selectArtist}
      bulletinBoards={bulletinBoards}
      enterBulletinBoard={enterBulletinBoard}
    />
  )
}
