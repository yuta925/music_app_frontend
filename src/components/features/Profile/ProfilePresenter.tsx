import { FC } from 'react'
import { TextField } from '@mui/material'
import { Header2 } from '../../../ui/header/header2'
import Footer from '../../../ui/footer/footer'
import { useContext } from 'react'
import { ProfileContext } from './ProfileContainer'
import { styled } from '@mui/system'

type ProfileProps = {
  getProfile: () => Promise<void>
}

const LoginCard = styled('div')({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  width: '80%', // 横幅を80%に設定
  maxWidth: '200px', // 最大幅を400pxに設定
  '@media (max-width: 768px)': {
    width: '90%', // 画面幅が768px以下の場合、横幅を90%に変更
  },
})
export const ProfilePresenter: FC<ProfileProps> = ({ getProfile }) => {
  const { UserIcon, Name, setName } = useContext(ProfileContext)

  const setUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <>
      <Header2 />
      <div className="flex flex-col mt-20">
        <img src={UserIcon} className="w-[50px] h-[50px] m-[20px]" />
        <LoginCard>
          <TextField
            value={Name}
            label={Name}
            className="round rouded-lg"
            onChange={setUserName}
          />
        </LoginCard>
        <button onClick={getProfile} className="text-white mt-[70px]">
          ユーザー情報を取得する
        </button>
      </div>
      <Footer />
    </>
  )
}
