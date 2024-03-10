import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState, createContext } from 'react'

export const DateContext = createContext<{
  live_date: Date
  setLiveDate: React.Dispatch<React.SetStateAction<Date>>
}>(
  {} as {
    live_date: Date
    setLiveDate: React.Dispatch<React.SetStateAction<Date>>
  }
)

export const Dateselect = () => {
  const date = new Date()
  const [live_date, setLiveDate] = useState<Date>(new Date(date.toISOString()))

  const selectLiveDate = (selectDate: Date) => {
    setLiveDate(selectDate)
  }

  return (
    <DateContext.Provider value={{ live_date, setLiveDate }}>
      <div className="text-center <div mt-8 mb-8 text-2xl flex justify-center items-center">
        <DatePicker
          locale="ja"
          selected={live_date}
          onChange={selectLiveDate}
          dateFormat="yyyy/MM/dd"
        />
      </div>
    </DateContext.Provider>
  )
}
