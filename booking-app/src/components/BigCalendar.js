import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-datepicker/dist/react-datepicker.css'
import { memo } from 'react'
const locales = {
  'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

export const BigCalendar = memo(({ events, className, onEventDoubleClicked }) => (
  <div style={{ width: '100%' }} className={`${className}`}>
    <Calendar
      onDoubleClickEvent={onEventDoubleClicked}
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 500, margin: '50px' }}
    />
  </div>
))
