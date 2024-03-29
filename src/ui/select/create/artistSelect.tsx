import { useContext } from 'react'
import { artistOptions } from '../../../assets/Options/artistOptions'
import { CreateContext } from '../../../pages/create'

export const ArtistSelecBox = () => {
  const { artistid, setArtistId } = useContext(CreateContext)

  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArtistId(event.target.value)
  }

  return (
    <div className="mt-4 mb-2 text-2xl flex justify-center items-center">
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
