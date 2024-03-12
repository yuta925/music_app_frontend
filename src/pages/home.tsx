import { BulletinBoardContainer } from '../components/features/bulletinBoard/bulletinBoardContainer'
import { BulletinBoards } from '../components/features/bulletinBoard/bulletinBoardContainer'
import { useState, createContext } from 'react'

export const HomeContext = createContext<{
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  live_image: string
  setLiveImage: React.Dispatch<React.SetStateAction<string>>
  editModalIsOpen: boolean
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  live_date: string
  setLiveDate: React.Dispatch<React.SetStateAction<string>>
  artistid: string
  setArtistId: React.Dispatch<React.SetStateAction<string>>
  locationid: string
  setLocationId: React.Dispatch<React.SetStateAction<string>>
  bulletinBoards: BulletinBoards[]
  setBulletinBoards: React.Dispatch<React.SetStateAction<BulletinBoards[]>>
}>(
  {} as {
    selectedDate: Date
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
    live_image: string
    setLiveImage: React.Dispatch<React.SetStateAction<string>>
    editModalIsOpen: boolean
    setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    live_date: string
    setLiveDate: React.Dispatch<React.SetStateAction<string>>
    artistid: string
    setArtistId: React.Dispatch<React.SetStateAction<string>>
    locationid: string
    setLocationId: React.Dispatch<React.SetStateAction<string>>
    bulletinBoards: BulletinBoards[]
    setBulletinBoards: React.Dispatch<React.SetStateAction<BulletinBoards[]>>
  }
)

export const Home = () => {
  const date = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(date.toISOString())
  )
  const [live_date, setLiveDate] = useState<string>('')
  const [live_image, setLiveImage] = useState<string>(' ')
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false)
  const [artistid, setArtistId] = useState<string>('')
  const [locationid, setLocationId] = useState<string>('')
  const [bulletinBoards, setBulletinBoards] = useState<BulletinBoards[]>([])
  return (
    <HomeContext.Provider
      value={{
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
        live_image: live_image,
        setLiveImage: setLiveImage,
        editModalIsOpen: editModalIsOpen,
        setEditModalIsOpen: setEditModalIsOpen,
        live_date: live_date,
        setLiveDate: setLiveDate,
        artistid: artistid,
        setArtistId: setArtistId,
        locationid: locationid,
        setLocationId: setLocationId,
        bulletinBoards: bulletinBoards,
        setBulletinBoards: setBulletinBoards,
      }}
    >
      <BulletinBoardContainer />
    </HomeContext.Provider>
  )
}
