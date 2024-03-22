import { FC, useContext } from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import { LocationSelectBox } from '../select/home/locationSelect'
import { Dateselect } from '../select/home/dateSelect'
import { ArtistSelecBox } from '../select/home/artistSelect'
import { HomeContext } from '../../pages/home'

export type NestedModalProps = {
  submitHandler: () => Promise<void>
}

const customStyles = {
  content: {
    borderRadius: '10%',
    spacing: 8,
    // width: '80%',
    // height: '50%',
    // top: '50%',
    // left: '50%',
    // right: 'auto',
  },
}

// const buttonStyles = {
//   content: {
//     spacing: 2,
//   },
// }

export const NestedModal: FC<NestedModalProps> = ({ submitHandler }) => {
  const { editModalIsOpen, setEditModalIsOpen } = useContext(HomeContext)

  return (
    <div className="my-6 mr-4">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setEditModalIsOpen(true)}
        className="w-[75px] h-[30px]"
      >
        <span className="text-xs">検索</span>
      </Button>
      <Modal
        isOpen={editModalIsOpen}
        ariaHideApp={false}
        className="mt-40 bg-white round rounded-sm mx-4 h-[50%]"
        style={customStyles}
      >
        <Button onClick={() => setEditModalIsOpen(false)} sx={{ ml: 2, mt: 2 }}>
          閉じる
        </Button>
        <Dateselect />
        <LocationSelectBox />
        <ArtistSelecBox />
        <div className="flex justify-center my-8">
          <Button
            variant="contained"
            color="primary"
            onClick={submitHandler}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-8 px-4 rounded"
          >
            この条件で検索する
          </Button>
        </div>
      </Modal>
    </div>
  )
}
