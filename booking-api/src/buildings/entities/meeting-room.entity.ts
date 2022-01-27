import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Company } from 'src/companies/entities/company.entity';
import { Types } from 'mongoose'

export type MeetingRoomDocument = MeetingRoom & Document;
@Schema()
@ObjectType()
export class MeetingRoom {

  @Field(() => ID, { description: 'id '})
  _id?: string
  
  @Prop()
  @Field(() => String)
  name: String

  @Prop({ type: Types.ObjectId, ref: 'Company' })
  @Field(() => ID)
  company: string
}

export const MeetingRoomSchema = SchemaFactory.createForClass(MeetingRoom);

