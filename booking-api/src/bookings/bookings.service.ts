import { BuildingsService } from './../buildings/buildings.service';
import { Booking, BookingDocument } from './entities/booking.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';
import { Model } from 'mongoose';

@Injectable()
export class BookingsService {

  constructor(@InjectModel(Booking.name) private buildingModel: Model<BookingDocument>, private buildingsService: BuildingsService) {}


  create(createBookingInput: CreateBookingInput) {
    return 'This action adds a new booking';
  }

  findAll() {
    return `This action returns all bookings`;
  }

  async findAllByBuilding(buildingId: string) {
    return this.buildingModel.find({ building: buildingId}).lean()
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingInput: UpdateBookingInput) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
