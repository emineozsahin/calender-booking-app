import { gql } from '@apollo/client'

// TODO: use graphql-codegen
export const ALL_BOOKINGS_QUERY = gql`
  query bookings($buildingId: ID!, $meetingRoom: ID!) {
    bookings(buildingId: $buildingId, meetingRoomId: $meetingRoom) {
      _id
      name
      meetingRoom
      company
      building
      startDate
      endDate
    }
  }`

export const CREATE_BOOKING_MUTATION = gql`
  mutation createBooking($createBookingInput:CreateBookingInput!) {
    createBooking(createBookingInput: $createBookingInput) {
      _id
      name
      meetingRoom
      startDate
      endDate
    }
  }
`

export const GET_BUILDINGS_QUERY = gql`
  query buildings {
    buildings {
      _id
      address
      companiesInBuilding
      meetingRooms {
        _id
        name
        company
      }
      name
    }
  }
  `
