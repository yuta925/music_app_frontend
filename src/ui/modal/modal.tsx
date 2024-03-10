import { FC } from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import { useState, createContext } from 'react'
import { LocationSelectBox } from '../Select/locationSelect'
import { Dateselect } from '../Select/dateSelect'
import { AristSelecBox } from '../Select/aristSelect'

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

export const NestedModal: FC<NestedModalProps> = ({ submitHandler }) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  return (
    <div className="grid justify-items-end m-4 ">
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

      <Modal isOpen={editModalIsOpen}>
        <Button onClick={() => setEditModalIsOpen(false)}>閉じる</Button>

        <LocationSelectBox />
        <Dateselect />

        <AristSelecBox />

        <Button variant="contained" color="primary" onClick={submitHandler}>
          この条件で検索する
        </Button>
      </Modal>
    </div>
  )
}
