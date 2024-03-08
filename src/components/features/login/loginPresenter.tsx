import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
});

const LoginPresenter = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    return (
        <form >
            <LoginCard>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
                    ログイン
                </Typography>
                <TextField variant="outlined" margin="normal" fullWidth label="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField variant="outlined" margin="normal" fullWidth label="パスワード" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" style={{ backgroundColor: '#BF0023' }} fullWidth>
                    ログイン
                </Button>
                <div style={{ textAlign: 'right', width: '100%' }}>
                    <Button variant="text" style={{ justifyContent: 'flex-start', color: '#BF0023' }} onClick={() => navigate('/signin')} >
                        新規会員登録画面へ
                    </Button>
                </div>
            </LoginCard>
        </form>
    );
}

export default LoginPresenter;