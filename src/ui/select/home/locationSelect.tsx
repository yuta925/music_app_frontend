import { useContext } from 'react'
import { veneuOptions } from '../../../assets/Options/venueOptions'
import {} from '../../../pages/create'
import { HomeContext } from '../../../pages/home'

export const LocationSelectBox = () => {
  const { locationid, setLocationId } = useContext(HomeContext)
  const selectLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationId(event.target.value)
    console.log(locationid)
  }

  return (
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
  )
}
