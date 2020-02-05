import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Book {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  title?: string;
}