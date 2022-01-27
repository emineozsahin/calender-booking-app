
import './App.css'
import BookingForm from './BookingForm'
import { BigCalendar } from './Calendar'
import { useQuery, gql } from '@apollo/client'

const ALL_BOOKINGS_QUERY = gql`
  query Bookings($building: ID!) {
    bookings(buildingId: $building) {
      name
      meetingRoom
      company
      building
      bookedBy
      startDate
      endDate
    }
  }`

function App () {
  const { loading, error, data } = useQuery(ALL_BOOKINGS_QUERY, {
    variables: {
      building: 'Coke and Pepsi Building'
    }
  })

  return (
    <div className='App'>

      {loading && <div> Loading ... </div>}
      {error && <div> Error {error.message} </div>}
      {data &&
        <>
          <BookingForm />
          <BigCalendar />
        </>}

    </div>
  )
}

export default App
