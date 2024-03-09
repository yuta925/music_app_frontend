import { Button, TextField, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { type FC } from 'react'

type SignInProps = {
  icon: string
  name: string
  email: string
  password: string
  setName: (name: string) => void
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  navigate: () => void
  submitAuthhandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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
  maxWidth: '400px', // 最大幅を400pxに設定
  '@media (max-width: 768px)': {
    width: '90%', // 画面幅が768px以下の場合、横幅を90%に変更
  },
})

export const SignupPresenter: FC<SignInProps> = ({
  icon,
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  navigate,
  submitAuthhandler,
  onFileInputChange,
}) => {
  return (
    <form onSubmit={submitAuthhandler}>
      <LoginCard>
        <Typography
          variant="h5"
          gutterBottom
          style={{ textAlign: 'center', paddingBottom: '5px' }}
        >
          新規会員登録
        </Typography>
        <div className="flex flex-col justify-center items-center">
          <img src={icon} className="h-32 w-32 round rounded-full" />
          <input
            type="file"
            accept="image/*"
            onChange={onFileInputChange}
            className="w-full px-2"
          />
        </div>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="ユーザー名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="メールアドレス"
          type="password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="パスワード"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: '#BF0023' }}
          fullWidth
        >
          新規会員登録する
        </Button>
        <div style={{ textAlign: 'right', width: '100%' }}>
          <Button
            variant="text"
            style={{ justifyContent: 'flex-start', color: '#BF0023' }}
            onClick={navigate}
          >
            ログイン画面へ
          </Button>
        </div>
      </LoginCard>
    </form>
  )
}
