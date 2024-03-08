import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

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

function Signin() {
    return (
        <LoginCard>
            <Typography variant="h5" gutterBottom style={{ textAlign: 'center', paddingBottom: '5px' }}>
                新規会員登録
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        borderRadius: '50%', // 正円にするためのborderRadiusを追加
                        width: '150px', // 幅と高さを同じ値に設定します（適切なサイズを選択してください）
                        height: '150px', // 幅と高さを同じ値に設定します（適切なサイズを選択してください）
                        backgroundColor: '#BF0023' // このボタンの色を#BF0023に設定
                    }}
                >
                    画像を選択
                </Button>
            </div>
            <TextField variant="outlined" margin="normal" fullWidth label="ユーザー名" />
            <TextField variant="outlined" margin="normal" fullWidth label="メールアドレス" type="password" />
            <TextField variant="outlined" margin="normal" fullWidth label="パスワード" type="password" />
            <Button variant="contained" style={{ backgroundColor: '#BF0023' }} fullWidth>
                新規会員登録する
            </Button>
            <div style={{ textAlign: 'right', width: '100%' }}>
                <Button variant="text" style={{ justifyContent: 'flex-start' }}>
                    ログイン画面へ
                </Button>
            </div>
        </LoginCard>
    );
}

export default Signin;