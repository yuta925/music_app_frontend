import { useContext } from 'react'
import { CreateContext } from '../../pages/create'

export const ImgUp = () => {
  const { live_image, setLiveImage } = useContext(CreateContext)
  setLiveImage('src/assets/images/sample.png')
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const fileObject = e.target.files[0]
    setLiveImage(window.URL.createObjectURL(fileObject))
    console.log('a', setLiveImage)
    console.log(live_image)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <img src={live_image} className="h-40 w-40 rounded-lg" />
      <input
        type="file"
        accept="image/*"
        onChange={onFileInputChange}
        className="w-full px-2"
      />
    </div>
  )
}
