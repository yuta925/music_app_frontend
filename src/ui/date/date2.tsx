import DatePicker from 'react-datepicker'
import { useState, createContext } from 'react'

export const Date2 = () => {
  const DateContext = createContext({})
  const Today = new Date()
  const [date, setDate] = useState<Date>(Today)

  return (
    <DateContext.Provider value={{ date, setDate }}>
      <div className="text-center">
        <DatePicker
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate || Today)}
          dateFormat="yyyy/MM/dd"
        />
      </div>
    </DateContext.Provider>
  )
}
