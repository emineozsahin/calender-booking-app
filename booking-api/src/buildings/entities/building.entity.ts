import { Company } from './../../companies/entities/company.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MeetingRoom } from './meeting-room.entity';

export type BuildingDocument = Building & Document;

@Schema({
  timestamps: true
})
@ObjectType()
export class Building {
  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @Prop()
  @Field(() => [MeetingRoom], { description: 'Example field (placeholder)' })
  meetingRooms: Array<MeetingRoom>

  @Prop({type: Types.ObjectId, ref: 'Company'})
  @Field(() => Int, { description: 'Example field (placeholder)' })
  companiesInBuilding: Array<Company>

  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  address: string
}

export const BuildingSchema = SchemaFactory.createForClass(Building);

