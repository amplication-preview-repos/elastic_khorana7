import * as graphql from "@nestjs/graphql";
import { ProblemResolverBase } from "./base/problem.resolver.base";
import { Problem } from "./base/Problem";
import { ProblemService } from "./problem.service";

@graphql.Resolver(() => Problem)
export class ProblemResolver extends ProblemResolverBase {
  constructor(protected readonly service: ProblemService) {
    super(service);
  }
}
