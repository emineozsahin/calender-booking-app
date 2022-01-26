import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Company } from 'src/companies/entities/company.entity';
import { Types } from 'mongoose'

export type MeetingRoomDocument = MeetingRoom & Document;
@Schema()
@ObjectType()
export class MeetingRoom {
  @Prop()
  @Field(() => String)
  name: String

  @Prop({ type: Types.ObjectId, ref: 'Company' })
  @Field(() => Company)
  company: Company
}

export const MeetingRoomSchema = SchemaFactory.createForClass(MeetingRoom);

