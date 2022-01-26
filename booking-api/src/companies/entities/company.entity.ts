import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
@ObjectType()
export class Company {
  @Prop()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  employees: Array<string>  
}

export const CompanySchema = SchemaFactory.createForClass(Company);

