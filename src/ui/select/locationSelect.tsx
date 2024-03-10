import { useState, createContext } from 'react'
import { veneuOptions } from '../../assets/Options/venueOptions'

export const LocationContext = createContext<{
  locationid: number
  selectLocationId: React.Dispatch<React.SetStateAction<number>>
}>(
  {} as {
    locationid: number
    selectLocationId: React.Dispatch<React.SetStateAction<number>>
  }
)

export const LocationSelectBox = () => {
  const [locationid, selectLocationId] = useState<number>(0)

  const selectLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectLocationId(Number(event.target.value))
  }

  return (
    <LocationContext.Provider value={{ locationid, selectLocationId }}>
      <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
        <select value={locationid} onChange={selectLocation}>
          <option value="">会場</option>
          {veneuOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.Name}
            </option>
          ))}
        </select>
      </div>
    </LocationContext.Provider>
  )
}
