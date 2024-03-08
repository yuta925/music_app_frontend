import { Button, TextField, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { type FC } from 'react'

type LoginProps = {
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  navigate: () => void
  submitAuthhandler: (e: React.FormEvent<HTMLFormElement>) => void
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

const RightAlignedButton = styled(Button)({
  textAlign: 'right',
  marginTop: '10px',
  paddingRight: '0', // ボタンの右側の余白を0に設定
})

const LoginPresenter: FC<LoginProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  navigate,
  submitAuthhandler,
}) => {
  return (
    <form onSubmit={submitAuthhandler}>
      <LoginCard>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
          ログイン
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="パスワード"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          ログイン
        </Button>
        <RightAlignedButton variant="text" onClick={navigate}>
          新規登録画面へ
        </RightAlignedButton>
      </LoginCard>
    </form>
  )
}

export default LoginPresenter
