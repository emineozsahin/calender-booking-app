import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type MeetingRoomDocument = MeetingRoom & Document;


@Schema()
@ObjectType()
export class MeetingRoom {
  @Prop()
  @Field(() => String)
  name: String
}

export const MeetingRoomSchema = SchemaFactory.createForClass(MeetingRoom);

