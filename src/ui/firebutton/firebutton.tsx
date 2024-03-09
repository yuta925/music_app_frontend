import React, { useState } from 'react';
import { Button } from "@mui/material";

const FireButton = () => {
  const originalImage = 'src/ui/5d686d20ad5d533f.svg'; // 元の画像のURL
  const newImage = 'src/ui/74ded5ed6a42fc41.svg'; // 新しい画像のURL

  const [buttonImage, setButtonImage] = useState(originalImage); // 初期画像のURLを設定

  // ボタンがクリックされたときに画像を切り替える関数
  const handleButtonClick = () => {
    // 現在の画像のURLが元の画像のURLであれば、新しい画像を表示する
    // そうでなければ、元の画像を表示する
    const nextImage = buttonImage === originalImage ? newImage : originalImage;
    setButtonImage(nextImage); // 画像を切り替える
  };

  return (
    <Button 
      sx={{ 
        '&:hover': { // カーソルがボタンに合わされたときのスタイルを無効にする
          backgroundColor: 'transparent', // 背景を透明にする
        },
        '&:active': { // ボタンが押されたときのスタイルを無効にする
          backgroundColor: 'transparent', // 背景を透明にする
        },
      }}
      onClick={handleButtonClick}
    >
      <img src={buttonImage} width={50} alt="Button Image" />
    </Button>
  );
}

export default FireButton;

