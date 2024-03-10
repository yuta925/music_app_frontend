import { useState, createContext, useEffect } from 'react'
import { artistOptions } from '../../assets/Options/artistOptions'

export const ArtistContext = createContext<{
  artistid: string
  selectArtistId: React.Dispatch<React.SetStateAction<string>>
}>(
  {} as {
    artistid: string
    selectArtistId: React.Dispatch<React.SetStateAction<string>>
  }
)

export const AristSelecBox = () => {
  const [artistid, selectArtistId] = useState<string>('')

  useEffect(() => {
    console.log(artistid)
  }, [artistid])

  const selectArtist = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectArtistId(event.target.value)
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
