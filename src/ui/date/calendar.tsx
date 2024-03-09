
 // * 現在の日付を取得
 const CurrentDate = () => {
    const today = new Date()
 
    const year = today.getFullYear()
    const month = ('0' + (today.getMonth() + 1)).slice(-2)
    const day = ('0' + today.getDate()).slice(-2)
 
    return year + '-' + month + '-' + day + ' '
  }

export default CurrentDate;
  
  // * 返り値 : 2022-12-20 (String型)
 