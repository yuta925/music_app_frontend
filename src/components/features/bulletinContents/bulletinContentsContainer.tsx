// import { FormEvent, useState } from 'react'
// import { useMutation } from '@tanstack/react-query'
// import axios from 'axios'

/** どっちか実装 */
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

export const BulletinContentsContainer = () => {
  // stateを定義(どちらか採用)
  //   const [text, setText] = useState('')
  //   const [voice_url, setVoiceUrl] = useState('')
  //   // 共通
  //   const [user_id, setUserId] = useState(0)
  //   const [time, setTime] = useState('')
  //   const [builtin_board_id, setBulletinBoardId] = useState(0)
  //   // api通信を定義
  //   const createMessage = useMutation
  //   const createTaskMessage = useMutation(
  //     (: ) =>
  //       axios.post<>(`${process.env.REACT_APP_API_URL}/tasks`, task),
  //     {
  //       onSuccess: (res) => {
  //         const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
  //         if (previousTasks) {
  //           queryClient.setQueryData(['tasks'], [...previousTasks, res.data])
  //         }
  //         resetEditedTask()
  //       },
  //       onError: (err: any) => {
  //         if (err.response.data.message) {
  //           switchErrorHandling(err.response.data.message)
  //         } else {
  //           switchErrorHandling(err.response.data)
  //         }
  //       },
  //     }
  //   )
  //   const submitMessage = async (e: FormEvent<HTMLFormElement>) => {
  //     if (editedTask.id === 0)
  //       createTaskMutation.mutate({
  //         title: editedTask.title,
  //       })
  //   }
  //   return ()
}
