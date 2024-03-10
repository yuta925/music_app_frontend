import { useState, createContext, useEffect } from 'react'
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

  useEffect(() => {
    console.log(artistid)
  }, [artistid])

  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedArtistId = Number(event.target.value)
    selectArtistId(selectedArtistId)
  }

  return (
    <ArtistContext.Provider value={{ artistid, selectArtistId }}>
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
    </ArtistContext.Provider>
  )
}
