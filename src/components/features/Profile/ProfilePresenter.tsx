import { FC } from 'react'
import { TextField } from '@mui/material'

type ProfileProps = {
  user_icon: string
  user_name: string
}

export const ProfilePresenter: FC<ProfileProps> = ({
  user_icon,
  user_name,
}) => {
  return (
    <>
      <img src={user_icon} />
      <TextField value={user_name} label="user_name" disabled />
    </>
  )
}
