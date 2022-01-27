
import './App.css'
import BookingForm from './BookingForm'
import { BigCalendar } from './Calendar'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { ALL_BOOKINGS_QUERY, CREATE_BOOKING_MUTATION, GET_BUILDINGS_QUERY } from './graphql'

function App () {
  const [bookings, setBookings] = useState([])
  const [building, setBuilding] = useState({})

  const { loading: getBuildingLoading, error: getBuildingsError, data: getBuildingsData } = useQuery(GET_BUILDINGS_QUERY)
  const [getBookings, { loading, error, data }] = useLazyQuery(ALL_BOOKINGS_QUERY)

  const [createBooking, { loading: isCreateBookingLoading, error: createBookingError }] = useMutation(CREATE_BOOKING_MUTATION)

  useEffect(() => {
    if (getBuildingsData && getBuildingsData.buildings) {
      setBuilding(getBuildingsData.buildings[0])
    }
  }, [getBuildingsData])

  useEffect(() => {
    if (building) {
      getBookings({
        variables: {
          buildingId: building._id
        }
      })
    }
  }, [building, getBookings])

  useEffect(() => {
    if (data && data.bookings) {
      // transform backend data into ui component's data
      const events = data.bookings.map(booking => ({
        title: booking.name,
        start: booking.startDate,
        end: booking.endDate
      }))
      console.log(events)
      setBookings(events)
    }
  }, [data])

  const createNewEvent = async submittedEvent => {
    console.log({ newEvent: submittedEvent })
    await createBooking({
      variables: {
        createBookingInput: {
          ...submittedEvent,
          company: building.companiesInBuilding[0],
          building: building._id
        }
      },
      refetchQueries: [ALL_BOOKINGS_QUERY]
    })
  }

  return (
    <div className='App'>

      {(loading || isCreateBookingLoading || getBuildingLoading) && <div> Loading ... </div>}
      {(error || createBookingError || getBuildingsError) && <div> Error {(error || createBookingError || getBuildingsError).message} </div>}
      {data &&
        <>
          <BookingForm availableRooms={building.meetingRooms} onSubmit={createNewEvent} />
          {bookings && <BigCalendar events={bookings} />}
        </>}

    </div>
  )
}

export default App
