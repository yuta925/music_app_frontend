import { FC } from 'react'
import { TextField } from '@mui/material'
import { Header2 } from '../../../ui/header/header2'
import Footer from '../../../ui/footer/footer'
import { useContext } from 'react'
import { ProfileContext } from './ProfileContainer'
import { styled } from '@mui/system'

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
export const ProfilePresenter: FC = () => {
  const { setName } = useContext(ProfileContext)

  const setUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <>
      <Header2 />
      <div className="flex flex-col mt-20 ">
        <img
          src="src/assets/images/image.png"
          className="w-[150px] h-[150px] mx-[120px] mt-[20px] round rounded-full"
        />
        <LoginCard>
          <TextField
            value={'優太'}
            label={'ユーザー名'}
            className="round rouded-lg"
            disabled
            onChange={setUserName}
          />
        </LoginCard>
      </div>
      <Footer />
    </>
  )
}
