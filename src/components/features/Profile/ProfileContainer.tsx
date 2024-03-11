import axios from 'axios'
import { ProfilePresenter } from './ProfilePresenter'
import { useState, useEffect } from 'react'

type UserProfile = {
  user_icon: string
  user_name: string
}

export const ProfileContainer = () => {
  const [user_icon, setUserIcon] = useState('src/assets/images/default.png')
  const [user_name, setUserName] = useState('yuta')
  useEffect(() => {
    const getProufile = async () => {
      const response = await axios.get<UserProfile>(
        `${import.meta.env.VITE_APP_API}/users/me`, {
        params: user_name,
      }
      )
      return response.data
    }

    const fetchProfile = async () => {
      const userInfo = await getProufile()
      setUserIcon(userInfo.user_icon)
      setUserName(userInfo.user_name)
    }

    fetchProfile()
  }, [])

  return <ProfilePresenter user_icon={user_icon} user_name={user_name} />
}
