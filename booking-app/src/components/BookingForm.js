import React, { useState, memo, useCallback } from 'react'
import Datepicker from 'react-datepicker'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './BookingForm.css'

export default memo(function BookingForm ({ onSubmit, chosenRoom, className }) {
  const [eventForm, setEventForm] = useState({ meetingRoom: chosenRoom._id })

  const handleNameChanged = useCallback((e) => {
    setEventForm({ ...eventForm, name: e.target.value })
  }, [setEventForm, eventForm])

  const handleStartDateChanged = useCallback((date) => {
    setEventForm({ ...eventForm, startDate: date })
  }, [setEventForm, eventForm])

  const handleEndDateChanged = useCallback((date) => {
    setEventForm({ ...eventForm, endDate: date })
  }, [setEventForm, eventForm])

  const handleAddEventClicked = useCallback((e) => {
    e.stopPropagation()
    onSubmit(eventForm)
  }, [eventForm, onSubmit])

  return (
    <div className={`booking-form ${className}`}>
      <h1> Create a new booking </h1>
      <div>
        <input type='text' className='field' placeholder='meeting name' onChange={handleNameChanged} />
        <div className='field'>
          Room: <select disabled>
            <option hidden value={chosenRoom._id}>{chosenRoom.name}</option>
          </select>
        </div>
        <Datepicker className='field' placeholderText='start date' showTimeSelect selected={eventForm.startDate} onChange={handleStartDateChanged} />
        <Datepicker className='field' placeholderText='end date' showTimeSelect selected={eventForm.endDate} onChange={handleEndDateChanged} />
        <button onClick={handleAddEventClicked}>Add event</button>
      </div>
    </div>
  )
})
