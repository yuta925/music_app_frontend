import { FC } from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { LocationSelectBox } from '../select/home/locationSelect'
import { Dateselect } from '../select/home/dateSelect'
import { ArtistSelecBox } from '../select/home/artistSelect'
import { HomeContext } from '../../pages/home'

export type NestedModalProps = {
  submitHandler: () => Promise<void>
}

export const NestedModal: FC<NestedModalProps> = ({ submitHandler }) => {
  const { editModalIsOpen, setEditModalIsOpen } = useContext(HomeContext)
  setEditModalIsOpen(true)
  return (
    <div className="flex flex-auto mt-2 z-30">
      <Button variant="contained" color="primary" className="w-[75px] h-[30px]">
        <span className="text-xs">検索</span>
      </Button>

      <Modal isOpen={editModalIsOpen} ariaHideApp={false} className="mt-20">
        <Button onClick={() => setEditModalIsOpen(false)}>閉じる</Button>
        <Dateselect />
        <LocationSelectBox />
        <ArtistSelecBox />
        <div className="flex justify-center my-8">
          <Button
            variant="contained"
            color="primary"
            onClick={submitHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-8 px-4 rounded"
          >
            この条件で検索する
          </Button>
        </div>
      </Modal>
    </div>
  )
}
