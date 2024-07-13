import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CheckService } from "./check.service";
import { CheckControllerBase } from "./base/check.controller.base";

@swagger.ApiTags("checks")
@common.Controller("checks")
export class CheckController extends CheckControllerBase {
  constructor(protected readonly service: CheckService) {
    super(service);
  }
}
