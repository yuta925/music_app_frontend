import { FC, useState } from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import { LocationSelectBox } from '../select/home/locationSelect'
import { Dateselect } from '../select/home/dateSelect'
import { ArtistSelecBox } from '../select/home/artistSelect'

export type NestedModalProps = {
  submitHandler: () => Promise<void>
}

export const NestedModal: FC<NestedModalProps> = ({ submitHandler }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false)
  return (
    <div className="flex flex-auto mt-2 z-30">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setEditModalIsOpen(true)}
        className="w-[75px] h-[30px]"
      >
        <span className="text-xs">検索</span>
        {editModalIsOpen ? (
          <h1 className="text-white">open</h1>
        ) : (
          <h1>close</h1>
        )}
      </Button>

      <Modal isOpen={editModalIsOpen} ariaHideApp={false} className="mt-20 bg-white">
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
