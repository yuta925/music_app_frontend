import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useContext } from 'react'
import { CreateContext } from '../../../pages/create'

export const Dateselect = () => {
  const { selectedDate, setSelectedDate, setLiveDate } =
    useContext(CreateContext)

  useEffect(() => {
    console.log(selectedDate.toISOString())
  }, [selectedDate])

  const selectLiveDate = (selectDate: Date) => {
    setSelectedDate(selectDate)
    setLiveDate(selectDate.toISOString())
  }

  return (
    <div className="text-center mt-4 mb-4 text-2xl flex justify-center items-center">
      <DatePicker
        selected={selectedDate}
        onChange={selectLiveDate}
        dateFormat="yyyy/MM/dd"
        className=" w-[200px] h-[50px] round rounded-lg"
      />
    </div>
  )
}
