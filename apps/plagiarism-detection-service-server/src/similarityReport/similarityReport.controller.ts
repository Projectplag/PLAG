import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SimilarityReportService } from "./similarityReport.service";
import { SimilarityReportControllerBase } from "./base/similarityReport.controller.base";

@swagger.ApiTags("similarityReports")
@common.Controller("similarityReports")
export class SimilarityReportController extends SimilarityReportControllerBase {
  constructor(protected readonly service: SimilarityReportService) {
    super(service);
  }
}
