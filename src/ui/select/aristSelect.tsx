import { useState, createContext } from 'react'
import { artistOptions } from '../../assets/Options/artistOptions'

export const ArtistContext = createContext<{
  artistid: number
  selectArtistId: React.Dispatch<React.SetStateAction<number>>
}>(
  {} as {
    artistid: number
    selectArtistId: React.Dispatch<React.SetStateAction<number>>
  }
)

export const AristSelecBox = () => {
  const [artistid, selectArtistId] = useState<number>(0)

  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectArtistId(Number(event.target.value))
  }

  return (
    <ArtistContext.Provider value={{ artistid, selectArtistId }}>
      <div className="mt-8 mb-8 text-2xl flex justify-center items-center">
        <select value={artistid} onChange={selectArtist}>
          <option value="">アーティスト</option>
          {artistOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.Name}
            </option>
          ))}
        </select>
      </div>
    </ArtistContext.Provider>
  )
}
