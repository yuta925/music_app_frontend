import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import './date.css'
import CurrentDate from './calendar'

export default function BasicDatePicker() {
  return (
    <div className="calendar" style={{ marginRight: 'auto' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label={CurrentDate()} />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}
