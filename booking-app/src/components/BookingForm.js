import React, { useState } from 'react'
import Datepicker from 'react-datepicker'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './BookingForm.css'

export default function BookingForm ({ onSubmit, availableRooms, className }) {
  const [eventForm, setEventForm] = useState({})

  const handleNameChanged = (e) => {
    setEventForm({ ...eventForm, name: e.target.value })
  }
  const handleStartDateChanged = (date) => {
    setEventForm({ ...eventForm, startDate: date })
  }

  const handleRoomChanged = e => {
    console.log(e.target.value)
    e.stopPropagation()
    setEventForm({ ...eventForm, meetingRoom: e.target.value })
  }
  const handleEndDateChanged = (date) => {
    setEventForm({ ...eventForm, endDate: date })
  }

  const handleAddEventClicked = (e) => {
    e.stopPropagation()
    onSubmit(eventForm)
  }

  return (
    <div className={`booking-form ${className}`}>
      <h1> Create a new booking </h1>
      <div>
        <input type='text' className='field' placeholder='meeting name' onChange={handleNameChanged} />
        <div className='field'>
          <select onChange={handleRoomChanged}>
            <option value='' selected disabled hidden>Choose a Meeting Room</option>
            {availableRooms.map(room => <option value={room._id} key={room._id}>{room.name}</option>)}
          </select>
        </div>
        <Datepicker className='field' placeholderText='start date' showTimeSelect selected={eventForm.startDate} onChange={handleStartDateChanged} />
        <Datepicker className='field' placeholderText='end date' showTimeSelect selected={eventForm.endDate} onChange={handleEndDateChanged} />
        <button onClick={handleAddEventClicked}>Add event</button>
      </div>
    </div>
  )
}
