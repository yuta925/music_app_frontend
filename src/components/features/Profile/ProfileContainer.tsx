// import axios from 'axios'
import { ProfilePresenter } from './ProfilePresenter'
import { useState, createContext } from 'react'
// import { useMutation } from '@tanstack/react-query'

// type UserProfile = {
//   UserIcon: string
//   Name: string
// }

export const ProfileContext = createContext<{
  UserIcon: string
  setUserIcon: React.Dispatch<React.SetStateAction<string>>
  Name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}>(
  {} as {
    UserIcon: string
    setUserIcon: React.Dispatch<React.SetStateAction<string>>
    Name: string
    setName: React.Dispatch<React.SetStateAction<string>>
  }
)
export const ProfileContainer = () => {
  const [UserIcon, setUserIcon] = useState<string>(
    'src/assets/images/default.png'
  )
  const [Name, setName] = useState<string>('優太')

  // const getUserProfile = useMutation({
  //   mutationFn: async (Name: string) =>
  //     await axios.get<UserProfile>(`${import.meta.env.VITE_APP_API}/users/me`, {
  //       params: { Name },
  //     }),
  //   onSuccess: (data) => {
  //     console.log(data)
  //     setUserIcon(data.data.UserIcon)
  //   },
  // })

  // const fetchUserProfile = async () => {
  //   console.log('button clicked')
  //   getUserProfile.mutateAsync(Name).then((data) => {
  //     console.log(data)
  //     setUserIcon(data.data.UserIcon)
  //     setName(data.data.Name)
  //   })
  // }

  return (
    <ProfileContext.Provider value={{ UserIcon, setUserIcon, Name, setName }}>
      <ProfilePresenter />
    </ProfileContext.Provider>
  )
}
