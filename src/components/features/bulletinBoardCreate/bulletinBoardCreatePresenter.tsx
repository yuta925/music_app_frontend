import { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Header } from '../../../ui/header/header'
import Footer from '../../../ui/footer/footer'
import { Dateselect } from '../../../ui/Select/dateSelect'
import { LocationSelectBox } from '../../../ui/Select/locationSelect'
import { AristSelecBox } from '../../../ui/Select/aristSelect'
import { ImgUp } from '../../../ui/imgUp/imgUp'

type BulletinBoardCreateProps = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const BulletinBoardCreatePresenter: FC<BulletinBoardCreateProps> = ({
  submitHandler,
}) => {
  return (
    <div className="z-10">
      <Header />
      <form onSubmit={submitHandler}>
        <div className="flex flex-col justify-center items-center mt-40">
          <ImgUp />
          <Dateselect />
          <LocationSelectBox />
          <AristSelecBox />
          <div>
            <IconButton type="submit">
              <AddCircleOutlineIcon sx={{ fontSize: 70, color: 'white' }} />
            </IconButton>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
