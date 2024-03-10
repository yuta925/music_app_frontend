import { useState, useContext } from 'react'
import { BulletinBoardPresenter } from './bulletinBoardPresenter'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { ModalContext } from '../../../ui/modal/modal'
import { ArtistContext } from '../../../ui/Select/artistSelect'
import { LocationContext } from '../../../ui/Select/locationSelect'
import { DateContext } from '../../../ui/Select/dateSelect'

export type BulletinBoards = {
  BuiltinBoardId: number
  ImageUrl: string
  Date: Date
  LocationId: number
  ArtistId: number
}

type getBulletins = {
  live_date: string
  locationid: string
  artistid: string
  skip: number
  limit: number
}

export const BulletinBoardContainer = () => {
  const { editModalIsOpen, setEditModalIsOpen } = useContext(ModalContext)
  const { live_date, setLiveDate, selectedDate, setSelectedDate } =
    useContext(DateContext)
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
    useGetBulletins
      .mutateAsync({
        // live_date: live_date,
        // artistid: artistid ? artistid.toString() : '',
        // locationid: locationid ? locationid.toString() : '',
        live_date: '2024-3-10',
        artistid: '1',
        locationid: '1',
        skip: 0,
        limit: 10,
      })
      .then((data) => {
        console.log(data)
        setBulletinBoards(data.data)
        setEditModalIsOpen(false)
      })
  }

  return (
    <ModalContext.Provider value={{ editModalIsOpen, setEditModalIsOpen }}>
      <DateContext.Provider
        value={{ live_date, setLiveDate, selectedDate, setSelectedDate }}
      >
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
