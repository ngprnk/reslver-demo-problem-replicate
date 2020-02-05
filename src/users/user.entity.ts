import { Field, Int, ObjectType } from 'type-graphql';
import { Book } from './book.entity';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Book], {nullable: true})
  books: Book[];
}