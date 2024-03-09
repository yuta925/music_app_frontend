import { BasicSelect } from '../../../ui/select/selectbox'
import 'react-datepicker/dist/react-datepicker.css'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { SelectLocation } from '../../../ui/selectlocation'
import { FC } from 'react'

type BulletinBoardCreateProps = {
  live_image: string
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const BulletinBoardPresenter: FC<BulletinBoardCreateProps> = ({
  live_image,
  submitHandler,
  onFileInputChange,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col justify-center items-center">
        <img src={live_image} className="h-32 w-32" />
        <input
          type="file"
          accept="image/*"
          onChange={onFileInputChange}
          className="w-full px-2"
        />
      </div>
      <div>
        <SelectLocation />
        <BasicSelect />
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
    </form>
  )
}
