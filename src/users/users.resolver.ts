import { User } from "./user.entity";
import { ResolveProperty, Parent ,Query,Resolver} from "@nestjs/graphql";
import { Book } from "./book.entity";

@Resolver(of => User)
export class UserResolver {
	@Query(() => [User])
  async users() {
    return [{id: 12313, firstName: "asdad", lastName: "Adad"}];
  }

  @ResolveProperty(()=> [Book])
  async books(@Parent() parent) {
		console.log(parent);
    return [{id: 123213, title: "this is a book title"}];
  }
}