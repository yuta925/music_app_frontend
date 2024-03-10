import { FC } from 'react'
import { TextField } from '@mui/material'
import { Header2 } from '../../../ui/header/header2'
import Footer from '../../../ui/footer/footer'

// type ProfileProps = {
//   user_icon: string
//   user_name: string
// }

export const ProfilePresenter: FC = () =>
  // {
  // user_icon,
  // user_name,
  // }
  {
    return (
      <>
        <Header2 />
        <div className="flex flex-col mt-20">
          <img
            src="src/assets/images/豪炎寺修也.png"
            className="w-[50px] h-[50px]"
          />
          <TextField value="豪炎寺修也" label="user_name" disabled />
        </div>
        <Footer />
      </>
    )
  }
