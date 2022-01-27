import React, { useState } from 'react'
import Datepicker from 'react-datepicker'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function BookingForm () {
  const [newEvent, setNewEvent] = useState({})
  const handleTitleChanged = () => {

  }
  const handleStartDateChanged = () => {

  }

  const handleEndDateChanged = () => {

  }

  const handleAddEvent = () => {

  }

  return (
    <div>
      <h1> Create new booking </h1>
      <div>
        <input type='text' placeholder='add title' value={newEvent.title} onChange={handleTitleChanged} />
        <Datepicker placeholderText='start date' selected={newEvent.startDate} onChange={handleStartDateChanged} />
        <Datepicker placeholderText='end date' selected={newEvent.endDate} onChange={handleEndDateChanged} />
        <button onClick={handleAddEvent}>Add event</button>
      </div>
    </div>
  )
}
