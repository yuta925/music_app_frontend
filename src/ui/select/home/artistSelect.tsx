import { useContext } from 'react'
import { artistOptions } from '../../../assets/Options/artistOptions'
import {} from '../../../pages/create'
import { HomeContext } from '../../../pages/home'

export const ArtistSelecBox = () => {
  const { artistid, setArtistId } = useContext(HomeContext)

  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArtistId(event.target.value)
  }

  return (
    <div className="my-4 text-2xl flex justify-center items-center">
      <select
        value={artistid}
        onChange={selectArtist}
        className="w-[200px] h-[50px] round rounded-lg"
      >
        <option value="">アーティスト</option>
        {artistOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.Name}
          </option>
        ))}
      </select>
    </div>
  )
}
