import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field(() => Date, { description: 'Start Date' })
  startDate: Date;

  @Field(() => Date, { description: 'End Date' })
  endDate: Date;

  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => ID, { description: 'Company' })
  company: string;

  @Field(() => ID, { description: 'Building' })
  building: string;

  @Field(() => ID, { description: 'Meeting Room' })
  meetingRoom: string;
}
