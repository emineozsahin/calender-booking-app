import { CreateBuildingInput } from './create-building.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBuildingInput extends PartialType(CreateBuildingInput) {
  @Field(() => Int)
  id: number;
}
