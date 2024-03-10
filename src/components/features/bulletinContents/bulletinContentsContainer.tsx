// import { FormEvent, useState } from 'react'
// import { useMutation } from '@tanstack/react-query'
// import axios from 'axios'

// /* どっちか実装 */
// type submitMessage = {
//   text: string
//   user_id: number
//   time: string
//   builtin_board_id: number
// }
// type submitVoice = {
//   voice_url: string
//   user_id: number
//   time: string
//   builtin_board_id: number
// }

// export const BulletinContentsContainer = () => {
//   // stateを定義(どちらか採用)
//   const [text, setText] = useState('')
//   const [voice_url, setVoiceUrl] = useState('')
//   // 共通
//   const [user_id, setUserId] = useState(0)
//   const [time, setTime] = useState('')
//   const [builtin_board_id, setBulletinBoardId] = useState(0)
//   const [contents, setContents] = useState<submitMessage[]>([])
//   /* api通信を定義
//   * メッセージをポストする
//   * メッセージをゲットする
//   */
//  const postMessage = async () => {
//   await axios.post(`${process.env.REACT_APP_API_URL}/bulletin-contents`, {
//     text: text,
//     user_id: user_id,
//     time: time,
//     builtin_board_id: builtin_board_id,
//   })
//  }

//   const getContents = useMutation({
//     mutationFn: async ( builtin_board_id ) =>
//       await axios.get(`${process.env.REACT_APP_API_URL}/bulletin-contents/${}/${}/${}/${}`, {
//         params: builtin_board_id,
//       }),
//     onSuccess: (data) => {
//       console.log(data)
//       setContents(data.data)
//     },
//   })
//   {
// }}
