import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { BookingsService } from './bookings.service';
import { Booking } from './entities/booking.entity';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(private readonly bookingsService: BookingsService) {}

  @Mutation(() => Booking)
  async createBooking(@Args('createBookingInput') createBookingInput: CreateBookingInput) {
    const result = await this.bookingsService.create(createBookingInput);
    console.log(result)
    return result
  }

  @Query(() => [Booking], { name: 'bookings' })
  findAll(
    @Args('buildingId', { type: () => ID }) buildingId: string,
    @Args('meetingRoomId', { type: () => ID }) meetingRoomId: string
  ) {
    return this.bookingsService.findAllByBuilding(buildingId, meetingRoomId);
  }
  
  @Query(() => String, { name: 'hello' })
  hello() {
    return 'world'
  }

  @Query(() => Booking, { name: 'booking' })
  findOne(@Args('potato', { type: () => Int }) id: number) {
    return this.bookingsService.findOne(id);
  }

  @Mutation(() => Booking)
  updateBooking(@Args('updateBookingInput') updateBookingInput: UpdateBookingInput) {
    return this.bookingsService.update(updateBookingInput.id, updateBookingInput);
  }

  @Mutation(() => Booking)
  removeBooking(@Args('id', { type: () => Int }) id: number) {
    return this.bookingsService.remove(id);
  }
}
