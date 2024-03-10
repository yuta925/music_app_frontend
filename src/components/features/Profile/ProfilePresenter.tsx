import { FC } from 'react'
import { TextField } from '@mui/material'
import { Header2 } from '../../../ui/header/header2'
import Footer from '../../../ui/footer/footer'

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
      <Header2 />
      <img src={user_icon} />
      <TextField value={user_name} label="user_name" disabled />
      <Footer />
    </>
  )
}
