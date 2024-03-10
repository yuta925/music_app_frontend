import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState, createContext, useEffect } from 'react'

export const DateContext = createContext<{
  live_date: string
  setLiveDate: React.Dispatch<React.SetStateAction<string>>
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
}>(
  {} as {
    live_date: string
    setLiveDate: React.Dispatch<React.SetStateAction<string>>
    selectedDate: Date
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  }
)

export const Dateselect = () => {
  const date = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(date.toISOString())
  )
  const [live_date, setLiveDate] = useState<string>('')

  useEffect(() => {
    console.log(selectedDate.toISOString())
  }, [selectedDate])

  const selectLiveDate = (selectDate: Date) => {
    setSelectedDate(selectDate)
    setLiveDate(selectDate.toISOString())
  }

  return (
    <DateContext.Provider
      value={{ selectedDate, setSelectedDate, live_date, setLiveDate }}
    >
      <div className="text-center mt-4 mb-4 text-2xl flex justify-center items-center">
        <DatePicker
          selected={selectedDate}
          onChange={selectLiveDate}
          dateFormat="yyyy/MM/dd"
          className=" w-[200px] h-[50px] round rounded-lg"
        />
      </div>
    </DateContext.Provider>
  )
}
