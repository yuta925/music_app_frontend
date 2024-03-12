import { Box, Typography } from '@mui/material'
import { NestedModal, type NestedModalProps } from '../modal/modal'
import { FC } from 'react'

export const Header: FC<NestedModalProps> = ({ submitHandler }) => {
  return (
    <div className="z-10 bg-slate-900 grid grid-cols-2">
      <Typography variant="h5" sx={{ color: 'white', padding: 3 }}>
        Flame
      </Typography>
      <div className="grid justify-items-end">
        <NestedModal submitHandler={submitHandler} />
      </div>
    </div>
  )
}
