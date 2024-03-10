import { FormEvent } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

type setMessage = {
    message: string
    user
}

type submitVoice = {
    text: string     
    voice_url: string
    user_id: number
    time: string
    builtin_board_id: number   
}


export const BulletinContentsContainer = () => {
  const createTaskMessage = useMutation(
    (: ) =>
      axios.post<>(`${process.env.REACT_APP_API_URL}/tasks`, task),
    {
      onSuccess: (res) => {
        const previousTasks = queryClient.getQueryData<Task[]>(['tasks'])
        if (previousTasks) {
          queryClient.setQueryData(['tasks'], [...previousTasks, res.data])
        }
        resetEditedTask()
      },
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )

  const submitMessage = async (e: FormEvent<HTMLFormElement>) => {
    if (editedTask.id === 0)
      createTaskMutation.mutate({
        title: editedTask.title,
      })
  }
  return ()
}
