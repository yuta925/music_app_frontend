import { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Header2 } from '../../../ui/header/header2'
import { ImgUp } from '../../../ui/imgUp/imgUp'
import { Dateselect } from '../../../ui/select/create/dateSelect'
import { LocationSelectBox } from '../../../ui/select/create/locationSelect'
import { ArtistSelecBox } from '../../../ui/select/create/artistSelect'
import Footer from '../../../ui/footer/footer'
type BulletinBoardCreateProps = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const BulletinBoardCreatePresenter: FC<BulletinBoardCreateProps> = ({
  submitHandler,
}) => {
  return (
    <div className="z-10">
      <Header2 />
      <form onSubmit={submitHandler}>
        <div className="flex flex-col justify-center items-center mt-20">
          <ImgUp />
          <Dateselect />
          <LocationSelectBox />
          <ArtistSelecBox />
          <div>
            <IconButton type="submit" className="mt-4 w-[50px]">
              <AddCircleOutlineIcon sx={{ fontSize: 60, color: 'white' }} />
            </IconButton>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
