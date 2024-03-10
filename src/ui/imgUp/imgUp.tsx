import { useState, createContext } from 'react'

export const ImgUpContext = createContext<{
  live_image: string
  setLiveImage: React.Dispatch<React.SetStateAction<string>>
}>(
  {} as {
    live_image: string
    setLiveImage: React.Dispatch<React.SetStateAction<string>>
  }
)

export const ImgUp = () => {
  const [live_image, setLiveImage] = useState<string>(
    'src/assets/images/sample.png'
  )

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const fileObject = e.target.files[0]
    setLiveImage(window.URL.createObjectURL(fileObject))
  }

  return (
    <ImgUpContext.Provider value={{ live_image, setLiveImage }}>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <img src={live_image} className="h-40 w-40 rounded-lg" />
        <input
          type="file"
          accept="image/*"
          onChange={onFileInputChange}
          className="w-full px-2"
        />
      </div>
    </ImgUpContext.Provider>
  )
}
