import { useState, useContext } from 'react'
import { BulletinBoardPresenter } from './bulletinBoardPresenter'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { ModalContext } from '../../../ui/modal/modal'
import { ArtistContext } from '../../../ui/Select/aristSelect'
import { LocationContext } from '../../../ui/Select/locationSelect'
import { DateContext } from '../../../ui/Select/dateSelect'

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
  const { editModalIsOpen, setEditModalIsOpen } = useContext(ModalContext)
  const { live_date, setLiveDate } = useContext(DateContext)
  const { artistid, selectArtistId } = useContext(ArtistContext)
  const { locationid, selectLocationId } = useContext(LocationContext)
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
      skip: 0,
      limit: 10,
    })
  }

  return (
    <ModalContext.Provider value={{ editModalIsOpen, setEditModalIsOpen }}>
      <DateContext.Provider value={{ live_date, setLiveDate }}>
        <LocationContext.Provider value={{ locationid, selectLocationId }}>
          <ArtistContext.Provider value={{ artistid, selectArtistId }}>
            <BulletinBoardPresenter
              enterBulletinBoard={fetchBulletins}
              bulletinBoards={bulletinBoards}
            />
          </ArtistContext.Provider>
        </LocationContext.Provider>
      </DateContext.Provider>
    </ModalContext.Provider>
  )
}
