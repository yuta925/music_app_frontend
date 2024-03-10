import { FC } from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import { useState, createContext } from 'react'
import { LocationSelectBox } from '../select/locationSelect'
import { Dateselect } from '../select/dateSelect'
import { AristSelecBox } from '../select/artistSelect'
import { useNavigate } from 'react-router-dom'

export type NestedModalProps = {
  submitHandler: () => Promise<void>
}

export const ModalContext = createContext<{
  editModalIsOpen: boolean
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>(
  {} as {
    editModalIsOpen: boolean
    setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
)

export const NestedModal: FC<NestedModalProps> = () =>
  // {
  //   submitHandler
  // }
  {
    const navigate = useNavigate()
    const [editModalIsOpen, setEditModalIsOpen] = useState(false)

    return (
      <div className="flex flex-auto mt-2 z-30">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setEditModalIsOpen(true)
          }}
          className="w-[75px] h-[30px]"
        >
          <span className="text-xs">検索</span>
        </Button>

        <Modal isOpen={editModalIsOpen} ariaHideApp={false} className="mt-20">
          <Button onClick={() => setEditModalIsOpen(false)}>閉じる</Button>
          <Dateselect />
          <LocationSelectBox />
          <AristSelecBox />
          <div className="flex justify-center my-8">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/demo')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-8 px-4 rounded"
            >
              この条件で検索する
            </Button>
          </div>
        </Modal>
      </div>
    )
  }
