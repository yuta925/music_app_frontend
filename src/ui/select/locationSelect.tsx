import { useState, createContext } from 'react'
import { veneuOptions } from '../../assets/Options/venueOptions'

export const LocationContext = createContext<{
  locationid: string
  selectLocationId: React.Dispatch<React.SetStateAction<string>>
}>(
  {} as {
    locationid: string
    selectLocationId: React.Dispatch<React.SetStateAction<string>>
  }
)

export const LocationSelectBox = () => {
  const [locationid, selectLocationId] = useState<string>('')

  const selectLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectLocationId(event.target.value)
    console.log(locationid)
  }

  return (
    <LocationContext.Provider value={{ locationid, selectLocationId }}>
      <div className="mt-4 mb-4 text-2xl flex justify-center items-center">
        <select
          value={locationid}
          onChange={selectLocation}
          className="w-[200px] h-[50px] round rounded-lg"
        >
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
