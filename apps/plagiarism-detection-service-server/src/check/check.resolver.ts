import * as graphql from "@nestjs/graphql";
import { CheckResolverBase } from "./base/check.resolver.base";
import { Check } from "./base/Check";
import { CheckService } from "./check.service";

@graphql.Resolver(() => Check)
export class CheckResolver extends CheckResolverBase {
  constructor(protected readonly service: CheckService) {
    super(service);
  }
}
