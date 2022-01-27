
import './App.css'
import BookingForm from './components/BookingForm'
import { BigCalendar } from './components/BigCalendar'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
import { useEffect, useState, useCallback, memo } from 'react'
import { ALL_BOOKINGS_QUERY, CREATE_BOOKING_MUTATION, DELETE_BOOKING_MUTATION, GET_BUILDINGS_QUERY } from './helpers/graphql-operations'

function App () {
  const [bookings, setBookings] = useState([])
  const [building, setBuilding] = useState()
  const [currentRoom, setCurrentRoom] = useState()

  const { loading: getBuildingLoading, error: getBuildingsError, data: getBuildingsData } = useQuery(GET_BUILDINGS_QUERY)
  const [getBookings, { loading, error, data }] = useLazyQuery(ALL_BOOKINGS_QUERY)

  const [createBooking, { loading: isCreateBookingLoading, error: createBookingError }] = useMutation(CREATE_BOOKING_MUTATION)
  const [deleteBooking] = useMutation(DELETE_BOOKING_MUTATION)

  useEffect(() => {
    if (getBuildingsData && getBuildingsData.buildings) {
      setBuilding(getBuildingsData.buildings[0])
    }
  }, [getBuildingsData])

  useEffect(() => {
    if (building) {
      const defaultRoom = building.meetingRooms[0]
      if (!currentRoom) {
        setCurrentRoom(defaultRoom)
      }

      getBookings({
        variables: {
          buildingId: building._id,
          meetingRoom: currentRoom ? currentRoom._id : defaultRoom._id
        }
      })
    }
  }, [building, getBookings, currentRoom])

  useEffect(() => {
    if (data && data.bookings) {
      // transform backend data into ui component's data
      const events = data.bookings.map(booking => ({
        ...booking,
        title: booking.name,
        start: new Date(booking.startDate),
        end: new Date(booking.endDate)
      }))
      console.log(events)
      setBookings(events)
    }
  }, [data])

  const handleRoomChanged = useCallback(e => {
    e.stopPropagation()
    setCurrentRoom(building.meetingRooms.find(room => room._id === e.target.value))
  }, [setCurrentRoom, building])

  const handleEventDoubleClicked = useCallback(item => {
    deleteBooking({
      variables: {
        bookingId: item._id
      },
      refetchQueries: [ALL_BOOKINGS_QUERY]
    })
  }, [deleteBooking])

  const createNewEvent = useCallback(async submittedEvent => {
    console.log({ newEvent: submittedEvent })
    await createBooking({
      variables: {
        createBookingInput: {
          ...submittedEvent,
          company: building.companiesInBuilding[0],
          building: building._id,
          meetingRoom: currentRoom._id
        }
      },
      refetchQueries: [ALL_BOOKINGS_QUERY]
    })
  }, [createBooking, building, currentRoom])

  return (
    <div className='App'>
      {building && currentRoom && building.meetingRooms && <div className='App-room-dropdown'>Check Room Availability:
        <select onChange={handleRoomChanged}>
          {building.meetingRooms.map((room, index) => <option selected={currentRoom._id === room._id || index === 0} value={room._id} key={room._id}>{room.name}</option>)}
        </select>
      </div>}
      <div className='App-wrapper'>
        {(loading || isCreateBookingLoading || getBuildingLoading) && <div> Loading ... </div>}
        {(error || createBookingError || getBuildingsError) && <div> Error {(error || createBookingError || getBuildingsError).message} </div>}
        {data &&
          <>
            {currentRoom && <BookingForm className='app_booking-form' chosenRoom={currentRoom} onSubmit={createNewEvent} />}
            <div className='app_big-calendar'>
              <BigCalendar onEventDoubleClicked={handleEventDoubleClicked} events={bookings} />
            </div>
          </>}

      </div>
    </div>
  )
}

export default memo(App)
