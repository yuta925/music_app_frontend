import { BulletinBoardCreateContainer } from '../components/features/bulletinBoardCreate/bulletinBoardCreateContainer'
import { createContext, useState } from 'react'

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
export const Create = () => {
  const [live_image, setLiveImage] = useState<string>('')
  const [live_date, setLiveDate] = useState<string>('')
  const date = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(date.toISOString())
  )
  const [artistid, setArtistId] = useState<string>('')
  const [locationid, setLocationId] = useState<string>('')

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
      <BulletinBoardCreateContainer />
    </CreateContext.Provider>
  )
}
