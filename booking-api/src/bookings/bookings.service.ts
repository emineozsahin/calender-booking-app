import { BuildingsService } from './../buildings/buildings.service';
import { Booking, BookingDocument } from './entities/booking.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';
import { Model } from 'mongoose';

@Injectable()
export class BookingsService {

  constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>) {}


  create(createBookingInput: CreateBookingInput) {
    return this.bookingModel.create(createBookingInput)
  }

  findAll() {
    return `This action returns all bookings`;
  }

  async findAllByBuilding(buildingId: string, meetingRoomId: string) {
    return this.bookingModel.find({ building: buildingId, meetingRoom: meetingRoomId}).lean()
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingInput: UpdateBookingInput) {
    return `This action updates a #${id} booking`;
  }

  remove(id: string) {
    return this.bookingModel.findByIdAndDelete(id).lean()
  }
}
