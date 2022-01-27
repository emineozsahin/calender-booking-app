import { Building } from './../../buildings/entities/building.entity';
import { MeetingRoom } from '../../buildings/entities/meeting-room.entity'
import { Company } from './../../companies/entities/company.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema({
  timestamps: true
})
@ObjectType()
export class Booking {

  @Field(() => ID, { description: 'id '})
  _id?: string
  
  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @Prop({type: Types.ObjectId, ref: 'Company'})
  @Field(() => String, { description: 'Example field (placeholder)' })
  company: Company

  @Prop({type: Types.ObjectId, ref: 'Building'})
  @Field(() => String, { description: 'Example field (placeholder)' })
  building: Building

  @Prop({type: Types.ObjectId})
  @Field(() => String, { description: 'Example field (placeholder)' })
  meetingRoom: MeetingRoom

  // @Prop()
  // @Field(() => String, { description: 'Example field (placeholder)' })
  // bookedBy: string

  @Prop()
  @Field(() => Date, { description: 'Example field (placeholder)' })
  startDate: Date

  @Prop()
  @Field(() => Date, { description: 'Example field (placeholder)' })
  endDate: Date
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

