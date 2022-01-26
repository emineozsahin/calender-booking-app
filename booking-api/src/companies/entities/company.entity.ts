import { Building } from './../../buildings/entities/building.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
@ObjectType()
export class Company {
  @Prop()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  employees: Array<string>  

  @Prop({ unique: true })
  @Field(() => String, { description: 'Company nae' })
  name: String

  @Prop({
    type: Types.ObjectId, ref: 'Building',
    default: []
  })
  @Field(() => Building)
  buildings?: Building[]
}

export const CompanySchema = SchemaFactory.createForClass(Company);

