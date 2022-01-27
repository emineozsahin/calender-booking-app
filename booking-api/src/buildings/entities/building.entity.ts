import { Company } from './../../companies/entities/company.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MeetingRoom, MeetingRoomSchema } from './meeting-room.entity';

export type BuildingDocument = Building & Document;

@Schema({
  timestamps: true
})
@ObjectType()
export class Building {

  @Field(() => ID, { description: 'id '})
  _id?: string
  
  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @Prop({ type: [MeetingRoomSchema] })
  @Field(() => [MeetingRoom], { description: 'Example field (placeholder)' })
  meetingRooms: Array<MeetingRoom>

  @Prop({type: Types.ObjectId, ref: 'Company'})
  @Field(() => [ID], { description: 'Example field (placeholder)' })
  companiesInBuilding: Array<Company>

  @Prop()
  @Field(() => String, { description: 'Example field (placeholder)' })
  address: string
}

export const BuildingSchema = SchemaFactory.createForClass(Building);

